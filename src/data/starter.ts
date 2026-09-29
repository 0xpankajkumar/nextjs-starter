export const REPO_URL = "https://github.com/0xpankajkumar/nextjs-starter";

export type TreeEntry = {
  kind: "folder" | "file";
  depth: number;
  name: string;
  note: string;
};

export const TREE: TreeEntry[] = [
  {
    note: "Git hooks. Commits run format, lint and type checks; pushes run the build.",
    name: ".husky/",
    kind: "folder",
    depth: 0
  },
  {
    note: "Static files served as-is: favicons, OG image, web manifest.",
    name: "public/",
    kind: "folder",
    depth: 0
  },
  {
    note: "All application code. Imported with the @/ alias.",
    kind: "folder",
    name: "src/",
    depth: 0
  },
  {
    note: "Routes and layouts (App Router). This page lives in page.tsx.",
    kind: "folder",
    name: "app/",
    depth: 1
  },
  {
    note: "Images and fonts you import from code.",
    name: "assets/",
    kind: "folder",
    depth: 1
  },
  {
    note: "Shared React components.",
    name: "components/",
    kind: "folder",
    depth: 1
  },
  {
    note: "shadcn/ui components are added here.",
    kind: "folder",
    name: "ui/",
    depth: 2
  },
  {
    note: "App-level configuration objects.",
    name: "config/",
    kind: "folder",
    depth: 1
  },
  {
    note: "Constants such as app name, description and URL.",
    kind: "folder",
    name: "data/",
    depth: 1
  },
  {
    note: "Custom React hooks.",
    kind: "folder",
    name: "hooks/",
    depth: 1
  },
  {
    note: "Library glue. Holds the cn() class-name helper.",
    kind: "folder",
    name: "lib/",
    depth: 1
  },
  {
    note: "Context and data providers that wrap the app.",
    name: "providers/",
    kind: "folder",
    depth: 1
  },
  {
    note: "API calls and data fetching.",
    name: "services/",
    kind: "folder",
    depth: 1
  },
  {
    note: "globals.css: Tailwind layers and theme colours.",
    name: "styles/",
    kind: "folder",
    depth: 1
  },
  {
    note: "Shared types and typed environment variables.",
    kind: "folder",
    name: "types/",
    depth: 1
  },
  {
    note: "Small pure helper functions.",
    kind: "folder",
    name: "utils/",
    depth: 1
  },
  {
    note: "Environment variables the app expects. Copy to .env.local.",
    name: ".env.example",
    kind: "file",
    depth: 0
  },
  {
    note: "Lint rules: Next.js, React, hooks, unicorn, unused imports.",
    name: ".eslintrc.js",
    kind: "file",
    depth: 0
  },
  {
    note: "Formatting: single quotes, semicolons, 2 spaces, sorted Tailwind classes.",
    name: "prettier.config.js",
    kind: "file",
    depth: 0
  },
  {
    note: "Theme tokens, dark mode and the animate plugin.",
    name: "tailwind.config.ts",
    kind: "file",
    depth: 0
  },
  {
    note: "Tells the shadcn CLI where to put components.",
    name: "components.json",
    kind: "file",
    depth: 0
  },
  {
    note: "Next.js settings, allowed image hosts and Plaiceholder.",
    name: "next.config.mjs",
    kind: "file",
    depth: 0
  },
  {
    note: "Strict TypeScript and the @/* path alias.",
    name: "tsconfig.json",
    kind: "file",
    depth: 0
  }
];

export type StackItem = { detail: string; name: string };

export const STACK: StackItem[] = [
  {
    detail:
      "App Router and server components. Images go through next/image, with blur placeholders from Plaiceholder.",
    name: "Next.js 14"
  },
  {
    detail: "Strict mode is on. Import from @/ instead of long relative paths.",
    name: "React 18 and TypeScript 5"
  },
  {
    detail:
      "Colours are CSS variables in globals.css, so light and dark themes are one class apart.",
    name: "Tailwind CSS 3"
  },
  {
    detail:
      "Configured through components.json. The CLI installs the Radix packages a component needs when you add it.",
    name: "shadcn/ui"
  },
  {
    detail:
      "Formatting problems are lint errors, so there is one list of things to fix.",
    name: "ESLint 8 and Prettier 3"
  },
  {
    detail: "Runs the checks below before code leaves your machine.",
    name: "Husky 8"
  },
  {
    detail:
      "clsx, tailwind-merge and class-variance-authority power cn() in src/lib/utils.ts. Icons come from lucide-react.",
    name: "Styling helpers"
  }
];

export type HookGroup = {
  steps: { command: string; detail: string; name: string }[];
  when: string;
};

export const HOOKS: HookGroup[] = [
  {
    steps: [
      {
        detail: "Stops the commit if a file is not formatted.",
        command: "pnpm run prettier:check",
        name: "Prettier"
      },
      {
        detail: "Catches unused imports, hook mistakes and style rules.",
        command: "pnpm run lint:check",
        name: "ESLint"
      },
      {
        detail: "Finds type errors without emitting any files.",
        command: "pnpm run types:check",
        name: "TypeScript"
      }
    ],
    when: "On git commit"
  },
  {
    steps: [
      {
        detail: "Catches errors that only appear in a real build.",
        command: "pnpm run build",
        name: "Production build"
      }
    ],
    when: "On git push"
  }
];

export const SCRIPTS: { command: string; detail: string }[] = [
  { detail: "Start the dev server on localhost:3000.", command: "pnpm dev" },
  { detail: "Create a production build.", command: "pnpm build" },
  { detail: "Serve the production build.", command: "pnpm start" },
  {
    detail: "Run type, format and lint checks together.",
    command: "pnpm test:all"
  },
  {
    detail: "Rewrite every file to match the Prettier config.",
    command: "pnpm prettier:format"
  },
  { detail: "Lint .ts, .tsx and .js files.", command: "pnpm lint:check" },
  { detail: "Type-check the whole project.", command: "pnpm types:check" }
];

export const CHECKLIST: { code?: string; text: string }[] = [
  {
    text: "Set your app name, description and URL in",
    code: "src/data/constants.ts"
  },
  {
    text: "Rename the package in",
    code: "package.json"
  },
  {
    text: "Copy .env.example to .env.local and set",
    code: "NEXT_PUBLIC_APP_URL"
  },
  {
    text: "Allow the image hosts you use under",
    code: "images.remotePatterns"
  },
  {
    code: "pnpm dlx shadcn@latest add button",
    text: "Add your first UI component:"
  },
  {
    text: "Replace this page with your own in",
    code: "src/app/page.tsx"
  }
];
