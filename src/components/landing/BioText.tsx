import SectionHeading from '../common/SectionHeading';

const BioText = () => {
  return (
    <>
      <SectionHeading heading="About" />
      <div className="space-y-5 p-8">
        <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-base font-normal whitespace-pre-wrap text-neutral-800 md:text-base dark:text-neutral-300">
          <ul className="list-disc space-y-2">
            <li>
              I'm a{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                Full Stack Developer
              </b>{' '}
              passionate about building scalable web applications and AI-powered tools.
            </li>

            <li>
              I build modern interfaces with{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                React, Next.js, TypeScript, and Tailwind CSS
              </b>
              , focusing on clean design and smooth user experiences.
            </li>

            <li>
              I work across the backend with{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                Python, Node.js, Django, FastAPI, PostgreSQL, and Redis
              </b>{' '}
              to build fast, scalable full-stack applications.
            </li>

            <li>
              I enjoy solving complex problems and turning ideas into polished products that make an
              impact.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BioText;
