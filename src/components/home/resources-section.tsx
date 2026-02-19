
import { BookOpen, Video, FileText, Compass, Sparkles, HelpCircle, Users, FileCode } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

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
    icon: FileCode,
    title: "Agent Studio",
    description: "The open-source development toolkit for the aX Platform.",
    href: "/docs/agent-studio",
  },
  {
    icon: Sparkles,
    title: "AX Showcase",
    description: "See what you can build when AI agents collaborate.",
    href: "/docs/ax-showcase",
  }
];

const ResourcesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow coming from center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none opacity-50" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-white">
            Resources
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Get started quickly with our guides and demos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {resources.map((resource) => (
            <Link
              href={resource.href}
              key={resource.title}
              className="group h-full"
            >
              <Card className="rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300 h-full overflow-hidden backdrop-blur-md shadow-none hover:shadow-2xl hover:shadow-black/40">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-blue-400 ring-1 ring-white/10 group-hover:bg-blue-600/20 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300">
                    <resource.icon className="h-7 w-7 stroke-[1.5]" />
                  </div>

                  <CardTitle className="text-xl font-semibold font-headline mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {resource.title}
                  </CardTitle>

                  <CardDescription className="text-base text-slate-400 group-hover:text-slate-300 transition-colors">
                    {resource.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
