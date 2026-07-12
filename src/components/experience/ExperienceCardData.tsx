import { Python } from "@/lib/techIcons";
import { JavaScript, NodeJs, Docker, PostgreSQL, Prisma } from "@/lib/techIcons";
import ReactIcon from "@/components/icons/tech/ReactIcon";
import NextJs from "@/components/icons/tech/NextJS";
import TypeScript from "@/components/icons/tech/TypeScript";
import TailwindCss from "@/components/icons/tech/TailwindCss";

import type { Experience } from "./types";

const ExperienceCardData: Experience[] = [
  {
    id: "assista",
    companyName: "Assista",
    companyLogo: "/company.webp",
    companyWebsite: "https://assista.com",
    isCurrentEmployer: false,
    positions: [
      {
        id: "backend-ai-engineer",
        title: "Backend & AI Engineer",
        employmentType: "Internship",
        employmentPeriod: {
          start: "Dec 2025",
          end: "March 2026",
        },
        duration: "4 Months",
        location: "Delaware US (Remote)",
        description: `Contributed to an AI agent integration platform supporting 100+ third-party applications, building and maintaining API integrations, authentication flows, and function schemas.
Developed and enhanced integrations for Trello, HubSpot, Jira, ClickUp, and X (Twitter), resolving production issues across OAuth, API execution, and configuration validation.
Built new integration for ClickUp and implemented OAuth 1.0 support for Trello end-to-end, including token management, execution logic, and database migrations.
Tested and validated end-to-end workflows across multiple third-party integrations, identifying and debugging production bugs.`,
        skills: [
          {
            name: "Python",
            href: "https://python.org/",
            icon: <Python />,
          },
          {
            name: "JavaScript",
            href: "https://javascript.com/",
            icon: <JavaScript />,
          },
          {
            name: "TypeScript",
            href: "https://typescriptlang.org/",
            icon: <TypeScript />,
          },
          {
            name: "Node.js",
            href: "https://nodejs.org/",
            icon: <NodeJs />,
          },
          {
            name: "Docker",
            href: "https://docker.com/",
            icon: <Docker />,
          },
          {
            name: "PostgreSQL",
            href: "https://postgresql.org/",
            icon: <PostgreSQL />,
          },
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "mackofy",
    companyName: "Mackofy Technologies",
    companyLogo: "/company.webp",
    companyWebsite: "https://mackofy.com",
    isCurrentEmployer: false,
    positions: [
      {
        id: "web-dev-intern",
        title: "Web Developer Intern",
        employmentType: "Internship",
        employmentPeriod: {
          start: "April 2025",
          end: "October 2025",
        },
        duration: "6 Months",
        location: "Mumbai (Hybrid)",
        description: `Contributed across multiple products using React, Next.js, Node.js, and Django for performance optimization.
Optimized UI Responsiveness and Accessibility across the product suite.
Collaborated with backend lead to integrate APIs and deploy applications on DigitalOcean for 500+ active users.`,
        skills: [
          {
            name: "React",
            href: "https://reactjs.org/",
            icon: <ReactIcon />,
          },
          {
            name: "Next.js",
            href: "https://nextjs.org/",
            icon: <NextJs />,
          },
          {
            name: "JavaScript",
            href: "https://javascript.com/",
            icon: <JavaScript />,
          },
          {
            name: "Node.js",
            href: "https://nodejs.org/",
            icon: <NodeJs />,
          },
          {
            name: "Tailwind CSS",
            href: "https://tailwindcss.com/",
            icon: <TailwindCss />,
          },
        ],
        isExpanded: false,
      },
    ],
  },
  {
    id: "tokihub",
    companyName: "Tokihub",
    companyLogo: "/company.webp",
    companyWebsite: "https://tokihub.com",
    isCurrentEmployer: false,
    positions: [
      {
        id: "ui-ux-dev-intern",
        title: "UI/UX Developer Intern",
        employmentType: "Internship",
        employmentPeriod: {
          start: "Feb 2025",
          end: "March 2025",
        },
        duration: "1 Month",
        location: "Bangalore (Remote)",
        description: `Redesigned web interfaces in collaboration with mentor.
Developed scalable dashboards using Chart.js and Tailwind CSS, enabling real-time data visualization.`,
        skills: [
          {
            name: "JavaScript",
            href: "https://javascript.com/",
            icon: <JavaScript />,
          },
          {
            name: "Tailwind CSS",
            href: "https://tailwindcss.com/",
            icon: <TailwindCss />,
          },
          {
            name: "React",
            href: "https://reactjs.org/",
            icon: <ReactIcon />,
          },
        ],
        isExpanded: false,
      },
    ],
  },
];

export default ExperienceCardData;
