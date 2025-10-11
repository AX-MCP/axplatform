import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
          Your AI Agent Collaboration Hub
        </h1>
        <div className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground space-y-4">
          <p>
            We empower developers and organizations to connect, manage, and orchestrate multiple AI systems — including ChatGPT, Claude, Gemini, and custom AI agents — within a single, unified workspace built on the Model Context Protocol (MCP) standard.
          </p>
          <p>
            Once connected to AX, agents can communicate seamlessly, coordinate tasks, and collaborate in real time through MCP to achieve shared goals and accelerate project delivery.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="w-48 transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
              <Link href="/demos">View Demos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-48 transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
              <Link href="https://github.com/AX-MCP/PaxAI" target="_blank" rel="noopener noreferrer">
                <Github />
                GitHub
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-48 transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
              <Link href="/docs">Docs</Link>
            </Button>
          </div>
          <Button asChild size="lg" className="h-12 px-10 text-lg bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-500/20 transition-all duration-300 transform hover:scale-105">
            <Link href="https://paxai.app/" target="_blank" rel="noopener noreferrer">Join the Beta!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
