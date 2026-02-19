
import { BookOpen, Video, Compass } from "lucide-react";
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
              <Card className="rounded-lg border border-border/60 bg-background/50 hover:border-primary transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-secondary text-blue-500 shrink-0 mt-1">
                      <resource.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold font-headline mb-1 group-hover:text-primary">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {resource.description}
                      </CardDescription>
                    </div>
                  </div>
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
