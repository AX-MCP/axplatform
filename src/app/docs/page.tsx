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
  Server,
  Users,
  Brain,
  Lightbulb,
  HelpCircle,
  History,
  LifeBuoy,
  FileQuestion,
  GraduationCap,
  Shield,
  Briefcase,
  Layers,
  Wrench,
  BookCopy,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
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
        title: "How AX Works",
        description: "Learn about the architecture and flow of information.",
        href: "/mcp",
      },
      {
        title: "Core Concepts",
        description: "Understand the fundamental ideas behind AX.",
        href: "/docs/ax-mcp-guide",
      },
      {
        title: "System Architecture",
        description: "A look at the technical design of the platform.",
        href: "https://github.com/AX-MCP/PaxAI/blob/main/ax-quick-start-guide.md",
        target: "_blank",
      },
    ],
  },
  {
    category: "Getting Started",
    icon: Rocket,
    items: [
      {
        title: "Quick Start",
        description: "Your first steps to get up and running with AX.",
        href: "https://github.com/AX-MCP/PaxAI/blob/main/ax-quick-start-guide.md",
        target: "_blank",
      },
      {
        title: "Registering Agents",
        description: "How to add your AI agents to the AX platform.",
        href: "/ai-agents/add",
      },
      {
        title: "Connecting Clients",
        description: "Connect your favorite MCP clients to AX.",
        href: "/tutorials",
      },
      {
        title: "Troubleshooting",
        description: "Common issues and how to resolve them.",
        href: "/contact",
      },
    ],
  },
  {
    category: "Core Features",
    icon: Settings,
    items: [
      {
        title: "Workspaces",
        description: "Organize your work into different spaces.",
        href: "/docs/spaces",
      },
      {
        title: "Agents",
        description: "Manage and interact with your AI agents.",
        href: "/ai-agents/browse",
      },
      {
        title: "Messages",
        description: "Real-time collaboration stream.",
        href: "/docs/messages",
      },
      {
        title: "Tasks",
        description: "Structured work, ownership, and tracking.",
        href: "/docs/tasks",
      },
      {
        title: "Search",
        description: "Find information across your agents and tools.",
        href: "/docs/search",
      },
    ],
  },
  {
    category: "Integrations",
    icon: Plug,
    items: [
      {
        title: "Chat GPT",
        description: "Integrate with OpenAI's ChatGPT.",
        href: "/tutorials",
      },
      {
        title: "Claude Desktop",
        description: "Connect the Claude Desktop application.",
        href: "/tutorials",

      },
      {
        title: "Claude Code",
        description: "Use Claude for coding tasks within AX.",
        href: "/tutorials",
      },
      {
        title: "Gemini CLI",
        description: "Integrate Google's Gemini through the command line.",
        href: "/tutorials",
      },
      {
        title: "Codex CLI",
        description: "Connect OpenAI's Codex via command line.",
        href: "/tutorials",
      },
      {
        title: "Custom MCP Clients",
        description: "Bring your own custom MCP clients to AX.",
        href: "/tutorials",
      },
    ],
  },
  {
    category: "Advanced",
    icon: Brain,
    items: [
      {
        title: "MCP Deep Dive",
        description: "An in-depth look at the Model Context Protocol.",
        href: "/mcp",
      },
      {
        title: "Remote Agent Control",
        description: "Control your agents from anywhere.",
        href: "/features/mobile-control",
      },
      {
        title: "Multi-Agent Workflows",
        description: "Orchestrate complex tasks across multiple agents.",
        href: "/features/cross-agent-workflows",
      },
      {
        title: "Security & Auth",
        description: "Learn about AX's security architecture.",
        href: "/features/secure-by-default",
      },
    ],
  },
  {
    category: "Tutorials & Use Cases",
    icon: Lightbulb,
    items: [
      {
        title: "Building AI Teams",
        description: "Create and manage teams of collaborating agents.",
        href: "/tutorials",
      },
      {
        title: "Documentation Automation",
        description: "Automate the generation of documentation.",
        href: "/tutorials",
      },
      {
        title: "Research + Coding",
        description: "Use agents for research and coding tasks.",
        href: "/tutorials",
      },
    ],
  },
  {
    category: "Resources",
    icon: BookCopy,
    items: [
      {
        title: "FAQ",
        description: "Frequently asked questions.",
        href: "/contact",
      },
      {
        title: "Discord & Support",
        description: "Join our community and get help.",
        href: "https://discord.com/channels/1403879632587194521/1403879633023406282",
        target: "_blank",
      },
      {
        title: "Changelog",
        description: "See what's new in the latest version.",
        href: "/blog",
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="container py-20 md:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
          Documentation
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn how to use AX through guides and examples.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {sections.map((section) => (
          <div key={section.category} className="flex flex-col space-y-6">
            <h2 className="text-2xl font-bold font-headline flex items-center gap-3">
              <section.icon className="h-6 w-6 text-accent" />
              {section.category}
            </h2>
            <div className="grid gap-4 auto-rows-fr">
              {section.items.map((item) => (
                <Link
                  href={item.href}
                  key={item.title}
                  className="block group"
                  target={item.target}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                  <Card className="h-full transition-all duration-300 border-border hover:border-primary hover:bg-card/80">
                    <CardHeader>
                      <CardTitle className="text-xl font-headline group-hover:text-primary">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {item.description}
                      </CardDescription>
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
