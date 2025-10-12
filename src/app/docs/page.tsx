"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
import { sections as allSectionsData } from './layout';
import React from 'react';


const sectionItems = {
  "Introduction": [
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
  "Getting Started": [
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
  "Core Features": [
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
  "LLM Integration Tutorials": [
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
  "Advanced": [
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
  "Tutorials": [
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
  "Resources": [
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
};

const allDocsSections = allSectionsData.map(section => ({
  ...section,
  items: sectionItems[section.category as keyof typeof sectionItems] || [],
}));


export default function DocsPage() {
  const sectionsToRender = allDocsSections;

  return (
    <div className="py-16 px-6 md:px-12 lg:px-24">
      <header className="mb-24">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-3">
          AX Documentation
        </h1>
        <p className="text-xl text-muted-foreground">
          Build collaborative AI agents, crews, and flows — production ready from day one.
        </p>
      </header>
      
      <div className="space-y-32">
        {sectionsToRender.map((section) => (
          <div key={section.category} id={section.category} className="scroll-mt-24">
            <h2 className="text-3xl font-bold font-headline mb-8">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item) => (
                <Link
                  href={item.href}
                  key={item.title}
                  className="block group h-full"
                  target={item.target}
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                  <Card className="flex flex-col h-full transition-all duration-300 border-border bg-card/50 hover:border-primary hover:shadow-lg hover:shadow-primary/10 p-4">
                    <CardHeader className="flex-grow">
                      <div className="flex items-center gap-4 mb-3">
                         <item.icon className="h-7 w-7 text-accent" />
                         <CardTitle className="text-2xl font-semibold font-headline group-hover:text-primary">
                          {item.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-lg">
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
