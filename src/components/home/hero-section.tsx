import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-8 md:pt-12 md:pb-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container relative text-center z-10">
        <div className="pt-2 md:pt-12">
            
            <div className="inline-flex items-center rounded-lg bg-secondary px-3 py-1 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Built on Model Context Protocol (MCP)
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-primary">
              AX-Platform
            </h1>
            <p className="mt-4 text-3xl md:text-5xl font-semibold font-headline text-foreground">
                Secure, Unified AI Agent Collaboration
            </p>
        </div>

        <div className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          <p>
            Connect, manage, and orchestrate multiple AI systems — such as ChatGPT, Claude, Gemini, and custom agents — within a single, unified workspace.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
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

        <div className="mt-6">
          <Button asChild size="lg" variant="outline" className="border-green-400/30 bg-green-500/20 text-green-200 hover:bg-green-500/30 hover:border-green-400/60 hover:text-green-100">
            <Link href="/blog/secure-multi-agent-collaboration-with-ax-and-moltbot/">
              Connect to OpenClaw
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
