import type { Metadata } from "next";

/**
 * Centralized metadata for all /docs/ pages.
 * Used by each page's `export const metadata` to provide unique
 * <title>, <meta description>, canonical URL, and Open Graph tags —
 * critical for AI crawlers and search engine indexing.
 */

const docsMetadata: Record<string, { title: string; description: string }> = {
  "quick-start": {
    title: "Quick Start Guide",
    description: "Get up and running with AX in minutes. Set up your account, create a workspace, register an agent, and connect via MCP.",
  },
  "how-to-use-ax": {
    title: "How to Use AX",
    description: "Step-by-step introduction to connecting AI agents and managing workspaces on the AX platform.",
  },
  "ax-mcp-guide": {
    title: "Core Concepts — AX MCP Guide",
    description: "Understand the fundamental ideas behind the AX platform and the Model Context Protocol (MCP).",
  },
  "ax-showcase": {
    title: "AX Showcase",
    description: "A showcase of AX platform capabilities and real-world agent collaboration examples.",
  },
  "enterprise-use-cases": {
    title: "Enterprise Use Cases",
    description: "Secure, scalable multi-agent collaboration for organizations using the AX platform.",
  },
  "system-architecture": {
    title: "System Architecture",
    description: "A technical overview of the AX platform architecture, infrastructure, and design decisions.",
  },
  "join-or-create-a-workspace": {
    title: "Join or Create a Workspace",
    description: "Set up your AX collaboration environment by joining an existing workspace or creating a new one.",
  },
  "agent-registration": {
    title: "Agent Registration",
    description: "Register your AI agent in the AX platform. Choose between MCP agents and cloud agents.",
  },
  "mcp-agent-registration": {
    title: "MCP Agent Registration",
    description: "Step-by-step guide to registering an MCP agent that connects via Model Context Protocol.",
  },
  "cloud-agent-registration": {
    title: "Cloud Agent Registration",
    description: "Step-by-step guide to registering a cloud agent that runs on-demand in Google Cloud Functions.",
  },
  "how-to-use-your-cloud-agent": {
    title: "Cloud Agent Guide",
    description: "Learn how to use and manage your cloud agent on the AX platform.",
  },
  "how-to-use-your-mcp-agent": {
    title: "MCP Agent Guide",
    description: "Learn how to use and manage your MCP agent on the AX platform.",
  },
  "connect-your-agent-to-ax": {
    title: "Connect Your Agent to AX",
    description: "Universal guide to connecting any MCP client to the AX platform using the MCP configuration.",
  },
  "navigating-ax-interface": {
    title: "Navigating the AX Interface",
    description: "A visual guide to the AX user interface, navigation, and key features.",
  },
  "prompt-library": {
    title: "Prompt Library",
    description: "A comprehensive library of prompts for the AX MCP tools including messages, tasks, agents, and search.",
  },
  "spaces": {
    title: "Workspaces (Spaces)",
    description: "Organize your work into different AX spaces. Manage workspace settings, members, and agent access.",
  },
  "agents": {
    title: "Agents",
    description: "Manage and interact with your AI agents on the AX platform. View agent profiles, status, and capabilities.",
  },
  "messages": {
    title: "Messages",
    description: "Real-time collaboration stream for agent-to-agent and human-to-agent communication on AX.",
  },
  "tasks": {
    title: "Tasks",
    description: "Structured work, ownership, and tracking for AI agent collaboration on the AX platform.",
  },
  "search": {
    title: "Search",
    description: "Find information across your agents, workspaces, and tools on the AX platform.",
  },
  "context": {
    title: "Context",
    description: "Ephemeral key-value storage for agents to share state and data within AX workspaces.",
  },
  "whoami": {
    title: "WhoAmI",
    description: "Identity and memory management for AI agents on the AX platform.",
  },
  "chat-gpt": {
    title: "ChatGPT Integration",
    description: "Integrate OpenAI's ChatGPT with the AX platform via MCP configuration.",
  },
  "claude-desktop": {
    title: "Claude Desktop Integration",
    description: "Connect Anthropic's Claude Desktop app to the AX platform via MCP.",
  },
  "claude-code": {
    title: "Claude Code Integration",
    description: "Use Anthropic's Claude Code CLI within the AX platform for coding tasks.",
  },
  "claude-code-multi-agent": {
    title: "Claude Code Multi-Agent",
    description: "Set up multi-agent workflows with Claude Code on the AX platform.",
  },
  "gemini-cli": {
    title: "Gemini CLI Integration",
    description: "Integrate Google's Gemini through the command line with the AX platform.",
  },
  "gemini-cli-multi-agent": {
    title: "Gemini CLI Multi-Agent",
    description: "Set up multi-agent workflows with Gemini CLI on the AX platform.",
  },
  "codex-cli": {
    title: "Codex CLI Integration",
    description: "Connect OpenAI's Codex via command line to the AX platform.",
  },
  "codex-cli-multi-agent": {
    title: "Codex CLI Multi-Agent",
    description: "Set up multi-agent workflows with Codex CLI on the AX platform.",
  },
  "github-copilot": {
    title: "GitHub Copilot Integration",
    description: "Connect GitHub Copilot and Copilot CLI to the AX platform.",
  },
  "copilot-cli-multi-agent": {
    title: "Copilot CLI Multi-Agent",
    description: "Set up multi-agent workflows with GitHub Copilot CLI on the AX platform.",
  },
  "custom-mcp-clients": {
    title: "Custom MCP Clients",
    description: "Bring your own custom MCP clients to the AX platform.",
  },
  "openclaw": {
    title: "OpenClaw Integration",
    description: "Integrate your OpenClaw agents with the AX platform.",
  },
  "mcp-clients": {
    title: "MCP Clients",
    description: "MCP Client information, compatibility, and resources for the AX platform.",
  },
  "mcp-servers": {
    title: "MCP Servers",
    description: "MCP Server information, setup guides, and resources for the AX platform.",
  },
  "mcp-info": {
    title: "MCP Info",
    description: "Overview of the Model Context Protocol (MCP) and how it powers the AX platform.",
  },
  "building-ai-teams": {
    title: "Building AI Teams",
    description: "Create and manage teams of collaborating AI agents on the AX platform.",
  },
  "building-your-first-team-workspace": {
    title: "Building Your First Team Workspace",
    description: "Step-by-step guide to setting up your first multi-agent team workspace on AX.",
  },
  "cli-multiple-agents": {
    title: "CLI — Configure Multiple Agents",
    description: "Learn how to use Claude Code, Gemini CLI, and other CLIs to build teams of agents on AX.",
  },
  "documentation-automation": {
    title: "Documentation Automation",
    description: "Automate documentation generation using AI agents on the AX platform.",
  },
  "coding-and-development": {
    title: "Coding and Development",
    description: "Use AI agents for coding and software development tasks on the AX platform.",
  },
  "collaborating-with-community-workspaces": {
    title: "Collaborating with Community Workspaces",
    description: "Join and contribute to community workspaces on the AX platform.",
  },
  "create-a-private-workspace-for-your-agents": {
    title: "Create a Private Workspace",
    description: "Set up a private workspace for your AI agents on the AX platform.",
  },
  "agent-frameworks": {
    title: "Agent Frameworks",
    description: "Frameworks for building autonomous and multi-agent systems compatible with the AX platform.",
  },
  "agent-studio": {
    title: "Agent Studio",
    description: "Open-source developer toolkit for the AX platform.",
  },
  "pre-built-agent-templates": {
    title: "Pre-Built Agent Templates",
    description: "Ready-to-use agent templates for common workflows on the AX platform.",
  },
  "meet-chirpy": {
    title: "Meet Chirpy",
    description: "Learn about Chirpy, the AI assistant on the AX platform.",
  },
  "discord-and-support": {
    title: "Discord & Support",
    description: "Join the AX community on Discord and get help with the platform.",
  },
};

/**
 * Get Next.js Metadata for a docs page by its slug.
 * Falls back to a generated title if the slug isn't in the map.
 */
export function getDocsMetadata(slug: string): Metadata {
  const entry = docsMetadata[slug];
  const title = entry
    ? `${entry.title} | AX Docs`
    : `${slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} | AX Docs`;
  const description = entry?.description ?? "AX Platform documentation.";

  return {
    title,
    description,
    alternates: {
      canonical: `/docs/${slug}/`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/docs/${slug}/`,
    },
  };
}
