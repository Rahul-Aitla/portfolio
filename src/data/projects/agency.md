---
title: "Agency - Design Request Triage Bot"
description: "An automated email-based system that triages design requests for creative agencies. Reads client emails, extracts requirements using AI, and routes them to the right team member."
image: "/projects/project2.avif"
technologies:
  - Node.js
  - TypeScript
  - Express
  - Groq
  - SQLite
github: "https://github.com/Rahul-Aitla/agency"
live: "https://github.com/Rahul-Aitla/agency"
timeline: "June 2026"
role: "Creator"
team: "Solo"
status: "In Development"
featured: true
challenges:
  - Email parsing and intent extraction
  - LLM fallback strategy for reliable classification
  - Webhook integration with email services
  - Structured data extraction from unstructured emails
learnings:
  - Groq SDK integration with keyword fallback
  - Nodemailer for email automation
  - SQLite for lightweight data storage
  - ngrok for local webhook testing
isPublished: true
---

# Agency — Design Request Triage Bot

**Agency** is an automated email triage system for creative agencies. It reads incoming client emails, extracts requirements using AI, intelligently fills in missing information by emailing back, and routes complete requests to the appropriate team member.

---

## What Users Can Do

- Clients send design requests via email
- The bot automatically extracts requirements
- Missing information is requested via follow-up emails
- Complete requests are routed to the right team member

---

## Key Features

- **Email-Based Intake** — Clients submit requests via email
- **AI Requirement Extraction** — Groq-powered parsing of email content
- **Intelligent Fallback** — Keyword-based classification when LLM is unavailable
- **Auto-Followup** — Sends emails to request missing information
- **Team Routing** — Assigns requests to the appropriate team member

---

## Tech Stack

### Backend
- **Node.js** — Runtime environment
- **TypeScript** — Type-safe development
- **Express** — Web framework for API endpoints

### AI
- **Groq Llama 3.3-70b** — LLM for requirement extraction and classification

### Storage & Communication
- **SQLite** — Lightweight database for request storage
- **Nodemailer** — Email sending via Gmail SMTP

### Development Tools
- **ngrok** — Local webhook tunneling for testing

---

## Architecture

1. Client sends an email to the agency's intake address
2. Email is forwarded via webhook to the Express API
3. Groq LLM extracts requirements and intent from the email
4. If information is missing, Nodemailer sends a follow-up email
5. Complete requests are stored in SQLite and routed to the team
6. Keyword fallback ensures reliability if the LLM API is unavailable

---

## Development Experience

### LLM Integration
- Engineered prompts for accurate requirement extraction
- Implemented a keyword-based fallback for reliability

### Email Automation
- Set up Nodemailer with Gmail SMTP for sending/receiving
- Handled email threading and conversation context

### Data Storage
- Used SQLite for simple, zero-config persistence
- Designed a schema for requests, follow-ups, and routing

---

## Future Enhancements

- **Dashboard** — Web UI for managing and viewing requests
- **Slack Integration** — Route requests to Slack channels
- **Priority Detection** — Auto-prioritize urgent requests
- **Analytics** — Track request volume and response times
