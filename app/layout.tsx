import "@/styles/globals.css";
import { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import { Providers } from "./providers";
import ClientWrapper from "./client-wrapper";

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
});

const mono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Modern Developer Portfolio',
  description: 'A modern developer portfolio showcasing my work and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${grotesk.variable} ${mono.variable} font-sans antialiased`}>
        <Providers>
          <ClientWrapper />
          <main className="min-h-screen bg-background text-foreground">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
