import { APP_NAME, REPO_URL } from "@/data";

export const SiteFooter = () => {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground">
        <p>{APP_NAME}. Replace this page when your app is ready.</p>
        <a
          className="underline-offset-4 hover:text-foreground hover:underline"
          rel="noreferrer"
          href={REPO_URL}
          target="_blank"
        >
          Source on GitHub
        </a>
      </div>
    </footer>
  );
};
