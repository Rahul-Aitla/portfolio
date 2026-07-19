---
title: "Livo - AI Pronunciation Analyzer"
description: "Upload an English speech recording and receive AI-powered pronunciation feedback, confidence analysis, and actionable improvement suggestions using Deepgram and Groq."
image: "/projects/livo.avif"
technologies:
  - Next.js
  - React
  - TypeScript
  - Tailwind CSS
  - Deepgram
  - Groq
github: "https://github.com/Rahul-Aitla/livo"
live: "https://livo-amber.vercel.app"
timeline: "July 2026"
role: "Creator"
team: "Solo"
status: "Completed"
featured: true
challenges:
  - Real-time audio processing and transcription
  - Accurate pronunciation scoring
  - LLM prompt engineering for feedback generation
learnings:
  - Deepgram Nova-2 for speech-to-text
  - Groq Llama 3.3-70b for AI analysis
  - Audio file handling in the browser
isPublished: true
---

# Livo — AI Pronunciation Analyzer

**Livo** is an AI-powered pronunciation analysis tool. Upload an English speech recording and get detailed feedback on pronunciation accuracy, confidence levels, and actionable suggestions for improvement.

---

## What Users Can Do

- Upload English speech recordings via a simple interface
- Get AI-powered pronunciation analysis with scores
- Receive detailed feedback on specific areas of improvement
- Track progress over time

---

## Key Features

- **Deepgram Nova-2 STT** — Accurate speech-to-text transcription
- **Groq Llama 3.3-70b Analysis** — LLM-powered pronunciation scoring and feedback
- **Confidence Analysis** — Per-word confidence tracking
- **Actionable Suggestions** — Specific improvement recommendations
- **Clean UI** — Modern, responsive interface built with Tailwind CSS

---

## Tech Stack

### Frontend
- **Next.js 15** — React framework with App Router
- **React 19** — UI library
- **Tailwind CSS v4** — Styling
- **TypeScript** — Type safety

### AI & Speech
- **Deepgram Nova-2** — Speech-to-text transcription
- **Groq Llama 3.3-70b** — Pronunciation analysis and feedback

### Deployment
- **Vercel** — Hosting

---

## How It Works

1. User uploads an English speech recording (audio file)
2. Deepgram Nova-2 transcribes the audio to text with per-word confidence scores
3. The transcript and confidence data are sent to Groq's Llama 3.3-70b for analysis
4. The LLM evaluates pronunciation quality and generates feedback
5. Results are displayed with scores and actionable suggestions

---

## Development Experience

### Speech-to-Text Integration
- Integrated Deepgram Nova-2 for high-accuracy transcription
- Handled various audio formats and preprocessing

### LLM Analysis Pipeline
- Engineered prompts for Groq Llama 3.3-70b to provide structured pronunciation feedback
- Parsed LLM responses into actionable insights

### User Experience
- Built a clean, intuitive upload and results interface
- Added loading states and error handling for the async pipeline

---

## Future Enhancements

- **Multi-language Support** — Analyze pronunciation in other languages
- **Real-time Analysis** — Process speech as it's being recorded
- **Progress Tracking** — History and improvement metrics over time
- **Mobile App** — Native mobile experience for on-the-go practice
