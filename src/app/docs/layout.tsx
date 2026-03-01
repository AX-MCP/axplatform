"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Bot } from "lucide-react";
import React from "react";
import { sections } from "./data";

/** Maps slug → human-readable h1 for crawlers. Visually hidden. */
const pageTitles: Record<string, string> = {
  "quick-start": "Quick Start Guide",
  "how-to-use-ax": "How to Use AX",
  "ax-mcp-guide": "Core Concepts — AX MCP Guide",
  "ax-showcase": "AX Showcase",
  "enterprise-use-cases": "Enterprise Use Cases",
  "system-architecture": "System Architecture",
  "join-or-create-a-workspace": "Join or Create a Workspace",
  "agent-registration": "Agent Registration",
  "mcp-agent-registration": "MCP Agent Registration",
  "cloud-agent-registration": "Cloud Agent Registration",
  "how-to-use-your-cloud-agent": "Cloud Agent Guide",
  "how-to-use-your-mcp-agent": "MCP Agent Guide",
  "connect-your-agent-to-ax": "Connect Your Agent to AX",
  "navigating-ax-interface": "Navigating the AX Interface",
  "prompt-library": "Prompt Library",
  "spaces": "Workspaces (Spaces)",
  "agents": "Agents",
  "messages": "Messages",
  "tasks": "Tasks",
  "search": "Search",
  "context": "Context",
  "whoami": "WhoAmI",
  "chat-gpt": "ChatGPT Integration",
  "claude-desktop": "Claude Desktop Integration",
  "claude-code": "Claude Code Integration",
  "claude-code-multi-agent": "Claude Code Multi-Agent",
  "gemini-cli": "Gemini CLI Integration",
  "gemini-cli-multi-agent": "Gemini CLI Multi-Agent",
  "codex-cli": "Codex CLI Integration",
  "codex-cli-multi-agent": "Codex CLI Multi-Agent",
  "github-copilot": "GitHub Copilot Integration",
  "copilot-cli-multi-agent": "Copilot CLI Multi-Agent",
  "custom-mcp-clients": "Custom MCP Clients",
  "openclaw": "OpenClaw Integration",
  "mcp-clients": "MCP Clients",
  "mcp-servers": "MCP Servers",
  "mcp-info": "MCP Info",
  "building-ai-teams": "Building AI Teams",
  "building-your-first-team-workspace": "Building Your First Team Workspace",
  "cli-multiple-agents": "CLI — Configure Multiple Agents",
  "documentation-automation": "Documentation Automation",
  "coding-and-development": "Coding and Development",
  "collaborating-with-community-workspaces": "Collaborating with Community Workspaces",
  "create-a-private-workspace-for-your-agents": "Create a Private Workspace",
  "agent-frameworks": "Agent Frameworks",
  "agent-studio": "Agent Studio",
  "pre-built-agent-templates": "Pre-Built Agent Templates",
  "meet-chirpy": "Meet Chirpy",
  "discord-and-support": "Discord & Support",
};

function getPageH1(pathname: string): string | null {
  const slug = pathname.replace(/\/docs\/?/, "").replace(/\/$/, "");
  if (!slug) return null; // docs index has its own h1
  return pageTitles[slug] ?? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const h1 = getPageH1(pathname);

  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="icon" className="border-r border-border/30">
        <SidebarHeader className="h-14 justify-between items-center p-4">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-primary shrink-0" />
            <span className="font-bold font-headline text-xl group-data-[collapsible=icon]:hidden">AX</span>
          </Link>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent className="mt-8">
          <SidebarMenu className="px-3">
            {sections.map((section) => (
              <SidebarMenuItem key={section.category} className="border-b border-sidebar-border/50 last:border-b-0">
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(section.href)}
                  tooltip={{
                    children: section.category,
                    side: "right",
                    align: "center",
                  }}
                  className="h-14 justify-start group-data-[collapsible=icon]:justify-center rounded-lg hover:bg-sidebar-accent/60 transition-colors"
                  size="lg"
                >
                  <Link href={section.href}>
                    <section.icon className="h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium group-data-[collapsible=icon]:hidden">{section.category}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      <SidebarInset>
        <article>
          {h1 && <h1 className="sr-only">{h1}</h1>}
          {children}
        </article>
      </SidebarInset>
    </SidebarProvider>
  );
}
