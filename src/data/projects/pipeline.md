---
title: "Pipeline - Transaction Processing API"
description: "A backend API for processing dirty CSV financial transactions with LLM-powered classification, anomaly detection, and async job processing."
image: "/projects/project2.avif"
technologies:
  - FastAPI
  - Python
  - PostgreSQL
  - Redis
  - Celery
  - Groq
  - Docker
github: "https://github.com/Rahul-Aitla/pipeline"
live: "https://github.com/Rahul-Aitla/pipeline"
timeline: "July 2026"
role: "Creator"
team: "Solo"
status: "In Development"
featured: true
challenges:
  - Handling dirty/unstructured CSV data
  - Designing an async job queue for transaction processing
  - LLM prompt engineering for financial classification
  - Ensuring data consistency across async pipelines
learnings:
  - FastAPI for high-performance APIs
  - Celery + Redis for async job queues
  - Groq LLM integration for classification
  - Docker Compose for multi-service orchestration
isPublished: true
---

# Pipeline — Transaction Processing API

**Pipeline** is a backend API for processing dirty CSV financial transactions. It uses **LLM-powered classification** and **anomaly detection** to clean, categorize, and analyze financial data through an asynchronous job processing system.

---

## What Users Can Do

- Upload dirty CSV files with financial transactions
- Get transactions cleaned and categorized automatically
- Receive LLM-generated narratives for each transaction
- Detect anomalies and suspicious patterns

---

## Key Features

- **CSV Processing** — Handles messy, unstructured financial data
- **LLM Classification** — Groq-powered transaction categorization and narrative generation
- **Async Job Queue** — Celery with Redis for scalable processing
- **Anomaly Detection** — Identify unusual transactions and patterns
- **RESTful API** — Clean API design with FastAPI

---

## Tech Stack

### Backend
- **FastAPI** — High-performance Python web framework
- **Python** — Core programming language
- **PostgreSQL** — Relational database for transaction storage

### Job Processing
- **Celery** — Distributed task queue
- **Redis** — Message broker and result backend

### AI
- **Groq Llama 3.3-70b** — LLM-powered classification and analysis

### Infrastructure
- **Docker Compose** — Multi-service container orchestration

---

## Architecture

1. User uploads a CSV file via the API
2. The file is parsed and transactions are extracted
3. A Celery task is created for each batch of transactions
4. Redis manages the job queue and task states
5. Groq LLM classifies each transaction and generates narratives
6. Results are stored in PostgreSQL for querying
7. Anomaly detection runs on processed transactions

---

## Development Experience

### API Design
- Built a clean, RESTful API with FastAPI
- Added request validation and error handling

### Async Processing
- Configured Celery workers with Redis as the broker
- Implemented task retries and error handling

### LLM Integration
- Engineered prompts for financial transaction classification
- Built a structured output parser for LLM responses

### Infrastructure
- Dockerized all services with Docker Compose
- Set up health checks and service dependencies

---

## Future Enhancements

- **Dashboard UI** — Web interface for uploads and visualization
- **Advanced Analytics** — Trend analysis and reporting
- **Multi-format Support** — Handle PDF statements and other formats
- **User Authentication** — Multi-tenant support with access control
