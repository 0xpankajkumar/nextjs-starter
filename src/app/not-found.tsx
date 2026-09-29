import Link from "next/link";

const NotFound = () => {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-start justify-center gap-4 px-6">
      <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted-foreground">
        The page you asked for does not exist or has moved.
      </p>
      <Link
        className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        href="/"
      >
        Back to home
      </Link>
    </main>
  );
};

export default NotFound;
