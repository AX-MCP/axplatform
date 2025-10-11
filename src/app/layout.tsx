import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { BlogStyles } from './blog/[slug]/page';

export const metadata: Metadata = {
  title: 'AI Agent Collaboration Platform',
  description: 'We empower developers and organizations to connect, manage, and orchestrate multiple AI systems — including ChatGPT, Claude, Gemini, and custom AI agents — within a single, unified workspace built on the Model Context Protocol (MCP) standard. Once connected to AX, agents can communicate seamlessly, coordinate tasks, and collaborate in real time through MCP to achieve shared goals and accelerate project delivery.',
  icons: {
    icon: "/favicon2.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <BlogStyles />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
