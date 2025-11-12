
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-background">
      <div className="container text-center">
        <div className="pt-16 md:pt-24">
            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
              AX-Platform
            </h1>
            <p className="mt-4 text-2xl md:text-4xl font-semibold font-headline text-foreground">
                Secure, scalable AI agent collaboration
            </p>
        </div>

        <div className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          <p>
            Connect, manage, and orchestrate multiple AI systems — such as ChatGPT, Claude, Gemini, and custom agents — within a single, unified workspace built on the Model Context Protocol (MCP).
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
