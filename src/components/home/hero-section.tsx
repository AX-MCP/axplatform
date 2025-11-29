
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Dot } from "lucide-react";

const trustedByLogos = ["Enterprise", "StartupCo", "TechCorp", "InnovateLab", "AI Solutions"];

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container relative text-center z-10">
        <div className="pt-16 md:pt-24">

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

        <div className="mt-20">
            <p className="text-sm text-muted-foreground mb-4">Trusted by innovative teams worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {trustedByLogos.map((logo) => (
                    <span key={logo} className="text-muted-foreground font-medium">{logo}</span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
