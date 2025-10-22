
import { BookOpen, Video, FileText, Compass, HelpCircle } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const resources = [
  {
    icon: BookOpen,
    title: "Quick Start Guide",
    href: "/docs/quick-start",
  },
  {
    icon: Video,
    title: "Demo Videos",
    href: "/demos",
  },
  {
    icon: Compass,
    title: "AX Documentation",
    href: "/docs",
  },
  {
    icon: FileText,
    title: "Blog",
    href: "/blog",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    href: "/faq",
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
              <Card className="p-4 rounded-lg border border-border bg-background/50 hover:border-primary transition-all duration-300 h-full">
                <CardHeader className="flex flex-row items-center justify-start gap-4 p-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-accent/10 text-accent">
                    <resource.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold font-headline">
                    {resource.title}
                  </CardTitle>
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
