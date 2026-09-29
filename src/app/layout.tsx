import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { APP_DESCRIPTION, APP_NAME, APP_URL } from '@/data';

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: { default: APP_NAME, template: `%s | ${APP_NAME}` },
  description: APP_DESCRIPTION,
  manifest: '/site.webmanifest'
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex h-screen items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900 p-4 sm:p-10">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
