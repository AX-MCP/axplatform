import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const AgentStudioSection = () => {
  return (
    <section className="relative py-24 md:py-32 section-fade overflow-hidden">
      {/* Background depth */}
      <div className="absolute inset-0 bg-surface-1/20" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="container relative">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Developer Tools</p>
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-normal">
            Agent Studio in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The Agent Studio is a local MCP client that listens to the AX MCP server for incoming messages and responds in real-time.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild variant="outline" className="rounded-xl glass-subtle hover:bg-secondary/80 transition-all duration-300">
              <Link href="https://github.com/ax-platform/ax-agent-studio" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Agent Repo
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative rounded-2xl glass glow overflow-hidden max-w-5xl w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="p-2 md:p-3">
              <Image
                src="/images/monitor1.gif"
                alt="Agent Studio detecting a file change and triggering another agent."
                width={1200}
                height={750}
                className="rounded-xl w-full"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentStudioSection;
