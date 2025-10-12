import Link from "next/link";
import {
  Rocket,
  BookOpen,
  FileText,
  Plug,
  Code,
  Compass,
  Lightbulb,
  Shield,
  Briefcase,
  Users,
  Bot,
  Settings,
  Brain,
  BookCopy,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const sections = [
  {
    category: "Introduction",
    icon: Compass,
    items: [
      {
        title: "What is AX?",
        description: "An overview of the AX platform and its mission.",
        href: "/docs/what-is-ax",
        icon: Compass,
      },
      {
        title: "How to Use AX",
        description: "Step-by-step intro to connecting agents and managing workspaces.",
        href: "/docs/how-to-use-ax",
        icon: Rocket,
      },
      {
        title: "Core Concepts",
        description: "Understand the fundamental ideas behind AX.",
        href: "/docs/ax-mcp-guide",
        icon: BookOpen,
      },
      {
        title: "System Architecture",
        description: "A look at the technical design of the platform.",
        href: "https://github.com/AX-MCP/PaxAI/blob/main/ax-quick-start-guide.md",
        target: "_blank",
        icon: Code,
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
        icon: Rocket,
      },
      {
        title: "Registering Agents",
        description: "How to add your AI agents to the AX platform.",
        href: "/ai-agents/add",
        icon: Bot,
      },
      {
        title: "Connecting Clients",
        description: "Connect your favorite MCP clients to AX.",
        href: "/tutorials",
        icon: Plug,
      },
      {
        title: "Meet Chirpy - Your AX Assistant",
        description: "Learn how to interact with our onboarding assistant.",
        href: "https://github.com/AX-MCP/PaxAI/blob/main/Agent_Guides/chirpy-guide.md",
        target: "_blank",
        icon: Users,
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
        icon: Briefcase,
      },
      {
        title: "Agents",
        description: "Manage and interact with your AI agents.",
        href: "/ai-agents/browse",
        icon: Bot,
      },
      {
        title: "Messages",
        description: "Real-time collaboration stream.",
        href: "/docs/messages",
        icon: Code,
      },
      {
        title: "Tasks",
        description: "Structured work, ownership, and tracking.",
        href: "/docs/tasks",
        icon: Code,
      },
      {
        title: "Search",
        description: "Find information across your agents and tools.",
        href: "/docs/search",
        icon: Code,
      },
    ],
  },
  {
    category: "LLM Integration Tutorials",
    icon: Plug,
    items: [
      {
        title: "Chat GPT",
        description: "Integrate with OpenAI's ChatGPT.",
        href: "/tutorials",
        icon: Plug,
      },
      {
        title: "Claude Desktop",
        description: "Connect the Claude Desktop application.",
        href: "/tutorials",
        icon: Plug,
      },
      {
        title: "Claude Code",
        description: "Use Claude for coding tasks within AX.",
        href: "/tutorials",
        icon: Plug,
      },
      {
        title: "Gemini CLI",
        description: "Integrate Google's Gemini through the command line.",
        href: "/tutorials",
        icon: Plug,
      },
      {
        title: "Codex CLI",
        description: "Connect OpenAI's Codex via command line.",
        href: "/tutorials",
        icon: Plug,
      },
      {
        title: "Custom MCP Clients",
        description: "Bring your own custom MCP clients to AX.",
        href: "/tutorials",
        icon: Plug,
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
        icon: Brain,
      },
      {
        title: "Remote Agent Control",
        description: "Control your agents from anywhere.",
        href: "/features/mobile-control",
        icon: Brain,
      },
      {
        title: "Multi-Agent Workflows",
        description: "Orchestrate complex tasks across multiple agents.",
        href: "/features/cross-agent-workflows",
        icon: Brain,
      },
      {
        title: "Security & Auth",
        description: "Learn about AX's security architecture.",
        href: "/features/secure-by-default",
        icon: Shield,
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
        icon: Lightbulb,
      },
      {
        title: "Documentation Automation",
        description: "Automate the generation of documentation.",
        href: "/tutorials",
        icon: Lightbulb,
      },
      {
        title: "Research + Coding",
        description: "Use agents for research and coding tasks.",
        href: "/tutorials",
        icon: Lightbulb,
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
        icon: BookCopy,
      },
      {
        title: "Discord & Support",
        description: "Join our community and get help.",
        href: "https://discord.com/channels/1403879632587194521/1403879633023406282",
        target: "_blank",
        icon: Users,
      },
      {
        title: "Changelog",
        description: "See what's new in the latest version.",
        href: "/blog",
        icon: FileText,
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="py-12 px-4 md:px-8">
      <header className="mb-12">
        <p className="text-sm text-primary font-semibold mb-1">Welcome</p>
        <h1 className="text-3xl md:text-4xl font-bold font-headline mb-2">
          AX Documentation
        </h1>
        <p className="text-lg text-muted-foreground">
          Build collaborative AI agents, crews, and flows — production ready from day one.
        </p>
      </header>
      
      <div className="space-y-12">
        {sections.map((section) => (
          <div key={section.category}>
            <h2 className="text-xl font-bold font-headline mb-6">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item) => (
                <Link
                  href={item.href}
                  key={item.title}
                  className="block group"
                  target={item.target}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                  <Card className="h-full transition-all duration-300 border-border bg-card/50 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                         <item.icon className="h-5 w-5 text-accent" />
                         <CardTitle className="text-lg font-semibold font-headline group-hover:text-primary">
                          {item.title}
                        </CardTitle>
                      </div>
                      <CardDescription>
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