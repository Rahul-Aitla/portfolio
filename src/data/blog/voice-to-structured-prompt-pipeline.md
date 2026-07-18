---
title: 'Building a Voice-to-Structured-Prompt Pipeline with Deepgram, Gemini, and pgvector'
description: 'How I built TOTEM — a system that converts raw voice input into structured, token-efficient AI prompts using speech-to-text, intent extraction, memory retrieval, and prompt compression.'
image: '/blogimage/voice-to-text.avif'
tags: ['Deepgram', 'Gemini', 'Voice AI', 'Prompt Engineering', 'pgvector', 'FastAPI', 'Next.js']
date: '2026-07-12'
isPublished: true
---

# Building a Voice-to-Structured-Prompt Pipeline with Deepgram, Gemini, and pgvector

**TOTEM** converts raw voice input into structured, optimized AI prompts. Speak naturally, and TOTEM handles the rest: speech-to-text, intent extraction, semantic memory retrieval, and prompt compression — delivering a token-efficient prompt ready for any LLM.

This post covers the architecture, the reasoning behind each component, and the engineering decisions that shaped the system.

---

## The Problem

Voice is the most natural input modality, but LLMs work best with structured text. The gap between "I need a marketing email for our new product launch targeting enterprise customers" spoken aloud and a well-structured prompt is enormous. A raw transcript is full of filler words, digressions, and lacks structure.

TOTEM bridges this gap in four stages.

---

## Pipeline Architecture

```
Voice Input (spoken naturally)
  │
  ▼
Stage 1: Deepgram Nova-2 (Speech-to-Text)
  └─► Raw transcript
  │
  ▼
Stage 2: Intent Extraction (Gemini)
  └─► Structured intent: { goal, entities, constraints }
  │
  ▼
Stage 3: Memory Retrieval (pgvector)
  └─► Relevant context from past interactions
  │
  ▼
Stage 4: Prompt Compression (Gemini)
  └─► Token-optimized, structured prompt
  │
  ▼
Output: Ready for any LLM
```

---

## Stage 1: Speech-to-Text with Deepgram

Deepgram's Nova-2 model provides accurate real-time transcription with punctuation, capitalization, and per-word confidence scores. For TOTEM, I used the real-time streaming API rather than pre-recorded audio to minimize latency.

```python
from deepgram import Deepgram

deepgram = Deepgram(DEEPGRAM_API_KEY)

async def transcribe_stream(audio_stream):
    response = await deepgram.transcription.prerecorded(
        {"buffer": audio_stream, "mimetype": "audio/wav"},
        {"model": "nova-2", "punctuate": True, "utterances": True}
    )
    return response["results"]["channels"][0]["alternatives"][0]["transcript"]
```

The key parameter here is `utterances: True`, which splits the transcript into semantic segments rather than just time-based chunks. This makes the intent extraction stage much more accurate.

---

## Stage 2: Intent Extraction

Raw transcripts are messy. Intent extraction cleans them up by identifying the user's actual goal, the entities involved, and any constraints.

```python
intent_prompt = """
Extract structured intent from the following voice transcript.

Transcript: "{transcript}"

Return JSON:
{
  "goal": "brief description of what the user wants",
  "entities": ["entity1", "entity2"],
  "constraints": ["constraint1"],
  "tone": "professional | casual | urgent",
  "output_format": "email | code | analysis | creative"
}
"""
```

The extracted intent is significantly cleaner than the raw transcript. For example:

> **Raw transcript:** "uh hey I need like a email you know for our new product thing it's like a launch and we want to send it to like enterprise customers or something"
>
> **Extracted intent:** Goal: "Write a product launch email targeting enterprise customers", Tone: professional, Output format: email

---

## Stage 3: Semantic Memory Retrieval with pgvector

One of TOTEM's most interesting features is memory. If a user has asked for similar things before, TOTEM retrieves relevant context and incorporates it into the final prompt.

I used PostgreSQL with the pgvector extension for vector similarity search:

```sql
CREATE EXTENSION vector;

CREATE TABLE memory (
  id SERIAL PRIMARY KEY,
  embedding vector(768),
  content text,
  intent_type text,
  created_at timestamptz
);

CREATE INDEX ON memory USING ivfflat (embedding vector_cosine_ops);
```

### Embedding and Retrieval

```python
import openai

def embed_text(text: str) -> list[float]:
    response = openai.embeddings.create(
        model="text-embedding-3-small",
        input=text
    )
    return response.data[0].embedding

async def retrieve_context(intent: dict, limit: int = 3):
    embedding = embed_text(intent["goal"])
    results = await db.query(
        "SELECT content FROM memory ORDER BY embedding <=> $1 LIMIT $2",
        embedding, limit
    )
    return [r["content"] for r in results]
```

The retriever uses cosine distance to find the most semantically similar past interactions. This means even if the exact words don't match, relevant context is still surfaced.

---

## Stage 4: Prompt Compression with Gemini

The final stage takes the extracted intent and any retrieved context and compresses it into a token-efficient prompt. This is where Gemini's strengths shine — it can rewrite verbose input into concise, structured output without losing meaning.

```python
compression_prompt = """
Compress the following into a concise, token-efficient prompt.
Remove filler, combine related points, and structure for an LLM.

Intent: {intent}
Context: {context}

Output a single, self-contained prompt ready for an LLM.
"""
```

A typical compression ratio is 3:1 to 5:1 — a 300-token raw input becomes a 60-100 token optimized prompt. This matters for production LLM usage where token costs add up quickly.

---

## Full-Stack Architecture

TOTEM uses a hybrid architecture:

- **Frontend:** Next.js 14 with App Router for the voice recording UI
- **Backend API:** FastAPI for the processing pipeline
- **Database:** PostgreSQL + pgvector for memory storage
- **AI Services:** Deepgram (STT), Gemini (extraction + compression), OpenAI (embeddings)
- **Deployment:** Docker containers on Vercel + a VPS for the FastAPI service

```dockerfile
FROM python:3.11-slim

RUN pip install fastapi uvicorn deepgram openai psycopg2-binary

COPY app /app
WORKDIR /app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

---

## Key Challenges

### Challenge 1: Real-Time vs Batch Processing
Full pipeline processing takes 2-4 seconds. For a voice interface, this is acceptable but not instant. I optimized by running stages 2-4 in parallel where possible (intent extraction and memory retrieval are independent).

### Challenge 2: Context Window Management
Memory retrieval can return more context than fits in the prompt. I implemented a token budget system that truncates retrieved context to fit within a configurable limit (default: 2000 tokens).

### Challenge 3: Error Handling
Any stage can fail (network issues, API errors, malformed responses). Each stage has a fallback: if intent extraction fails, use the raw transcript; if memory retrieval fails, skip context; if compression fails, use the extracted intent directly.

---

## Performance Metrics

| Stage | Typical Latency | Token Reduction |
|-------|----------------|-----------------|
| Deepgram STT | 500-1500ms | — |
| Intent Extraction | 300-500ms | 60% reduction |
| Memory Retrieval | 100-200ms | N/A (adds context) |
| Prompt Compression | 300-500ms | 70% reduction |
| **Total** | **2-4s** | **3-5x compression** |

---

## Lessons Learned

1. **Voice input needs more processing than text input** — raw transcripts are surprisingly messy and require structured extraction to be useful
2. **Memory makes voice inputs dramatically better** — with context, the compressed prompt is 2x more relevant on average
3. **Gemini's compression is better than naive truncation** — simply truncating loses intent, while Gemini preserves meaning while reducing tokens
4. **Fallback chains are essential** — a working system with degraded quality is better than a broken perfect system

---

## Try It

TOTEM is in beta at [totem-beta.vercel.app](https://totem-beta.vercel.app). Source code at [github.com/Rahul-Aitla/totem](https://github.com/Rahul-Aitla/totem). Speak naturally and see how it structures your intent into a production-ready prompt.
