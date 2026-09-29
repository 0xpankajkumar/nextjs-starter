export const REPO_URL = 'https://github.com/0xpankajkumar/nextjs-starter';

export type TreeEntry = {
  kind: 'file' | 'folder';
  depth: number;
  name: string;
  note: string;
};

export const TREE: TreeEntry[] = [
  {
    kind: 'folder',
    depth: 0,
    name: '.husky/',
    note: 'Git hooks. Commits run format, lint and type checks; pushes run the build.'
  },
  {
    kind: 'folder',
    depth: 0,
    name: 'public/',
    note: 'Static files served as-is: favicons, OG image, web manifest.'
  },
  {
    kind: 'folder',
    depth: 0,
    name: 'src/',
    note: 'All application code. Imported with the @/ alias.'
  },
  {
    kind: 'folder',
    depth: 1,
    name: 'app/',
    note: 'Routes and layouts (App Router). This page lives in page.tsx.'
  },
  {
    kind: 'folder',
    depth: 1,
    name: 'assets/',
    note: 'Images and fonts you import from code.'
  },
  {
    kind: 'folder',
    depth: 1,
    name: 'components/',
    note: 'Shared React components.'
  },
  {
    kind: 'folder',
    depth: 2,
    name: 'ui/',
    note: 'shadcn/ui components are added here.'
  },
  {
    kind: 'folder',
    depth: 1,
    name: 'config/',
    note: 'App-level configuration objects.'
  },
  {
    kind: 'folder',
    depth: 1,
    name: 'data/',
    note: 'Constants such as app name, description and URL.'
  },
  {
    kind: 'folder',
    depth: 1,
    name: 'hooks/',
    note: 'Custom React hooks.'
  },
  {
    kind: 'folder',
    depth: 1,
    name: 'lib/',
    note: 'Library glue. Holds the cn() class-name helper.'
  },
  {
    kind: 'folder',
    depth: 1,
    name: 'providers/',
    note: 'Context and data providers that wrap the app.'
  },
  {
    kind: 'folder',
    depth: 1,
    name: 'services/',
    note: 'API calls and data fetching.'
  },
  {
    kind: 'folder',
    depth: 1,
    name: 'styles/',
    note: 'globals.css: Tailwind layers and theme colours.'
  },
  {
    kind: 'folder',
    depth: 1,
    name: 'types/',
    note: 'Shared types and typed environment variables.'
  },
  {
    kind: 'folder',
    depth: 1,
    name: 'utils/',
    note: 'Small pure helper functions.'
  },
  {
    kind: 'file',
    depth: 0,
    name: '.env.example',
    note: 'Environment variables the app expects. Copy to .env.local.'
  },
  {
    kind: 'file',
    depth: 0,
    name: '.eslintrc.js',
    note: 'Lint rules: Next.js, React, hooks, unicorn, unused imports.'
  },
  {
    kind: 'file',
    depth: 0,
    name: 'prettier.config.js',
    note: 'Formatting: single quotes, semicolons, 2 spaces, sorted Tailwind classes.'
  },
  {
    kind: 'file',
    depth: 0,
    name: 'tailwind.config.ts',
    note: 'Theme tokens, dark mode and the animate plugin.'
  },
  {
    kind: 'file',
    depth: 0,
    name: 'components.json',
    note: 'Tells the shadcn CLI where to put components.'
  },
  {
    kind: 'file',
    depth: 0,
    name: 'next.config.mjs',
    note: 'Next.js settings, allowed image hosts and Plaiceholder.'
  },
  {
    kind: 'file',
    depth: 0,
    name: 'tsconfig.json',
    note: 'Strict TypeScript and the @/* path alias.'
  }
];

export type StackItem = { name: string; detail: string };

export const STACK: StackItem[] = [
  {
    name: 'Next.js 14',
    detail:
      'App Router and server components. Images go through next/image, with blur placeholders from Plaiceholder.'
  },
  {
    name: 'React 18 and TypeScript 5',
    detail: 'Strict mode is on. Import from @/ instead of long relative paths.'
  },
  {
    name: 'Tailwind CSS 3',
    detail:
      'Colours are CSS variables in globals.css, so light and dark themes are one class apart.'
  },
  {
    name: 'shadcn/ui',
    detail:
      'Configured through components.json. The CLI installs the Radix packages a component needs when you add it.'
  },
  {
    name: 'ESLint 8 and Prettier 3',
    detail:
      'Formatting problems are lint errors, so there is one list of things to fix.'
  },
  {
    name: 'Husky 8',
    detail: 'Runs the checks below before code leaves your machine.'
  },
  {
    name: 'TanStack Query 5',
    detail:
      'Installed but not wired in yet. Add a QueryClientProvider in src/providers when you need it.'
  },
  {
    name: 'Styling helpers',
    detail:
      'clsx, tailwind-merge and class-variance-authority power cn() in src/lib/utils.ts. Icons come from lucide-react.'
  }
];

export type HookGroup = {
  when: string;
  steps: { name: string; command: string; detail: string }[];
};

export const HOOKS: HookGroup[] = [
  {
    when: 'On git commit',
    steps: [
      {
        name: 'Prettier',
        command: 'pnpm run prettier:check',
        detail: 'Stops the commit if a file is not formatted.'
      },
      {
        name: 'ESLint',
        command: 'pnpm run lint:check',
        detail: 'Catches unused imports, hook mistakes and style rules.'
      },
      {
        name: 'TypeScript',
        command: 'pnpm run types:check',
        detail: 'Finds type errors without emitting any files.'
      }
    ]
  },
  {
    when: 'On git push',
    steps: [
      {
        name: 'Production build',
        command: 'pnpm run build',
        detail: 'Catches errors that only appear in a real build.'
      }
    ]
  }
];

export const SCRIPTS: { command: string; detail: string }[] = [
  { command: 'pnpm dev', detail: 'Start the dev server on localhost:3000.' },
  { command: 'pnpm build', detail: 'Create a production build.' },
  { command: 'pnpm start', detail: 'Serve the production build.' },
  {
    command: 'pnpm test:all',
    detail: 'Run type, format and lint checks together.'
  },
  {
    command: 'pnpm prettier:format',
    detail: 'Rewrite every file to match the Prettier config.'
  },
  { command: 'pnpm lint:check', detail: 'Lint .ts, .tsx and .js files.' },
  { command: 'pnpm types:check', detail: 'Type-check the whole project.' }
];

export const CHECKLIST: { text: string; code?: string }[] = [
  {
    text: 'Set your app name, description and URL in',
    code: 'src/data/constants.ts'
  },
  {
    text: 'Rename the package in',
    code: 'package.json'
  },
  {
    text: 'Copy .env.example to .env.local and set',
    code: 'NEXT_PUBLIC_APP_URL'
  },
  {
    text: 'Allow the image hosts you use under',
    code: 'images.remotePatterns'
  },
  {
    text: 'Add your first UI component:',
    code: 'pnpm dlx shadcn@latest add button'
  },
  {
    text: 'Replace this page with your own in',
    code: 'src/app/page.tsx'
  }
];
