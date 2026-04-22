import { Inter } from 'next/font/google';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900 p-4 sm:p-10">
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
