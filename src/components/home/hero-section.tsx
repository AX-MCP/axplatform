
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, BookOpen, Calendar } from "lucide-react";

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
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="w-48 transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
              <Link href="/docs/quick-start">
                <BookOpen />
                Quick Start
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-48 transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
              <Link href="https://github.com/AX-MCP/PaxAI" target="_blank" rel="noopener noreferrer">
                <Github />
                GitHub
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-48 transition-all duration-300 transform hover:scale-105 hover:bg-white/10">
              <Link href="/demos">Demos</Link>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild size="lg" variant="outline" className="w-56 h-11 px-8 text-base transition-all duration-300 transform hover:scale-105 bg-card hover:bg-card/80">
              <Link href="https://paxai.app/" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Sign in with Github
              </Link>
            </Button>
            <Button asChild size="lg" className="w-56 h-11 px-8 text-base bg-gray-200 text-gray-900 hover:bg-gray-300 shadow-lg shadow-gray-500/20 transition-all duration-300 transform hover:scale-105">
              <Link href="/book-a-demo">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
