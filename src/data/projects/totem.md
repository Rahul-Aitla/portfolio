---
title: "TOTEM - Voice-to-Structured AI Prompt Pipeline"
description: "Converts raw voice input into structured, optimized AI prompts using speech-to-text, intent extraction, memory retrieval, and prompt compression."
image: "/projects/project2.avif"
technologies:
  - Next.js
  - Python
  - FastAPI
  - Deepgram
  - PostgreSQL
  - Docker
  - Gemini
github: "https://github.com/Rahul-Aitla/totem"
live: "https://totem-beta.vercel.app"
timeline: "2025"
role: "Creator"
team: "Solo"
status: "Beta"
featured: true
challenges:
  - Real-time speech-to-text transcription accuracy
  - Intent extraction from natural voice input
  - Token-efficient prompt compression for production LLM workflows
learnings:
  - Deepgram for real-time speech transcription
  - Gemini for prompt optimization and compression
  - FastAPI + Next.js hybrid architecture
  - pgvector for memory retrieval and context management
isPublished: true
---

# TOTEM — Voice-to-Structured AI Prompt Pipeline

**TOTEM** converts raw voice input into structured, optimized AI prompts using speech-to-text, intent extraction, memory retrieval, and prompt compression. It focuses on deterministic, token-efficient prompts suitable for production LLM workflows.

---

## What Users Can Do

- Speak naturally and have voice converted to structured prompts
- Retrieve past context from memory for continuity
- Get token-optimized prompts ready for any LLM

---

## Key Features

- **Speech-to-Text** — Deepgram-powered real-time transcription
- **Intent Extraction** — AI-driven parsing of user intent from voice input
- **Memory Retrieval** — PostgreSQL + pgvector for contextual recall
- **Prompt Compression** — Token-efficient prompt optimization via Gemini
- **Hybrid Architecture** — Next.js frontend with FastAPI backend

---

## Tech Stack

### Frontend
- **Next.js 14** — React framework with App Router

### Backend
- **Python** — Core processing language
- **FastAPI** — High-performance async API framework

### AI & Speech
- **Deepgram** — Real-time speech-to-text transcription
- **Google Gemini** — Prompt optimization and compression

### Database & Infrastructure
- **PostgreSQL + pgvector** — Vector storage for memory retrieval
- **Docker** — Containerized development and deployment

---

## Architecture

1. User speaks naturally into the interface
2. Deepgram transcribes speech to text in real time
3. Intent extraction identifies the user's goal from the transcript
4. Memory retrieval queries pgvector for relevant past context
5. Gemini compresses and optimizes the final prompt for token efficiency
6. The structured prompt is delivered ready for any production LLM

---

## Development Experience

### Speech Pipeline
- Integrated Deepgram Nova-2 for high-accuracy real-time transcription
- Handled audio streaming and buffering for low-latency processing

### AI Processing
- Engineered Gemini prompts for intent extraction and compression
- Built a token optimization pipeline for cost-efficient LLM usage

### Memory System
- Implemented pgvector for semantic memory retrieval
- Designed context window management for conversation continuity

### Full-Stack Integration
- Built a Next.js + FastAPI hybrid architecture
- Dockerized the microservices for consistent deployment

---

## Future Enhancements

- **Multi-Language Support** — Transcribe and process in multiple languages
- **Custom Prompt Templates** — User-defined output formats and structures
- **Analytics Dashboard** — Token savings and usage metrics
- **Plugin System** — Extensible output connectors for various LLM platforms
