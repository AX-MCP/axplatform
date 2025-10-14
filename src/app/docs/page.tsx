'use client';

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
  Server,
  Package,
  Wrench,
  FileCode,
  MousePointerClick,
  Terminal,
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
        title: "About the AX Platform",
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
        href: "/docs/system-architecture",
        icon: Code,
      },
      {
        title: "Enterprise Use Cases",
        description: "Secure, scalable multi-agent collaboration for organizations.",
        href: "/docs/enterprise-use-cases",
        icon: Users,
      },
      {
        title: "Security & Auth",
        description: "Learn about AX's security architecture.",
        href: "/features/secure-by-default",
        icon: Shield,
      },
  ],
  "Getting Started": [
      {
        title: "Quick Start",
        description: "Your first steps to get up and running with AX.",
        href: "/docs/quick-start",
        icon: Rocket,
      },
      {
        title: "Meet Chirpy - Your AX Assistant",
        description: "Learn how to interact with our onboarding assistant.",
        href: "/docs/meet-chirpy",
        icon: Users,
      },
      {
        title: "Calling the AX MCP Server",
        description: "Learn how to interact with the AX MCP server.",
        href: "/docs/calling-ax-mcp-server",
        icon: Terminal,
      },
      {
        title: "Navigating the AX Interface",
        description: "A guide to the AX user interface.",
        href: "/docs/navigating-ax-interface",
        icon: MousePointerClick,
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
        href: "/docs/agents",
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
        href: "/docs/chat-gpt",
        icon: Plug,
      },
       {
        title: "Claude Desktop",
        description: "Connect Anthropic's Claude Desktop app.",
        href: "/docs/claude-desktop",
        icon: Plug,
      },
      {
        title: "Claude Code",
        description: "Use Claude for coding tasks within AX.",
        href: "/docs/claude-code",
        icon: Plug,
      },
      {
        title: "Gemini CLI",
        description: "Integrate Google's Gemini through the command line.",
        href: "/docs/gemini-cli",
        icon: Plug,
      },
      {
        title: "Codex CLI",
        description: "Connect OpenAI's Codex via command line.",
        href: "/docs/codex-cli",
        icon: Plug,
      },
      {
        title: "Custom MCP Clients",
        description: "Bring your own custom MCP clients to AX.",
        href: "/docs/custom-mcp-clients",
        icon: Plug,
      },
  ],
  "MCP Resources": [
    {
        title: "MCP Information",
        description: "What is MCP and how do we use it at AX?",
        href: "/mcp",
        icon: Package,
    },
    {
      title: "MCP Deep Dive",
      description: "An in-depth look at the Model Context Protocol.",
      href: "/mcp",
      icon: Brain,
    },
    {
      title: "MCP Clients",
      description: "MCP Client information and resources.",
      href: "/docs/mcp-clients",
      icon: Plug,
    },
    {
      title: "MCP Servers",
      description: "MCP Server information and resources.",
      href: "/docs/mcp-servers",
      icon: Server,
    },
  ],
  "Agent Collaboration Guides": [
      {
        title: "Building AI Teams",
        description: "Create and manage teams of collaborating agents.",
        href: "/docs/building-ai-teams",
        icon: Lightbulb,
      },
      {
        title: "Documentation Automation",
        description: "Automate the generation of documentation.",
        href: "/docs/documentation-automation",
        icon: Lightbulb,
      },
      {
        title: "Research + Coding",
        description: "Use agents for research and coding tasks.",
        href: "/docs/research-and-coding",
        icon: Lightbulb,
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
        title: "CLI's - Configure Multiple Agents",
        description: "Learn how to use Claude Code and Gemini CLI to build teams of agents, or use sub-agents to handle specific types of tasks.",
        href: "/docs/cli-multiple-agents",
        icon: Terminal,
      },
  ],
    "AI Agent Resources": [
      {
        title: "3rd Party AI Agents",
        description: "A curated list of frameworks, projects, and tools for for building with AI agents.",
        href: "/ai-agents/browse",
        icon: Bot,
      },
      {
        title: "Agent Frameworks",
        description: "Frameworks for building autonomous and multi-agent systems.",
        href: "/docs/agent-frameworks",
        icon: Wrench,
      },
      {
        title: "Pre-Built Agent Templates",
        description: "Get started quickly with ready-to-use agent templates.",
        href: "/docs/pre-built-agent-templates",
        icon: FileCode,
      },
  ],
  "Help and Support": [
      {
        title: "FAQ",
        description: "Frequently asked questions.",
        href: "/contact",
        icon: BookCopy,
      },
      {
        title: "Discord & Support",
        description: "Join our community and get help.",
        href: "/docs/discord-and-support",
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

const allDocsSections = allSectionsData
  .map(section => ({
    ...section,
    items: sectionItems[section.category as keyof typeof sectionItems] || [],
  }));


export default function DocsPage() {
  const sectionsToRender = allDocsSections;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <header className="mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-3">
            AX Documentation
          </h1>
          <p className="text-xl text-muted-foreground">
            Build collaborative AI agents, crews, and flows — production ready from day one.
          </p>
        </header>
        
        <div className="space-y-24">
          {sectionsToRender.map((section) => (
            <div key={section.category} id={section.category} className="scroll-mt-24">
              <h2 className="text-3xl font-bold font-headline mb-8">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
                {section.items.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="block group"
                    target={item.target}
                    rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  >
                    <Card className="flex flex-col h-full transition-all duration-300 border-border bg-card/50 hover:border-primary hover:shadow-lg hover:shadow-primary/10 p-6 min-h-[8.1rem]">
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
    </div>
  );
}
