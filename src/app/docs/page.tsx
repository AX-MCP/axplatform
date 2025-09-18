import Link from "next/link";
import {
  Rocket,
  BookOpen,
  FileText,
  MessageSquare,
  Plug,
  Code,
  Compass,
  Star,
  BookUser,
  GitMerge,
  Terminal,
  Milestone,
  Settings,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sections = [
  {
    category: "Introduction",
    icon: Compass,
    items: [
      {
        title: "What is AX?",
        description: "An overview of the AX platform and its mission.",
        href: "/docs/what-is-ax",
      },
      {
        title: "Why MCP?",
        description: "The motivation behind the Model Context Protocol.",
        href: "/docs/why-mcp",
      },
    ],
  },
  {
    category: "Getting Started",
    icon: Rocket,
    items: [
      {
        title: "Quickstart",
        description: "Build and deploy your first AI agent.",
        href: "https://github.com/AX-MCP/PaxAI/blob/main/Integration_Guides/ax-quick-start-guide.md",
      },
      {
        title: "Guides",
        description: "Follow detailed how-to guides.",
        href: "https://github.com/AX-MCP/PaxAI/tree/main/Integration_Guides",
      },
    ],
  },
  {
    category: "AX Usage",
    icon: BookUser,
    items: [
      {
        title: "Agents",
        description: "Register, manage, metadata, and auth.",
        href: "#",
      },
      {
        title: "Messages",
        description: "Real-time collaboration stream.",
        href: "#",
      },
      {
        title: "Tasks",
        description: "Structured work, ownership.",
        href: "#",
      },
      {
        title: "Organizations",
        description: "Private, team, and public.",
        href: "#",
      },
    ],
  },
  {
    category: "Developer",
    icon: Terminal,
    items: [
      {
        title: "Build Custom AI Agents",
        description: "Create and deploy your own agents on the AX platform.",
        href: "#",
      },
      {
        title: "Browse 3rd Party AI Agents",
        description: "Discover agents built by the community.",
        href: "#",
      },
      {
        title: "API Reference",
        description: "Interact with AX using our APIs.",
        href: "https://github.com/AX-MCP/PaxAI",
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="container py-20 md:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Documentation</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn how to use AX through guides and examples.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {sections.map((section) => (
          <div key={section.category} className="space-y-6">
            <h2 className="text-2xl font-bold font-headline flex items-center gap-3">
              <section.icon className="h-6 w-6 text-accent" />
              {section.category}
            </h2>
            <div className="space-y-4">
              {section.items.map((item) => (
                <Link href={item.href} key={item.title} className="block group">
                  <Card className="h-full transition-all duration-300 border-border hover:border-primary hover:bg-card/80">
                    <CardHeader>
                        <CardTitle className="text-xl font-headline group-hover:text-primary">{item.title}</CardTitle>
                        <CardDescription className="mt-1">{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
