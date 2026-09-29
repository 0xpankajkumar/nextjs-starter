import { TREE } from "@/data";
import { cn } from "@/lib";

export const ProjectTree = () => {
  return (
    <ul className="overflow-hidden rounded-lg border border-border bg-card">
      {TREE.map((entry) => (
        <li
          className="grid gap-x-6 gap-y-0.5 border-b border-border px-4 py-3 last:border-b-0 hover:bg-accent sm:grid-cols-[minmax(0,14rem)_1fr]"
          key={`${entry.depth}-${entry.name}`}
        >
          <span
            className={cn(
              "font-mono text-sm",
              entry.kind === "folder" && "font-medium text-primary"
            )}
            style={{ paddingLeft: `${entry.depth * 1.25}rem` }}
          >
            {entry.name}
          </span>
          <span className="text-sm text-muted-foreground">{entry.note}</span>
        </li>
      ))}
    </ul>
  );
};
