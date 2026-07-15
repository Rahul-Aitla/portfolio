---
title: "AI Receptionist - Voice AI for Healthcare"
description: "An AI-powered voice receptionist for Dr. VJ's Cardiology Clinic. Patients call in and speak with Laura, a virtual medical assistant that handles appointments and inquiries through natural voice conversation."
image: "/projects/project.avif"
technologies:
  - LiveKit
  - Deepgram
  - Groq
  - Python
  - Next.js
  - React
  - Tailwind CSS
  - Docker
github: "https://github.com/Rahul-Aitla/AI-Receptionist"
live: "https://drive.google.com/file/d/168Zev4Od11qGpZlMfgb1iIPzZfeEBGRL/view"
timeline: "June 2026"
role: "Creator"
team: "Solo"
status: "Completed"
featured: true
challenges:
  - Real-time voice pipeline latency optimization
  - Accurate medical speech recognition
  - Natural conversation flow design
  - Multi-language support consideration
learnings:
  - LiveKit Agents for voice pipelines
  - Deepgram Nova-3 for medical STT
  - Groq Llama 3.3 70B for conversation intelligence
  - Silero VAD for voice activity detection
isPublished: true
---

# AI Receptionist — Voice AI for Healthcare

**AI Receptionist** is an AI-powered voice receptionist for Dr. VJ's Cardiology Clinic. Patients call in and speak with **Laura**, a virtual medical assistant that handles appointment booking, patient lookups, and clinic information — all through natural voice conversation.

---

## What Patients Can Do

- Call the clinic and speak naturally with Laura
- Book, reschedule, or cancel appointments
- Get clinic information (hours, location, services)
- Receive appointment confirmations and reminders

---

## Key Features

- **Natural Voice Conversation** — Patients speak naturally, Laura understands and responds
- **Appointment Management** — Full appointment booking workflow
- **Patient Lookup** — Find and verify patient information
- **Clinic Information** — Answer questions about hours, services, location
- **Real-time Processing** — Low-latency voice pipeline for natural interactions

---

## Tech Stack

### Voice Pipeline
- **LiveKit Agents** — Voice agent framework
- **Deepgram Nova-3** — Speech-to-text (medical-optimized)
- **Murf Falcon** — Text-to-speech
- **Silero VAD** — Voice activity detection
- **LiveKit Multilingual Turn Detector** — Conversation turn management

### AI
- **Groq Llama 3.3 70B** — LLM for conversation intelligence and decision-making

### Backend
- **Python 3.9+** — Voice agent backend
- **LiveKit Agents SDK** — Agent framework

### Frontend
- **Next.js 15** — Web interface
- **React 19** — UI library
- **Tailwind CSS v4** — Styling

### Infrastructure
- **Docker** — Containerized deployment

---

## How It Works

1. Patient calls the clinic and is connected to Laura
2. Silero VAD detects when the patient starts speaking
3. Deepgram Nova-3 transcribes speech to text in real-time
4. Groq Llama 3.3 70B processes the intent and generates a response
5. Murf Falcon converts the response to natural speech
6. LiveKit manages the real-time audio streaming and turn detection

---

## Development Experience

### Voice Pipeline
- Built a real-time voice pipeline using LiveKit Agents
- Optimized for low-latency conversation flow

### Medical Speech Recognition
- Used Deepgram Nova-3 with medical vocabulary optimization
- Handled various accents and speech patterns

### Conversation Design
- Engineered prompts for natural, helpful medical assistant behavior
- Designed graceful error handling for misunderstood requests

### Turn Management
- Implemented turn detection for natural conversation flow
- Managed interruptions and multi-turn dialogues

---

## Future Enhancements

- **Multi-language Support** — Serve patients in multiple languages
- **EMR Integration** — Connect with electronic medical records
- **SMS Reminders** — Automated text message appointment reminders
- **Analytics Dashboard** — Call metrics and patient feedback
