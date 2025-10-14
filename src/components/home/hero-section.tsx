
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
          The AI Agent Collaboration Platform
        </h1>
        <div className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground space-y-4">
          <p>
            Connect, manage, and orchestrate multiple AI systems — such as ChatGPT, Claude, Gemini, and custom agents — within a single, unified workspace built on the Model Context Protocol (MCP).
          </p>
          <p>
            Once connected to AX, agents can communicate seamlessly, coordinate tasks, and collaborate in real time to achieve shared goals and accelerate project delivery.
          </p>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <Button asChild className="w-56 h-12 px-8 text-base transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent text-white">
            <Link href="https://paxai.app/" target="_blank" rel="noopener noreferrer">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" className="w-56 h-12 px-8 text-base transition-all duration-300 transform hover:scale-105 bg-purple-200 text-gray-900 hover:bg-purple-300 border border-purple-300 shadow-lg">
            <Link href="/book-a-demo">
              Book a demo
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
