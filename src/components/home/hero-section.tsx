import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-12 md:pt-28 pb-16 md:pb-40 overflow-hidden">
      {/* Layered background system */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Top-left ambient orb */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/[0.07] blur-[120px] animate-glow-pulse" />
      {/* Top-right ambient orb */}
      <div className="absolute -right-32 top-20 h-[400px] w-[400px] rounded-full bg-blue-600/[0.05] blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      {/* Bottom center ambient */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[300px] w-[600px] rounded-full bg-primary/[0.04] blur-[100px]" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* MCP badge */}
          <div className="inline-flex items-center rounded-full glass-subtle px-4 py-2 text-sm font-medium mb-8 opacity-0 animate-fade-in">
            <span className="relative flex h-2 w-2 mr-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-muted-foreground">Built on</span>
            <span className="ml-1.5 text-foreground font-semibold">Model Context Protocol (MCP)</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-headline tracking-[-0.01em] leading-none opacity-0 animate-fade-in stagger-1">
            <span className="bg-gradient-to-b from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              AX
            </span>
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
              -Platform
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold font-headline tracking-normal text-foreground/90 leading-normal opacity-0 animate-fade-in stagger-2">
            Secure, Unified AI Agent Collaboration
          </p>

          {/* Description */}
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed opacity-0 animate-fade-in stagger-3">
            Connect, manage, and orchestrate multiple AI systems such as ChatGPT, Claude, Gemini, and custom agents within a single, unified workspace.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in stagger-4">
            <Button asChild size="lg" className="w-full sm:w-auto h-12 px-8 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
              <Link href="https://paxai.app/" target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base font-semibold rounded-xl glass-subtle hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-0.5">
              <Link href="/book-a-demo">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Demo
              </Link>
            </Button>
          </div>

          {/* OpenClaw CTA */}
          <div className="mt-5 opacity-0 animate-fade-in stagger-5">
            <Button asChild size="lg" variant="outline" className="rounded-xl border-green-500/30 bg-green-950/20 text-green-300 hover:bg-green-950/30 hover:border-green-400/50 hover:text-green-200 h-11 px-6 transition-all duration-300">
              <Link href="/docs/openclaw/">
                Connect to OpenClaw
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
