import { Python, JavaScript, NodeJs, Docker, PostgreSQL, Prisma } from '@/lib/techIcons';
import NextJs from '@/components/icons/tech/NextJS';
import TypeScript from '@/components/icons/tech/TypeScript';

export const ProjectCardData = [
  {
    id: 1,
    title: 'Animastudio',
    subheading: 'AI-Powered Text-to-Animation Engine',
    img: {
      src: '/projects/project1-v2.jpg',
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
    id: 2,
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
    id: 3,
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
];
