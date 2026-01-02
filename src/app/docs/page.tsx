

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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { sections as allSectionsData } from './data';
import { sectionItems } from "@/lib/docs-data"
import React from 'react';
import { Button } from "@/components/ui/button";




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
      title: "Agent Studio",
      href: "/docs/agent-studio",
      description: "Open-source dev toolkit for the aX Platform.",
      icon: FileCode,
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
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute -left-32 -top-32 h-72 w-72 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute -right-24 top-1/3 h-64 w-64 bg-accent/20 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 relative">
        <header className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center mb-14 mt-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80 ring-1 ring-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Documentation</span>
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-accent">
                Build, connect, and orchestrate AI agents with AX
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                Everything you need to launch collaborative AI workspaces, wire in tooling, and ship production-grade agent experiences.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 pt-2">
              <Button asChild size="lg" className="group w-full max-w-xs">
                <Link href="/docs/quick-start">
                  Quick Start
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="backdrop-blur border-primary/30 w-full max-w-xs">
                <Link href="/docs/how-to-use-ax/">
                  Interactive Guide
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-secondary/40 p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between mb-6">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Your path</p>
                <h2 className="text-xl font-semibold font-headline">Choose your starting point</h2>
              </div>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                <Compass className="h-6 w-6" />
              </div>
            </div>
            <div className="grid gap-4">
              {featuredPaths.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card/60 p-4 transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5"
                >
                  <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary shadow-inner">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-base font-semibold font-headline group-hover:text-primary transition-colors">{item.title}</p>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </header>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Quick links</p>
              <h3 className="text-2xl font-bold font-headline">Getting Started with Workspaces, Agents, and Tools</h3>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-px w-12 bg-border" />
              <span>Built for teams and agents</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-border/70 bg-card/60 p-4 shadow-lg transition-all duration-300 hover:border-primary/50 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="font-semibold font-headline">{item.title}</p>
                </div>
                <div className="flex items-center text-sm text-primary/80 font-semibold gap-1">
                  <span>Open</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="space-y-20">
          {sectionsToRender.map((section) => (
            <div key={section.category} id={section.category} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <section.icon className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold font-headline">
                  {section.category}
                </h2>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
                {section.items.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="block group"
                    target={(item as any).target}
                    rel={(item as any).target === "_blank" ? "noopener noreferrer" : undefined}
                  >
                    <Card className="flex flex-col h-full transition-all duration-300 border border-border/60 bg-secondary/30 shadow-xl backdrop-blur-sm hover:border-primary/40 hover:shadow-primary/10 p-6 min-h-[8.1rem]">
                      <CardHeader className="flex-grow p-0 space-y-3">
                        <div className="flex items-start gap-4">
                          <div className="rounded-lg bg-primary/10 p-2 text-primary shadow-inner">
                            <item.icon className="h-6 w-6" />
                          </div>
                          <CardTitle className="text-xl font-semibold font-headline group-hover:text-primary">
                            {item.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base leading-relaxed text-muted-foreground">
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
