import { BookOpen, Video, Compass, FileText, Sparkles, Youtube, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const resources = [
  {
    icon: BookOpen,
    title: "Quick Start Guide",
    description: "Build and deploy your first AI agent in minutes.",
    href: "/docs/quick-start",
  },
  {
    icon: Video,
    title: "Demo Videos",
    description: "See the AX platform in action.",
    href: "/demos",
  },
  {
    icon: Compass,
    title: "Documentation",
    description: "Explore guides, tutorials, and API references.",
    href: "/docs",
  },
  {
    icon: FileText,
    title: "Blog",
    description: "Insights, tutorials, and updates from the AX team.",
    href: "/blog",
  },
  {
    icon: Youtube,
    title: "SIEM Workflow Demo",
    description: "Watch our latest SecOps workflow demo with OpenClaw.",
    href: "https://youtu.be/qRppB34ilTc",
    isExternal: true,
    accent: "green" as const,
  },
  {
    icon: Sparkles,
    title: "AX Showcase",
    description: "See what you can build when AI agents collaborate.",
    href: "/docs/ax-showcase",
  },
];

const ResourcesSection = () => {
  return (
    <section className="relative py-24 md:py-32 section-fade">
      {/* Subtle background shift */}
      <div className="absolute inset-0 bg-surface-1/40" />
      <div className="absolute inset-0 bg-dot-grid bg-dot-sm opacity-30" />

      <div className="container relative">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Explore</p>
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-normal">
            Resources
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Get started quickly with our guides and demos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {resources.map((resource: any) => {
            const isGreen = resource.accent === "green";
            return (
              <Link
                href={resource.href}
                key={resource.title}
                className="block group h-full"
                target={resource.isExternal ? "_blank" : undefined}
                rel={resource.isExternal ? "noopener noreferrer" : undefined}
              >
                <div className={cn(
                  "relative h-full rounded-xl p-5 transition-all duration-300",
                  "glass glow-hover",
                  "hover:-translate-y-1 hover:border-primary/30",
                  isGreen && "border-green-500/25 hover:border-green-400/50"
                )}>
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "flex items-center justify-center h-10 w-10 rounded-lg shrink-0",
                      isGreen
                        ? "bg-green-500/15 text-green-400"
                        : "bg-primary/10 text-primary"
                    )}>
                      <resource.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className={cn(
                          "text-base font-semibold font-headline transition-colors",
                          isGreen ? "group-hover:text-green-300" : "group-hover:text-primary"
                        )}>
                          {resource.title}
                        </h3>
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
