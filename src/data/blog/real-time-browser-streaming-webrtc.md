---
title: 'Real-Time Browser Streaming with WebRTC, Playwright, and Docker'
description: 'How I built a real-time remote browser platform that streams and controls containerized headless Chromium instances using WebRTC, Playwright, Docker, and the Chrome DevTools Protocol.'
image: '/blogimage/webrtc-streaming.jpg'
tags: ['WebRTC', 'Playwright', 'Docker', 'Browser Automation', 'Real-Time', 'CDP']
date: '2026-07-13'
isPublished: true
---

# Real-Time Browser Streaming with WebRTC, Playwright, and Docker

Streaming a live browser to a remote user with sub-second latency is a fascinating engineering challenge. I built **BLD** — a remote browser control platform — that does exactly this. This post breaks down the architecture and the key technical decisions that made it work.

The stack: WebRTC for media streaming, Playwright for browser automation, Docker for container isolation, and Chrome DevTools Protocol (CDP) for deep browser control.

---

## Architecture Overview

```
User's Browser (Client)
  │  WebRTC (video/audio streams + data channel)
  ▼
Signaling Server (Next.js API)
  │  Coordinates WebRTC connection setup
  ▼
Docker Container
  ├── Headless Chromium
  │   ├── Playwright (automation)
  │   └── CDP (deep control)
  └── WebRTC Screen Capture
```

Each user gets their own isolated Docker container running a full Chromium browser. The browser's screen is captured via WebRTC and streamed in real-time to the user's browser, while user interactions (clicks, keystrokes) are sent back via WebRTC data channels.

---

## Why WebRTC?

WebRTC is the only viable choice for real-time browser streaming at scale. Alternatives like:

- **MJPEG over HTTP** — Works but has high latency (several seconds) and no audio
- **RTMP/HLS** — Designed for broadcast, not interactive streaming (5-20 second delay)
- **VNC over TCP** — Not browser-native, requires client software

WebRTC gives us sub-500ms latency with built-in audio and video sync, adaptive bitrate, and NAT traversal — all in the browser with zero plugins.

---

## Playwright for Browser Automation

Playwright is Microsoft's browser automation framework. Unlike Selenium or Puppeteer, Playwright provides a unified API for Chromium, Firefox, and WebKit. For this project, I used it to:

### Launch and Manage the Browser

```typescript
import { chromium } from 'playwright';

const browser = await chromium.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-dev-shm-usage',
    '--use-fake-ui-for-media-stream',
    '--autoplay-policy=no-user-gesture-required',
  ],
});

const context = await browser.newContext({
  viewport: { width: 1920, height: 1080 },
});

const page = await context.newPage();
await page.goto('https://example.com');
```

### Capture the Browser's Screen

Playwright exposes a video recording API, but for real-time streaming I needed something different. The solution was to use Chromium's built-in `chrome.desktopCapture` API via CDP to capture the browser's own tab as a WebRTC media stream.

---

## Docker Containerization

Each browser session runs in its own Docker container. This provides:

- **Isolation** — Users can't affect each other
- **Security** — Malicious websites are sandboxed
- **Resource limits** — CPU/memory caps per container
- **Cleanup** — Containers are destroyed after session timeout

### Dockerfile

```dockerfile
FROM mcr.microsoft.com/playwright:v1.40.0

RUN npx playwright install chromium

# Browser session management
COPY session-manager /app
WORKDIR /app
CMD ["node", "server.js"]
```

### Orchestration

```typescript
import Docker from 'dockerode';

const docker = new Docker();

async function createBrowserSession(userId: string): Promise<string> {
  const container = await docker.createContainer({
    Image: 'bld-session',
    Env: [`SESSION_ID=${userId}`],
    HostConfig: {
      Memory: 512 * 1024 * 1024, // 512MB
      NanoCPUs: 1_000_000_000,    // 1 CPU
      AutoRemove: true,
    },
  });

  await container.start();
  return container.id;
}
```

---

## Chrome DevTools Protocol (CDP)

CDP gives deep access to Chromium internals beyond what Playwright exposes. I used it for:

- **Screen capture stream** — Accessing `Page.startScreencast` for frame-level capture
- **Input forwarding** — Forwarding mouse and keyboard events via `Input.dispatchMouseEvent` and `Input.dispatchKeyEvent`
- **Network interception** — Modifying requests/responses in transit
- **Performance metrics** — Collecting frame rates, memory usage

```typescript
// Connect to CDP in the container
const client = await CDP({ port: 9222 });

// Start screen capture
await client.send('Page.startScreencast', {
  format: 'jpeg',
  quality: 80,
  maxWidth: 1920,
  maxHeight: 1080,
});

// Listen for frames
client.on('Page.screencastFrame', async ({ data, sessionId }) => {
  // Forward frame to WebRTC pipeline
  webrtcPipeline.pushFrame(Buffer.from(data, 'base64'));
  await client.send('Page.screencastFrameAck', { sessionId });
});
```

---

## WebRTC Data Channel for User Input

Mouse clicks and keystrokes from the user's browser are sent to the container via WebRTC data channels — not through the signaling server. This keeps input latency extremely low.

```typescript
// Client side
const dataChannel = peerConnection.createDataChannel('input');
dataChannel.send(JSON.stringify({
  type: 'mousemove',
  x: 100,
  y: 200,
}));
```

```typescript
// Container side
dataChannel.onmessage = async (event) => {
  const input = JSON.parse(event.data);
  await client.send('Input.dispatchMouseEvent', {
    type: 'mouseMoved',
    x: input.x,
    y: input.y,
  });
};
```

---

## Challenges and Solutions

### Challenge 1: WebRTC Connection Establishment
NAT traversal is notoriously tricky. I used a TURN server (coturn) as a fallback when STUN fails. About 15% of connections require TURN relay.

### Challenge 2: Frame Rate vs Quality
Higher quality means less compression but more bandwidth. I implemented adaptive bitrate that adjusts JPEG quality (50-90) based on the client's reported network conditions via the WebRTC statistics API.

### Challenge 3: Browser Startup Time
Launching Chromium + Playwright inside Docker takes 3-5 seconds. I pre-warm a pool of idle containers and assign them on demand, reducing perceived startup to under 500ms.

### Challenge 4: Audio Sync
Chromium's audio and video tracks arrive on separate WebRTC tracks. I used `RTCPeerConnection`'s synchronization sources (SSRC) to ensure audio stays in sync with video.

---

## Key Takeaways

1. **WebRTC is the right tool** for sub-second interactive streaming — nothing else comes close
2. **CDP + Playwright together** is more powerful than either alone — CDP for raw stream access, Playwright for high-level automation
3. **Docker isolation** is essential for security and resource management in multi-tenant browser streaming
4. **Adaptive quality** is mandatory — a fixed bitrate either wastes bandwidth or provides poor quality depending on the client's network

---

## Try It Out

The project is open source at [github.com/Rahul-Aitla/bld](https://github.com/Rahul-Aitla/bld). It's a solid starting point for anyone building remote browser solutions — whether for testing, demos, or secure browsing.
