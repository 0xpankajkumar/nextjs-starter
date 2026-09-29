import type { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  id?: string;
  intro?: string;
  title: string;
};

export const Section = ({ children, id, intro, title }: SectionProps) => {
  return (
    <section
      id={id}
      className="scroll-mt-4 border-t border-border py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-8">
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
            {intro ? (
              <p className="mt-3 max-w-sm text-muted-foreground">{intro}</p>
            ) : null}
          </div>
        </div>
        <div className="min-w-0 md:col-span-8">{children}</div>
      </div>
    </section>
  );
};
