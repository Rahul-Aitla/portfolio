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
                Full Stack & AI Engineer
              </b>{' '}
              who builds automation systems and AI-powered products, not just interfaces.
            </li>

            <li>
              I work with{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                Deepgram, LLMs, and LiveKit
              </b>{' '}
              to ship voice AI agents and real-time conversation systems, backed by{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                Python, Next.js, Node.js, FastAPI, and PostgreSQL
              </b>.
            </li>

            <li>
              I've shipped production integrations at{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                Assista
              </b>{' '}
              (100+ third-party app integrations), built new integrations, and resolved production
              issues across OAuth and API execution.
            </li>

            <li>
              I care less about &quot;looks like a demo&quot; and more about &quot;actually works
              under load,&quot; and I build in public on{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                X
              </b>{' '}
              and{' '}
              <b className="font-medium text-neutral-950 underline underline-offset-2 dark:text-neutral-100">
                LinkedIn
              </b>{' '}
              as I go.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BioText;
