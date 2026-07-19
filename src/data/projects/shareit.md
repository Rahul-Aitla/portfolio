---
title: "ShareIt - Temporary File Transfer"
description: "A loginless, session-based file transfer application for quickly sharing files from mobile to desktop using QR codes. No signup required."
image: "/projects/shareit.avif"
technologies:
  - Next.js
  - TypeScript
  - Tailwind CSS
github: "https://github.com/Rahul-Aitla/shareit"
live: "https://shareit-files.vercel.app"
timeline: "January 2026"
role: "Creator"
team: "Solo"
status: "Completed"
featured: true
challenges:
  - Session-based file sharing without authentication
  - QR code generation and scanning integration
  - In-memory storage with auto-expiry
learnings:
  - QR code generation with qrcode.react
  - In-memory session management
  - Mobile-first responsive design
isPublished: true
---

# ShareIt — Temporary File Transfer App

**ShareIt** is a loginless, session-based file transfer application for quickly sharing files from mobile to desktop using QR codes. No accounts, no signups — just scan and share.

---

## What Users Can Do

- Upload files from any device
- Generate a QR code for instant sharing
- Scan the QR code from another device to download
- Files auto-expire for privacy and security

---

## Key Features

- **Loginless** — No accounts or authentication needed
- **QR Code Sharing** — Instant file transfer via QR codes
- **Auto-Expiry** — Files are automatically removed after 10 minutes
- **Cross-Platform** — Works on any device with a browser
- **Mobile-First** — Designed for mobile-to-desktop workflow

---

## Tech Stack

### Frontend & Backend
- **Next.js 16** — Full-stack React framework (App Router)
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling

### Key Libraries
- **qrcode.react** — QR code generation

### Storage
- **In-memory storage** — No database required, auto-expiry

---

## How It Works

1. User uploads a file on the web interface
2. A unique session is created with the file stored in memory
3. A QR code is generated containing the session link
4. User scans the QR code from another device
5. The file is served and automatically deleted after 10 minutes

---

## Development Experience

### Simplicity First
- Designed a zero-friction UX — no signup, no login
- Built in-memory storage to avoid database dependencies

### QR Integration
- Integrated qrcode.react for reliable QR code generation
- Optimized QR scanning flow for mobile devices

### Performance
- Minimal dependencies for fast load times
- Efficient in-memory session management

---

## Future Enhancements

- **End-to-end Encryption** — Secure file transfer
- **Larger File Support** — Chunked uploads for big files
- **Custom Expiry** — User-configurable expiration times
- **Download Tracking** — See when files are accessed
