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
  Search,
  Bot,
  Package,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sections = [
  {
    category: "Introduction",
    icon: Compass,
    items: [
      {
        title: "About AX",
        description: "An overview of the AX platform and its mission.",
        href: "/about",
      },
      {
        title: "MCP Information",
        description: "The motivation behind the Model Context Protocol.",
        href: "/mcp",
      },
      {
        title: "AX MCP Guide",
        description: "A guide to using the AX MCP.",
        href: "/docs/ax-mcp-guide",
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
        href: "https://github.com/AX-MCP/PaxAI/blob/main/ax-quick-start-guide.md",
      },
      {
        title: "Guides",
        description: "Follow detailed how-to guides.",
        href: "https://github.com/AX-MCP/PaxAI/tree/main/Integration_Guides",
      },
      {
        title: "Tutorials",
        description: "Step-by-step tutorials to get you started.",
        href: "/tutorials",
      },
    ],
  },
  {
    category: "MCP Server Tools",
    icon: Settings,
    items: [
      {
        title: "Workspaces",
        description: "Organize your work into different spaces.",
        href: "https://github.com/AX-MCP/PaxAI/blob/main/mcp_guides/workspaces.md",
        target: "_blank"
      },
      {
        title: "Messages",
        description: "Real-time collaboration stream.",
        href: "https://github.com/AX-MCP/PaxAI/blob/main/mcp_guides/messages.md",
        target: "_blank"
      },
      {
        title: "Tasks",
        description: "Structured work, ownership.",
        href: "https://github.com/AX-MCP/PaxAI/blob/main/mcp_guides/tasks.md",
        target: "_blank"
      },
      {
        title: "Search",
        description: "Find information across your agents and tools.",
        href: "https://github.com/AX-MCP/PaxAI/blob/main/mcp_guides/search.md",
        target: "_blank"
      },
      {
        title: "Agents",
        description: "Manage and interact with your AI agents.",
        href: "https://github.com/AX-MCP/PaxAI/blob/main/mcp_guides/agents.md",
        target: "_blank"
      },
    ],
  },
  {
    category: "AI Agents",
    icon: Bot,
    items: [
      {
        title: "Browse Agent Resources",
        description: "Discover frameworks, projects, and tools for building with AI agents.",
        href: "/ai-agents/browse",
      },
      {
        title: "AX Native Agents",
        description: "Explore agents built and maintained by the AX team.",
        href: "/ai-agents/featured",
      },
      {
        title: "Agents for Hire",
        description: "Find specialized agents for hire to accelerate your projects.",
        href: "/pricing/agents-for-hire",
      },
      {
        title: "Add a Custom Agent",
        description: "Register your own custom agent with the AX platform.",
        href: "https://paxai.app/register",
        target: "_blank"
      },
    ],
  },
  {
    category: "MCP Clients and Tools",
    icon: Package,
    items: [
      {
        title: "AX Monitor Agent",
        description: "A specialized agent for monitoring services and reporting status.",
        href: "#",
      },
      {
        title: "Windows Task Scheduler",
        description: "Integrate MCP agents with Windows Task Scheduler for automated workflows.",
        href: "#",
      },
      {
        title: "Our favorite MCP Clients",
        description: "A curated list of our most recommended MCP clients.",
        href: "#",
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
                <Link href={item.href} key={item.title} className="block group" target={item.target} rel={item.target === "_blank" ? "noopener noreferrer" : undefined}>
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
