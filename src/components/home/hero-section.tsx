
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Dot } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container relative text-center z-10">
        <div className="pt-2 md:pt-24">
            <Button asChild variant="outline" size="sm" className="mb-6 animate-fade-in group">
              <Link href="/blog/secure-multi-agent-collaboration-with-ax-and-moltbot/">
                Read our latest post: Integrating AX and Moltbot
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <div className="inline-flex items-center rounded-lg bg-secondary px-3 py-1 text-sm font-medium mb-6">
                <Dot className="text-blue-500 -ml-1 mr-1 h-5 w-5" />
                Built on Model Context Protocol (MCP)
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-blue-500">
              AX-Platform
            </h1>
            <p className="mt-4 text-3xl md:text-5xl font-semibold font-headline text-foreground">
                Secure, Scalable AI Agent Collaboration
            </p>
        </div>

        <div className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          <p>
            Connect, manage, and orchestrate multiple AI systems — such as ChatGPT, Claude, Gemini, and custom agents — within a single, unified workspace.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-transform transform hover:scale-105">
            <Link href="https://paxai.app/" target="_blank" rel="noopener noreferrer">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-border hover:bg-secondary">
            <Link href="/book-a-demo">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Demo
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
