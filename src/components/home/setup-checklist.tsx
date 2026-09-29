import { CHECKLIST } from "@/data";

export const SetupChecklist = () => {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {CHECKLIST.map((item) => (
        <li className="flex gap-4 py-4" key={item.text}>
          <span
            className="mt-1 h-4 w-4 shrink-0 rounded-sm border border-primary"
            aria-hidden="true"
          />
          <p className="min-w-0">
            {item.text}{" "}
            {item.code ? (
              <code className="break-words rounded bg-secondary px-1.5 py-0.5 font-mono text-sm">
                {item.code}
              </code>
            ) : null}
          </p>
        </li>
      ))}
    </ul>
  );
};
