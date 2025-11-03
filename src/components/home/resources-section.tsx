
import { BookOpen, Video, FileText, Compass, HelpCircle, Users, FileCode } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const resources = [
  {
    icon: BookOpen,
    title: "Quick Start Guide",
    description: "Build and deploy your first AI agent.",
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
    icon: Users,
    title: "Discord & Support",
    description: "Join our community and get help from the team.",
    href: "/docs/discord-and-support",
  }
];

const ResourcesSection = () => {
  return (
    <section className="py-20 md:py-24 bg-card/40">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Resources
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started quickly with our guides and demos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resources.map((resource) => (
            <Link
              href={resource.href}
              key={resource.title}
              className="block group h-full"
            >
              <Card className="p-6 rounded-lg border border-border bg-background/50 hover:border-primary transition-all duration-300 h-full">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-4 mb-3">
                    <resource.icon className="h-6 w-6 text-accent" />
                    <CardTitle className="text-xl font-semibold font-headline group-hover:text-primary">
                      {resource.title}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    {resource.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
