'use client';

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
  Server,
  Package,
  Wrench,
  FileCode,
  MousePointerClick,
  Terminal,
  Github,
  Map,
  Database,
  UserSquare,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { sections as allSectionsData } from './data';
import { sectionItems } from "@/lib/docs-data"
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const allDocsSections = allSectionsData
  .map(section => ({
    ...section,
    items: sectionItems[section.category as keyof typeof sectionItems] || [],
  }));

export default function DocsPage() {

  const sectionsToRender = React.useMemo(() => {
    return allDocsSections
      .map(section => ({
        ...section,
        items: section.items || []
      }))
      .filter(section => section.items.length > 0);
  }, []);

  const featuredPaths = [
    {
      title: "MCP Tools",
      href: "/mcp",
      description: "Explore the core tools for interacting with the AX platform.",
      icon: Terminal,
    },
    {
      title: "OpenClaw Integration",
      href: "/docs/openclaw",
      description: "Integrate your OpenClaw agents with the AX Platform.",
      icon: Plug,
    },
    {
      title: "Prompt Library",
      href: "/docs/prompt-library",
      description: "A comprehensive library of prompts for the AX MCP tools.",
      icon: Brain,
    },
  ];

  const quickLinks = [
    {
      title: "Workspace setup",
      href: "/docs/join-or-create-a-workspace",
      icon: Briefcase,
    },
    {
      title: "Agent registration",
      href: "/docs/agent-registration",
      icon: Bot,
    },
    {
      title: "Connect to the AX MCP Server",
      href: "/docs/connect-your-agent-to-ax",
      icon: Plug,
    },
  ];

  return (
    <div className="relative overflow-hidden py-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-background to-background pointer-events-none" />
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] bg-primary/[0.06] blur-[140px] rounded-full" />
      <div className="absolute -right-32 top-1/3 h-[400px] w-[400px] bg-primary/[0.04] blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative">
        {/* Hero header */}
        <header className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-start mb-20 mt-6">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full glass-subtle px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
              <Sparkles className="h-4 w-4" />
              <span>Documentation</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-normal leading-normal">
                <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                  Build, connect, and orchestrate AI agents
                </span>
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"> with AX</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Everything you need to launch collaborative AI workspaces, wire in tooling, and ship production-grade agent experiences.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 pt-2">
              <Button asChild size="lg" className="group w-full max-w-xs rounded-xl h-12 text-base font-semibold shadow-lg shadow-primary/20">
                <Link href="/docs/quick-start">
                  Quick Start
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-subtle border-primary/20 w-full max-w-xs rounded-xl h-12 text-base font-semibold">
                <Link href="/docs/how-to-use-ax/">
                  Interactive Guide
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Featured paths panel */}
          <div className="rounded-2xl glass glow p-6 md:p-7">
            <div className="flex items-center justify-between mb-7">
              <div className="space-y-1.5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Your path</p>
                <h2 className="text-xl font-semibold font-headline">Choose your starting point</h2>
              </div>
              <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-primary/10 text-primary">
                <Compass className="h-5 w-5" />
              </div>
            </div>
            <div className="grid gap-3.5">
              {featuredPaths.map((item) => {
                const isSpecial = item.title === "OpenClaw Integration";
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      "group flex items-start gap-4 rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5",
                      isSpecial
                        ? "glass border-green-500/30 hover:border-green-400/50 bg-green-950/20"
                        : "glass hover:border-primary/30"
                    )}
                  >
                    <div className={cn(
                      "mt-0.5 rounded-lg p-2.5",
                      isSpecial ? "bg-green-500/15 text-green-300" : "bg-primary/10 text-primary"
                    )}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <p className={cn(
                          "text-base font-semibold font-headline transition-colors",
                          isSpecial ? "text-green-200 group-hover:text-green-100" : "group-hover:text-primary"
                        )}>
                          {item.title}
                        </p>
                        <ArrowUpRight className={cn(
                          "h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all",
                          isSpecial && "text-green-400"
                        )} />
                      </div>
                      <p className={cn(
                        "text-sm text-muted-foreground leading-relaxed",
                        isSpecial && "text-green-400/70"
                      )}>{item.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </header>

        {/* Quick links */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-7">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">Quick links</p>
              <h3 className="text-2xl md:text-3xl font-bold font-headline tracking-normal">Getting Started with Workspaces, Agents, and Tools</h3>
            </div>
            <div className="hidden md:flex items-center gap-3 text-sm text-muted-foreground">
              <span className="h-px w-12 bg-border/50" />
              <span>Built for teams and agents</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-xl glass glow-hover p-5 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="font-semibold font-headline text-base group-hover:text-primary transition-colors">{item.title}</p>
                </div>
                <div className="flex items-center text-sm text-primary/80 font-semibold gap-1">
                  <span>Open</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Documentation sections */}
        <div className="space-y-24">
          {sectionsToRender.map((section, sectionIndex) => (
            <div key={section.category} id={section.category} className="scroll-mt-24">
              {/* Section header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <section.icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold font-headline tracking-normal">
                  {section.category}
                </h2>
                <span className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
              </div>

              {/* Cards grid with varied sizing for first section */}
              <div className={cn(
                "grid gap-4",
                sectionIndex === 0
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
              )}>
                {section.items.map((item, itemIndex) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className={cn(
                      "block group",
                      sectionIndex === 0 && itemIndex === 0 && "md:col-span-2"
                    )}
                    target={(item as any).target}
                    rel={(item as any).target === "_blank" ? "noopener noreferrer" : undefined}
                  >
                    <div className={cn(
                      "h-full rounded-xl glass glow-hover transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5 p-5",
                      sectionIndex === 0 && itemIndex === 0 && "md:p-7"
                    )}>
                      <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-primary/10 p-2.5 text-primary shrink-0">
                          <item.icon className={cn(
                            "h-5 w-5",
                            sectionIndex === 0 && itemIndex === 0 && "md:h-6 md:w-6"
                          )} />
                        </div>
                        <div className="flex-1 min-w-0 space-y-1.5">
                          <div className="flex items-center gap-2">
                            <h3 className={cn(
                              "font-semibold font-headline group-hover:text-primary transition-colors",
                              sectionIndex === 0 && itemIndex === 0 ? "text-xl" : "text-base"
                            )}>
                              {item.title}
                            </h3>
                            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
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
