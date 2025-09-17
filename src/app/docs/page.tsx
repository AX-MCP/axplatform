import Link from "next/link";
import {
  Rocket,
  BookOpen,
  FileText,
  MessageSquare,
  Plug,
  Codepen,
  Wrench,
  Code,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sections = {
  build: [
    {
      title: "Quickstart",
      description: "Build and deploy your first AI agent.",
      href: "https://github.com/AX-MCP/PaxAI/blob/main/Integration_Guides/ax-quick-start-guide.md",
      icon: Rocket,
    },
    {
      title: "Guides",
      description: "Follow detailed how-to guides.",
      href: "https://github.com/AX-MCP/PaxAI/tree/main/Agent_Guides",
      icon: BookOpen,
    },
    {
      title: "Reference",
      description: "Learn the key concepts of AX.",
      href: "https://github.com/AX-MCP/PaxAI",
      icon: FileText,
    },
  ],
  deploy: [
    {
      title: "Add a bot to your website",
      description: "Embed a bot on your website.",
      href: "#",
      icon: MessageSquare,
    },
    {
      title: "Integrations",
      description: "Connect a bot to external services.",
      href: "https://github.com/AX-MCP/PaxAI/tree/main/Integration_Guides",
      icon: Plug,
    },
    {
      title: "React Library",
      description: "Build a bot into your React project.",
      href: "#",
      icon: Codepen,
    },
  ],
  developers: [
    {
      title: "SDK",
      description: "Build with our developer tools.",
      href: "https://github.com/AX-MCP/PaxAI",
      icon: Wrench,
    },
    {
      title: "API Reference",
      description: "Interact with AX using our APIs.",
      href: "https://github.com/AX-MCP/PaxAI",
      icon: Code,
    },
  ],
};

export default function DocsPage() {
  return (
    <div className="container py-20 md:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Documentation</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn how to use AX through guides and examples.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">
            <Sparkles className="mr-2" /> Ask AI
          </Button>
          <Button size="lg" variant="outline">
            Get help
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold font-headline">Build</h2>
          {sections.build.map((item) => (
            <Link href={item.href} key={item.title} className="block group">
              <Card className="h-full transition-all duration-300 border-border hover:border-primary hover:bg-card/80">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-2 rounded-md bg-accent/10 text-accent">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-headline group-hover:text-primary">{item.title}</CardTitle>
                    <CardDescription className="mt-1">{item.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold font-headline">Deploy</h2>
          {sections.deploy.map((item) => (
            <Link href={item.href} key={item.title} className="block group">
              <Card className="h-full transition-all duration-300 border-border hover:border-primary hover:bg-card/80">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-2 rounded-md bg-accent/10 text-accent">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-headline group-hover:text-primary">{item.title}</CardTitle>
                    <CardDescription className="mt-1">{item.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <div className="space-y-8">
          <h2 className="text-2xl font-bold font-headline">For Developers</h2>
          {sections.developers.map((item) => (
            <Link href={item.href} key={item.title} className="block group">
              <Card className="h-full transition-all duration-300 border-border hover:border-primary hover:bg-card/80">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-2 rounded-md bg-accent/10 text-accent">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-headline group-hover:text-primary">{item.title}</CardTitle>
                    <CardDescription className="mt-1">{item.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
