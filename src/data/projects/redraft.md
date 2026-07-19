---
title: "ReDraft - Version-Controlled CMS"
description: "A minimalist, professional CMS designed for authors who value version control, focus, and permanence. Built with Node.js, Express, PostgreSQL, and React."
image: "/projects/redraft.avif"
technologies:
  - Node.js
  - TypeScript
  - Express
  - React
  - PostgreSQL
  - Docker
github: "https://github.com/Rahul-Aitla/ReDraft"
live: "https://redraft-cms.vercel.app"
timeline: "2025"
role: "Creator"
team: "Solo"
status: "In Development"
featured: true
challenges:
  - Implementing version control for document history
  - Building a distraction-free writing experience
  - Ensuring data permanence with PostgreSQL
learnings:
  - Full-stack architecture with Node.js, Express, and React
  - PostgreSQL for document versioning and storage
  - Docker containerization for consistent development environments
isPublished: true
---

# ReDraft — Version-Controlled CMS

**ReDraft** is a minimalist, professional CMS designed for authors who value version control, focus, and permanence. Built with **Node.js**, **Express**, **PostgreSQL**, and **React**, it provides a clean, distraction-free writing environment with full document version history.

---

## What Users Can Do

- Write and edit documents in a distraction-free editor
- View and restore previous versions of any document
- Organize content with a clean, intuitive interface

---

## Key Features

- **Version Control** — Full document history with diff viewing and restoration
- **Distraction-Free Editor** — Minimalist writing interface focused on content
- **Data Permanence** — PostgreSQL-backed durable storage with backups
- **Dockerized** — Consistent development and deployment environments

---

## Tech Stack

### Backend
- **Node.js** — JavaScript runtime
- **TypeScript** — Type-safe development
- **Express** — Web framework for API endpoints

### Frontend
- **React** — Component-based UI library

### Database & Infrastructure
- **PostgreSQL** — Relational database for document and version storage
- **Docker** — Containerization for development and deployment

---

## Architecture

1. Authors create and edit documents in the React-based editor
2. Each save creates a new version entry in PostgreSQL
3. Version history is queryable with diff view between revisions
4. Express API handles CRUD operations and version management
5. Docker containers ensure consistent environments across dev and production

---

## Development Experience

### Version Control System
- Designed a PostgreSQL schema for efficient document versioning
- Implemented diff generation and version restoration endpoints

### Writing Experience
- Built a clean, minimal editor UI focused on the writing experience
- Added keyboard shortcuts and auto-save for seamless workflow

### Infrastructure
- Dockerized the entire stack for easy local development
- Set up CI/CD pipeline for automated deployments

---

## Future Enhancements

- **Markdown Support** — Rich markdown editing with live preview
- **Collaborative Editing** — Real-time multi-author editing
- **Export Options** — PDF, Markdown, and HTML export formats
- **API Access** — Programmatic content management via REST API
