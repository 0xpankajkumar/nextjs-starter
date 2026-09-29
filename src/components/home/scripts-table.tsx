import { SCRIPTS } from '@/data';

export const ScriptsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[28rem] border-y border-border text-left">
        <thead className="sr-only">
          <tr>
            <th>Command</th>
            <th>What it does</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {SCRIPTS.map((script) => (
            <tr key={script.command}>
              <td className="whitespace-nowrap py-3 pr-6 align-top">
                <code className="rounded bg-secondary px-2 py-1 font-mono text-sm">
                  {script.command}
                </code>
              </td>
              <td className="py-3 text-muted-foreground">{script.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
