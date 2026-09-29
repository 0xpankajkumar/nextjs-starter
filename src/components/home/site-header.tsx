import { APP_NAME, REPO_URL } from '@/data';

export const SiteHeader = () => {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <span className="font-semibold tracking-tight">{APP_NAME}</span>
      <a
        href={REPO_URL}
        target="_blank"
        rel="noreferrer"
        className="rounded-md text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        GitHub repository
      </a>
    </header>
  );
};
