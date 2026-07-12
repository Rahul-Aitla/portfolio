import Container from '../layouts/Container';
import SectionHeading from '../common/SectionHeading';
import {
  ReactIcon,
  NodeJs,
  JavaScript,
  MongoDB,
  ExpressJs,
  Figma,
  Gsap,
  NextJS,
  PostgreSQL,
  Prisma,
  TailwindCss,
  TypeScript,
  Vite,
  Shadcn,
  Photoshop,
  Git,
  Docker,
  Python,
  Css,
  FramerMotion,
  Html,
  ReactNavigation,
  Npm,
  Groq,
  Deepgram,
  LiveKit,
  BullMQ,
} from '@/lib/techIcons';
import RepeatSeparator from '../ui/repeat-separator';

const TechSkills = () => {
  return (
    <>
      <RepeatSeparator />
      <SectionHeading heading={'Stack'} />
      <Container className="py-3">
        <div className="mt-3 flex flex-wrap justify-start gap-2 gap-y-2.5 px-4">
          {SkillsList.map((items) => {
            return (
              <a
                key={items.title}
                href={items.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-foreground flex cursor-pointer items-center gap-1.5 rounded-full border border-neutral-300/40 bg-zinc-50 px-2 py-0.5 text-xs font-normal tracking-wide shadow-xs transition-all duration-300 select-none hover:bg-zinc-100 dark:border-neutral-800/80 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/80"
              >
                <span className="flex size-3.5 shrink-0 items-center justify-center [&_svg]:size-3.5">
                  {items.icon}
                </span>
                <span className="text-foreground text-xs font-normal tracking-wide whitespace-nowrap">
                  {items.title}
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default TechSkills;

const SkillsList = [
  {
    title: 'TypeScript',
    icon: <TypeScript />,
    href: 'https://www.typescriptlang.org/',
  },

  {
    title: 'JavaScript',
    icon: <JavaScript />,
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    title: 'HTML',
    icon: <Html />,
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    title: 'CSS',
    icon: <Css />,
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    title: 'React',
    icon: <ReactIcon />,
    href: 'https://reactjs.org/',
  },

  {
    title: 'NextJS',
    icon: <NextJS />,
    href: 'https://nextjs.org/',
  },
  {
    title: 'NPM',
    icon: <Npm />,
    href: 'https://www.npmjs.com/',
  },
  {
    title: 'Node Js',
    icon: <NodeJs />,
    href: 'https://nodejs.org/',
  },
  {
    title: 'Express Js',
    icon: <ExpressJs />,
    href: 'https://expressjs.com/',
  },
  {
    title: 'MongoDB',
    icon: <MongoDB />,
    href: 'https://www.mongodb.com/',
  },

  {
    title: 'Figma',
    icon: <Figma />,
    href: 'https://www.figma.com/',
  },
  {
    title: 'GSAP',
    icon: <Gsap />,
    href: 'https://greensock.com/gsap/',
  },
  {
    title: 'Framer Motion',
    icon: <FramerMotion />,
    href: 'https://motion.dev/',
  },

  {
    title: 'PostgreSQL',
    icon: <PostgreSQL />,
    href: 'https://www.postgresql.org/',
  },
  {
    title: 'Prisma',
    icon: <Prisma />,
    href: 'https://www.prisma.io/',
  },
  {
    title: 'Tailwind CSS',
    icon: <TailwindCss />,
    href: 'https://tailwindcss.com/',
  },

  {
    title: 'Vite',
    icon: <Vite />,
    href: 'https://vitejs.dev/',
  },
  {
    title: 'Shadcn',
    icon: <Shadcn />,
    href: 'https://ui.shadcn.com/',
  },
  {
    title: 'Groq',
    icon: <Groq />,
    href: 'https://groq.com/',
  },
  {
    title: 'Deepgram',
    icon: <Deepgram />,
    href: 'https://deepgram.com/',
  },
  {
    title: 'LiveKit',
    icon: <LiveKit />,
    href: 'https://livekit.io/',
  },
  {
    title: 'BullMQ',
    icon: <BullMQ />,
    href: 'https://bullmq.io/',
  },
  {
    title: 'Photoshop',
    icon: <Photoshop />,
    href: 'https://www.adobe.com/products/photoshop.html',
  },
  {
    title: 'Git',
    icon: <Git />,
    href: 'https://git-scm.com/',
  },
  {
    title: 'Docker',
    icon: <Docker />,
    href: 'https://www.docker.com/',
  },
  {
    title: 'Python',
    icon: <Python />,
    href: 'https://www.python.org/',
  },
];
