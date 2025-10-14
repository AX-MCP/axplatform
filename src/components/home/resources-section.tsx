import { BookOpen, Video } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const resources = [
  {
    icon: BookOpen,
    title: "Quick Start Guide",
    description: "Your first steps to get up and running with AX in minutes.",
    href: "/docs/quick-start",
  },
  {
    icon: Video,
    title: "Platform Demos",
    description: "See the AX platform in action with guided video walkthroughs.",
    href: "/demos",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {resources.map((resource) => (
            <Link
              href={resource.href}
              key={resource.title}
              className="block group h-full"
            >
              <Card className="p-6 rounded-lg border border-border bg-background/50 hover:border-primary transition-all duration-300 flex flex-col items-center text-center h-full">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/10 text-accent mb-4">
                  <resource.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-headline mb-2">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground flex-grow">
                  {resource.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
