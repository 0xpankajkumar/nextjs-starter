import { HOOKS } from '@/data';

export const HookSteps = () => {
  return (
    <div className="space-y-10">
      {HOOKS.map((group) => (
        <div key={group.when}>
          <h3 className="font-medium">{group.when}</h3>
          <ol className="mt-4 divide-y divide-border border-y border-border">
            {group.steps.map((step, index) => (
              <li
                key={step.command}
                className="grid grid-cols-[2rem_1fr] gap-x-2 py-4"
              >
                <span className="font-mono text-sm text-muted-foreground">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium">{step.name}</p>
                  <p className="mt-1 max-w-xl text-muted-foreground">
                    {step.detail}
                  </p>
                  <code className="mt-2 inline-block rounded bg-secondary px-2 py-1 font-mono text-sm">
                    {step.command}
                  </code>
                </div>
              </li>
            ))}
          </ol>
        </div>
      ))}
      <p className="max-w-xl text-muted-foreground">
        If the format check fails, run{' '}
        <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">
          pnpm prettier:format
        </code>
        , stage the changes and commit again.
      </p>
    </div>
  );
};
