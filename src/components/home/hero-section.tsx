import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Dot } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background selection:bg-primary/30">
      {/* Deep Aurora Gradient Background */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen opacity-40 pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen opacity-30 pointer-events-none" />

      <div className="container relative z-10 flex flex-col items-center text-center">

        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary-foreground mb-8 backdrop-blur-md shadow-lg shadow-black/20 ring-1 ring-white/10">
          <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 shadow-[0_0_10px_rgba(96,165,250,0.8)] animate-pulse"></span>
          Built on Model Context Protocol (MCP)
        </div>

        <h1 className="max-w-5xl text-5xl md:text-7xl font-bold font-headline tracking-tight text-white leading-[1.1] drop-shadow-sm">
          Secure, Scalable <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 animate-gradient bg-300%">AI Agent Collaboration</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed font-light">
          Connect, manage, and orchestrate multiple AI systems — such as ChatGPT, Claude, and custom agents — within a unified, secure workspace.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <Button asChild size="lg" className="w-full sm:w-auto text-base font-semibold h-14 px-8 bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] border-0 hover:scale-105 transition-all duration-300">
            <Link href="https://paxai.app/" target="_blank" rel="noopener noreferrer">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white hover:border-white/20 transition-all duration-300">
            <Link href="/book-a-demo">
              <Calendar className="mr-2 h-4 w-4" />
              Book a Demo
            </Link>
          </Button>
        </div>

        <div className="mt-16">
          <Link href="/blog/secure-multi-agent-collaboration-with-ax-and-moltbot/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-400 transition-colors py-2 px-4 rounded-full hover:bg-white/5 transition-all">
            Read about AX and OpenClaw
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
