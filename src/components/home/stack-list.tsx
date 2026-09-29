import { STACK } from "@/data";

export const StackList = () => {
  return (
    <dl className="divide-y divide-border border-y border-border">
      {STACK.map((item) => (
        <div
          className="grid gap-1 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6"
          key={item.name}
        >
          <dt className="font-medium">{item.name}</dt>
          <dd className="max-w-xl text-muted-foreground">{item.detail}</dd>
        </div>
      ))}
    </dl>
  );
};
