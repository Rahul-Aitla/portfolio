import { Python, JavaScript, NodeJs, Docker, PostgreSQL, Prisma, Groq, Deepgram, Redis, FastAPI, Celery, Swiper, Gemini } from '@/lib/techIcons';
import NextJs from '@/components/icons/tech/NextJS';
import TypeScript from '@/components/icons/tech/TypeScript';
import TailwindCss from '@/components/icons/tech/TailwindCss';
import ExpressJs from '@/components/icons/tech/ExpressJs';
import LiveKit from '@/components/icons/tech/LiveKit';
import SQLite from '@/components/icons/tech/SQLite';
import Html from '@/components/icons/tech/Html';
import Css from '@/components/icons/tech/Css';
import Gsap from '@/components/icons/tech/Gsap';
import ReactIcon from '@/components/icons/tech/ReactIcon';

export const ProjectCardData = [
  {
    id: 9,
    title: 'Animastudio',
    subheading: 'AI-Powered Text-to-Animation Engine',
    img: {
      src: '/projects/project3.avif',
      alt: 'Animastudio AI animation engine project',
      width: 1920,
      height: 1080,
    },
    description:
      'Animastudio is an AI-powered system that converts structured text into mathematical and educational animations using Manim. It features NLP-based parsing to transform input prompts into animation sequences and an automated rendering pipeline in Docker.',
    links: {
      website: 'https://github.com/Rahul-Aitla/anima-studio',
      github: 'https://github.com/Rahul-Aitla/anima-studio',
      details: '/projects/anima-studio',
    },
    technologies: [
      {
        name: 'Python',
        icon: <Python />,
        href: 'https://python.org/',
      },
      {
        name: 'Docker',
        icon: <Docker />,
        href: 'https://docker.com/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/anima-studio',
  },
  {
    id: 11,
    title: 'Remote Browser Control',
    subheading: 'Real-Time Browser Streaming Platform',
    img: {
      src: '/projects/project2.avif',
      alt: 'Remote Browser Control platform project',
      width: 1920,
      height: 1080,
    },
    description:
      'A real-time remote browser platform that streams and controls containerized headless Chromium instances using WebRTC, Docker, and Playwright. Integrates Chrome DevTools Protocol (CDP) for browser automation, session management, and live browser control inside isolated Docker containers.',
    links: {
      website: 'https://github.com/Rahul-Aitla/bld',
      github: 'https://github.com/Rahul-Aitla/bld',
      details: '/projects/bld',
    },
    technologies: [
      {
        name: 'Next.js',
        icon: <NextJs />,
        href: 'https://nextjs.org/',
      },
      {
        name: 'Node.js',
        icon: <NodeJs />,
        href: 'https://nodejs.org/',
      },
      {
        name: 'TypeScript',
        icon: <TypeScript />,
        href: 'https://typescriptlang.org/',
      },
      {
        name: 'Docker',
        icon: <Docker />,
        href: 'https://docker.com/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/bld',
  },
  {
    id: 10,
    title: 'Tryit',
    subheading: 'Outfit Image Generation Platform',
    img: {
      src: '/projects/project3.avif',
      alt: 'Tryit outfit generation platform project',
      width: 1920,
      height: 1080,
    },
    description:
      'A full-stack AI platform using Next.js, PostgreSQL, Prisma, and Google Gemini for photorealistic outfit image generation. Features an async job processing system with BullMQ and Redis, and an end-to-end media pipeline with drag-and-drop uploads and cloud storage.',
    links: {
      website: 'https://github.com/Rahul-Aitla/tryit',
      github: 'https://github.com/Rahul-Aitla/tryit',
      details: '/projects/tryit',
    },
    technologies: [
      {
        name: 'Next.js',
        icon: <NextJs />,
        href: 'https://nextjs.org/',
      },
      {
        name: 'TypeScript',
        icon: <TypeScript />,
        href: 'https://typescriptlang.org/',
      },
      {
        name: 'PostgreSQL',
        icon: <PostgreSQL />,
        href: 'https://postgresql.org/',
      },
      {
        name: 'Prisma',
        icon: <Prisma />,
        href: 'https://prisma.io/',
      },
      {
        name: 'Node.js',
        icon: <NodeJs />,
        href: 'https://nodejs.org/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/tryit',
  },
  {
    id: 13,
    title: 'Livo',
    subheading: 'AI Pronunciation Analyzer',
    img: {
      src: '/projects/livo.avif',
      alt: 'Livo AI pronunciation analyzer project',
      width: 1920,
      height: 1080,
    },
    description:
      'Upload an English speech recording and receive AI-powered pronunciation feedback, confidence analysis, and actionable improvement suggestions using Deepgram and Groq.',
    links: {
      website: 'https://livo-amber.vercel.app',
      github: 'https://github.com/Rahul-Aitla/livo',
      details: '/projects/livo',
    },
    technologies: [
      {
        name: 'Next.js',
        icon: <NextJs />,
        href: 'https://nextjs.org/',
      },
      {
        name: 'TypeScript',
        icon: <TypeScript />,
        href: 'https://typescriptlang.org/',
      },
      {
        name: 'Deepgram',
        icon: <Deepgram />,
        href: 'https://deepgram.com/',
      },
      {
        name: 'Groq',
        icon: <Groq />,
        href: 'https://groq.com/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/livo',
  },
  {
    id: 8,
    title: 'Pipeline',
    subheading: 'Transaction Processing API',
    img: {
      src: '/projects/project2.avif',
      alt: 'Pipeline transaction processing project',
      width: 1920,
      height: 1080,
    },
    description:
      'A backend API for processing dirty CSV financial transactions with LLM-powered classification, anomaly detection, and async job processing with Celery and Redis.',
    links: {
      website: 'https://github.com/Rahul-Aitla/pipeline',
      github: 'https://github.com/Rahul-Aitla/pipeline',
      details: '/projects/pipeline',
    },
    technologies: [
      {
        name: 'FastAPI',
        icon: <FastAPI />,
        href: 'https://fastapi.tiangolo.com/',
      },
      {
        name: 'Python',
        icon: <Python />,
        href: 'https://python.org/',
      },
      {
        name: 'PostgreSQL',
        icon: <PostgreSQL />,
        href: 'https://postgresql.org/',
      },
      {
        name: 'Redis',
        icon: <Redis />,
        href: 'https://redis.io/',
      },
      {
        name: 'Celery',
        icon: <Celery />,
        href: 'https://celeryproject.org/',
      },
      {
        name: 'Groq',
        icon: <Groq />,
        href: 'https://groq.com/',
      },
      {
        name: 'Docker',
        icon: <Docker />,
        href: 'https://docker.com/',
      },
    ],
    isWorking: false,
    isBulding: true,
    details: true,
    projectDetailsPageSlug: '/projects/pipeline',
  },
  {
    id: 5,
    title: 'ShareIt',
    subheading: 'Temporary File Transfer',
    img: {
      src: '/projects/project3.avif',
      alt: 'ShareIt file transfer project',
      width: 1920,
      height: 1080,
    },
    description:
      'A loginless, session-based file transfer app for quickly sharing files from mobile to desktop using QR codes. No signup required — just scan and share.',
    links: {
      website: 'https://shareit-files.vercel.app',
      github: 'https://github.com/Rahul-Aitla/shareit',
      details: '/projects/shareit',
    },
    technologies: [
      {
        name: 'Next.js',
        icon: <NextJs />,
        href: 'https://nextjs.org/',
      },
      {
        name: 'TypeScript',
        icon: <TypeScript />,
        href: 'https://typescriptlang.org/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/shareit',
  },
  {
    id: 6,
    title: 'Agency',
    subheading: 'Design Request Triage Bot',
    img: {
      src: '/projects/project2.avif',
      alt: 'Agency design request triage bot project',
      width: 1920,
      height: 1080,
    },
    description:
      'An automated email triage system for creative agencies. Reads client emails, extracts requirements using AI, and routes complete requests to the right team member.',
    links: {
      website: 'https://github.com/Rahul-Aitla/agency',
      github: 'https://github.com/Rahul-Aitla/agency',
      details: '/projects/agency',
    },
    technologies: [
      {
        name: 'Node.js',
        icon: <NodeJs />,
        href: 'https://nodejs.org/',
      },
      {
        name: 'TypeScript',
        icon: <TypeScript />,
        href: 'https://typescriptlang.org/',
      },
      {
        name: 'Express',
        icon: <ExpressJs />,
        href: 'https://expressjs.com/',
      },
      {
        name: 'Groq',
        icon: <Groq />,
        href: 'https://groq.com/',
      },
      {
        name: 'SQLite',
        icon: <SQLite />,
        href: 'https://sqlite.org/',
      },
    ],
    isWorking: false,
    isBulding: true,
    details: true,
    projectDetailsPageSlug: '/projects/agency',
  },
  {
    id: 12,
    title: 'AI Receptionist',
    subheading: 'Voice AI for Healthcare',
    img: {
      src: '/projects/project2.avif',
      alt: 'AI Receptionist voice AI for healthcare project',
      width: 1920,
      height: 1080,
    },
    description:
      'An AI-powered voice receptionist for a cardiology clinic. Patients call in and speak with Laura, a virtual medical assistant that handles appointments and inquiries through natural voice conversation.',
    links: {
      website: 'https://github.com/Rahul-Aitla/AI-Receptionist',
      github: 'https://github.com/Rahul-Aitla/AI-Receptionist',
      details: '/projects/ai-receptionist',
    },
    technologies: [
      {
        name: 'LiveKit',
        icon: <LiveKit />,
        href: 'https://livekit.io/',
      },
      {
        name: 'Deepgram',
        icon: <Deepgram />,
        href: 'https://deepgram.com/',
      },
      {
        name: 'Groq',
        icon: <Groq />,
        href: 'https://groq.com/',
      },
      {
        name: 'Python',
        icon: <Python />,
        href: 'https://python.org/',
      },
      {
        name: 'Next.js',
        icon: <NextJs />,
        href: 'https://nextjs.org/',
      },
      {
        name: 'Docker',
        icon: <Docker />,
        href: 'https://docker.com/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/ai-receptionist',
  },
  {
    id: 4,
    title: 'Sundown-Studio',
    subheading: 'Professional Landing Page',
    img: {
      src: '/projects/sundown.avif',
      alt: 'Sundown-Studio brand landing page project',
      width: 1920,
      height: 1080,
    },
    description:
      'A visually rich brand landing page built with Swiper.js, GSAP, and Locomotive JS — featuring smooth parallax scrolling and immersive full-screen slider transitions.',
    links: {
      website: 'https://sundown-abc.netlify.app',
      github: 'https://github.com/Rahul-Aitla/Sundown-Studio',
      details: '/projects/sundown-studio',
    },
    technologies: [
      {
        name: 'HTML',
        icon: <Html />,
        href: 'https://html.spec.whatwg.org/',
      },
      {
        name: 'CSS',
        icon: <Css />,
        href: 'https://www.w3.org/Style/CSS/',
      },
      {
        name: 'JavaScript',
        icon: <JavaScript />,
        href: 'https://javascript.info/',
      },
      {
        name: 'GSAP',
        icon: <Gsap />,
        href: 'https://gsap.com/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/sundown-studio',
  },
  {
    id: 3,
    title: 'Sidcup Golf',
    subheading: 'Golf Club Website',
    img: {
      src: '/projects/sidcup.avif',
      alt: 'Sidcup Golf club website project',
      width: 1920,
      height: 1080,
    },
    description:
      'A professional golf club website built with GSAP ScrollTrigger and Swiper.js — featuring cinematic scroll-driven animations and a modern responsive design.',
    links: {
      website: 'https://sidcup-abc.netlify.app',
      github: 'https://github.com/Rahul-Aitla/sidcup-golf',
      details: '/projects/sidcup-golf',
    },
    technologies: [
      {
        name: 'HTML',
        icon: <Html />,
        href: 'https://html.spec.whatwg.org/',
      },
      {
        name: 'CSS',
        icon: <Css />,
        href: 'https://www.w3.org/Style/CSS/',
      },
      {
        name: 'JavaScript',
        icon: <JavaScript />,
        href: 'https://javascript.info/',
      },
      {
        name: 'GSAP',
        icon: <Gsap />,
        href: 'https://gsap.com/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/sidcup-golf',
  },
  {
    id: 2,
    title: 'TDC',
    subheading: 'AI-Powered Matchmaking Operations Hub',
    img: {
      src: '/projects/tdc.avif',
      alt: 'TDC matchmaking operations hub project',
      width: 1920,
      height: 1080,
    },
    description:
      'A CRM-style internal tool for matrimonial matchmaking teams combining deterministic compatibility logic with advanced AI reasoning. Built with Next.js and TypeScript.',
    links: {
      website: 'https://tdc-match-makers.vercel.app',
      github: 'https://github.com/Rahul-Aitla/TDC',
      details: '/projects/tdc',
    },
    technologies: [
      {
        name: 'Next.js',
        icon: <NextJs />,
        href: 'https://nextjs.org/',
      },
      {
        name: 'TypeScript',
        icon: <TypeScript />,
        href: 'https://typescriptlang.org/',
      },
      {
        name: 'Gemini',
        icon: <Gemini />,
        href: 'https://deepmind.google/technologies/gemini/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/tdc',
  },
  {
    id: 1,
    title: 'ReDraft',
    subheading: 'Version-Controlled CMS',
    img: {
      src: '/projects/redraft.avif',
      alt: 'ReDraft CMS project',
      width: 1920,
      height: 1080,
    },
    description:
      'A minimalist, professional CMS designed for authors who value version control, focus, and permanence. Built with Node.js, Express, PostgreSQL, and React.',
    links: {
      website: 'https://redraft-cms.vercel.app',
      github: 'https://github.com/Rahul-Aitla/ReDraft',
      details: '/projects/redraft',
    },
    technologies: [
      {
        name: 'Node.js',
        icon: <NodeJs />,
        href: 'https://nodejs.org/',
      },
      {
        name: 'TypeScript',
        icon: <TypeScript />,
        href: 'https://typescriptlang.org/',
      },
      {
        name: 'Express',
        icon: <ExpressJs />,
        href: 'https://expressjs.com/',
      },
      {
        name: 'React',
        icon: <ReactIcon />,
        href: 'https://react.dev/',
      },
      {
        name: 'PostgreSQL',
        icon: <PostgreSQL />,
        href: 'https://postgresql.org/',
      },
      {
        name: 'Docker',
        icon: <Docker />,
        href: 'https://docker.com/',
      },
    ],
    isWorking: false,
    isBulding: true,
    details: true,
    projectDetailsPageSlug: '/projects/redraft',
  },
  {
    id: 7,
    title: 'TOTEM',
    subheading: 'Voice-to-Structured AI Prompt Pipeline',
    img: {
      src: '/projects/totem.avif',
      alt: 'TOTEM voice-to-structured prompt pipeline project',
      width: 1920,
      height: 1080,
    },
    description:
      'Converts raw voice input into structured, optimized AI prompts using speech-to-text, intent extraction, memory retrieval, and prompt compression.',
    links: {
      website: 'https://totem-beta.vercel.app',
      github: 'https://github.com/Rahul-Aitla/totem',
      details: '/projects/totem',
    },
    technologies: [
      {
        name: 'Next.js',
        icon: <NextJs />,
        href: 'https://nextjs.org/',
      },
      {
        name: 'Python',
        icon: <Python />,
        href: 'https://python.org/',
      },
      {
        name: 'FastAPI',
        icon: <FastAPI />,
        href: 'https://fastapi.tiangolo.com/',
      },
      {
        name: 'Deepgram',
        icon: <Deepgram />,
        href: 'https://deepgram.com/',
      },
      {
        name: 'PostgreSQL',
        icon: <PostgreSQL />,
        href: 'https://postgresql.org/',
      },
      {
        name: 'Docker',
        icon: <Docker />,
        href: 'https://docker.com/',
      },
      {
        name: 'Gemini',
        icon: <Gemini />,
        href: 'https://deepmind.google/technologies/gemini/',
      },
    ],
    isWorking: true,
    isBulding: false,
    details: true,
    projectDetailsPageSlug: '/projects/totem',
  },
];
