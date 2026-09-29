import { REPO_URL } from "@/data";

const COMMANDS = [
  `git clone ${REPO_URL}`,
  "cd nextjs-starter",
  "pnpm install",
  "pnpm dev"
];

export const Hero = () => {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-20 pt-12 md:grid-cols-12 md:pb-28 md:pt-20">
      <div className="md:col-span-6">
        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Start building the app, not the setup.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          A Next.js 14 starter with TypeScript, Tailwind CSS, shadcn/ui, ESLint,
          Prettier and Git hooks already wired together.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            href="#get-started"
          >
            Get started
          </a>
          <a
            className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            rel="noreferrer"
            href={REPO_URL}
            target="_blank"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="min-w-0 md:col-span-6 md:pt-3">
        <pre className="overflow-x-auto rounded-lg bg-[#0F1720] p-5 font-mono text-[13px] leading-7 text-[#E7ECF3]">
          <code>
            {COMMANDS.map((command) => (
              <span className="block whitespace-pre" key={command}>
                <span className="select-none text-[#7C8AA0]">$ </span>
                {command}
              </span>
            ))}
          </code>
        </pre>
        <p className="mt-4 max-w-sm text-sm text-muted-foreground">
          You are looking at{" "}
          <code className="font-mono text-foreground">src/app/page.tsx</code>.
          Save a change and the browser updates.
        </p>
      </div>
    </section>
  );
};
