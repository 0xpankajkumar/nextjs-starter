import type { Metadata } from "next";

import { APP_DESCRIPTION, APP_NAME, APP_URL } from "@/data";
import { JetBrains_Mono, Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: { template: `%s | ${APP_NAME}`, default: APP_NAME },
  metadataBase: new URL(APP_URL),
  manifest: "/site.webmanifest",
  description: APP_DESCRIPTION
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
