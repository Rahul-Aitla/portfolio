'use client';

import Container from '@/components/layouts/Container';
import RepeatSeparator from '@/components/ui/repeat-separator';
import SectionHeading from '@/components/common/SectionHeading';

export default function Patatap() {
  return (
    <>
      <RepeatSeparator />
      <SectionHeading heading="Interactive Experience" />
      <Container>
        <div className="px-5">
          <p className="text-muted-foreground mb-6 text-sm">
            i love interactive stuff so enjoy this!
          </p>
          <div className="overflow-hidden rounded-xl border mb-6">
            <iframe
              src="https://patatap.com/"
              className="aspect-video w-full"
              allow="autoplay"
              title="Patatap Interactive"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
