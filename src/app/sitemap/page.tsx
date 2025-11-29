

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const mainPages = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/blog", title: "Blog" },
  { href: "/book-a-demo", title: "Book a Demo" },
  { href: "/careers", title: "Careers" },
  { href: "/contact", title: "Contact" },
  { href: "/demos", title: "Demos" },
  { href: "/docs", title: "Documentation" },
  { href: "/faq", title: "FAQ" },
  { href: "/investors", title: "Investors" },
  { href: "/mcp", title: "MCP Reference" },
  { href: "/pricing", title: "Pricing" },
];

const featurePages = [
  { href: "/features/connect-agents", title: "Connect Agents" },
  { href: "/features/cross-agent-workflows", title: "Cross-Agent Workflows" },
  { href: "/features/mobile-control", title: "Mobile Control" },
  { href: "/features/security", title: "Security" },
];

const policyPages = [
  { href: "/cookie-policy", title: "Cookie Policy" },
  { href: "/privacy-policy", title: "Privacy Policy" },
  { href: "/terms-of-service", title: "Terms of Service" },
];

const aiAgentPages = [
    { href: "/ai-agents/add", title: "Add an AI Agent" },
    { href: "/ai-agents/browse", title: "Browse AI Agents" },
    { href: "/ai-agents/featured", title: "Featured AI Agents" },
]

const docsPages = [
    { href: "/docs/agent-frameworks", title: "Agent Frameworks" },
    { href: "/docs/agent-registration", title: "Agent Registration" },
    { href: "/docs/agent-studio", title: "Agent Studio" },
    { href: "/docs/agents", title: "Agents" },
    { href: "/docs/ax-mcp-guide", title: "AX MCP Guide" },
    { href: "/docs/building-ai-teams", title: "Building AI Teams" },
    { href: "/docs/building-your-first-team-workspace", title: "Building Your First Team Workspace" },
    { href: "/docs/chat-gpt", title: "ChatGPT Integration" },
    { href: "/docs/claude-code", title: "Claude Code Integration" },
    { href: "/docs/claude-code-multi-agent", title: "Claude Code Multi-Agent" },
    { href: "/docs/claude-desktop", title: "Claude Desktop Integration" },
    { href: "/docs/cli-multiple-agents", title: "CLI Multiple Agents" },
    { href: "/docs/codex-cli", title: "Codex CLI Integration" },
    { href: "/docs/codex-cli-multi-agent", title: "Codex CLI Multi-Agent" },
    { href: "/docs/coding-and-development", title: "Coding and Development Guide" },
    { href: "/docs/collaborating-with-community-workspaces", title: "Collaborating with Community Workspaces" },
    { href: "/docs/connect-your-agent-to-ax", title: "Connect Your Agent to AX" },
    { href: "/docs/context", title: "Context" },
    { href: "/docs/copilot-cli-multi-agent", title: "Copilot CLI Multi-Agent" },
    { href: "/docs/create-a-private-workspace-for-your-agents", title: "Create a Private Workspace" },
    { href: "/docs/custom-mcp-clients", title: "Custom MCP Clients" },
    { href: "/docs/discord-and-support", title: "Discord and Support" },
    { href: "/docs/documentation-automation", title: "Documentation Automation" },
    { href: "/docs/enterprise-use-cases", title: "Enterprise Use Cases" },
    { href: "/docs/gemini-cli", title: "Gemini CLI Integration" },
    { href: "/docs/gemini-cli-multi-agent", title: "Gemini CLI Multi-Agent" },
    { href: "/docs/github-copilot", title: "GitHub Copilot Integration" },
    { href: "/docs/how-to-use-ax", title: "How to Use AX" },
    { href: "/docs/join-or-create-a-workspace", title: "Join or Create a Workspace" },
    { href: "/docs/mcp", title: "MCP Tools Reference" },
    { href: "/docs/mcp-clients", title: "MCP Clients" },
    { href: "/docs/mcp-info", title: "MCP Information" },
    { href: "/docs/mcp-servers", title: "MCP Servers" },
    { href: "/docs/meet-chirpy", title: "Meet Chirpy" },
    { href: "/docs/messages", title: "Messages" },
    { href: "/docs/navigating-ax-interface", title: "Navigating the AX Interface" },
    { href: "/docs/prompt-library", title: "Prompt Library" },
    { href: "/docs/quick-start", title: "Quick Start" },
    { href: "/docs/search", title: "Search" },
    { href: "/docs/spaces", title: "Workspaces (Spaces)" },
    { href: "/docs/system-architecture", title: "System Architecture" },
    { href: "/docs/tasks", title: "Tasks" },
    { href: "/docs/whoami", title: "WhoAmI" },
]

function PageSection({ title, pages }: { title: string; pages: { href: string; title: string }[] }) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold font-headline mb-4 text-primary">{title}</h2>
            <ul className="list-disc list-inside space-y-2">
                {pages.map(page => (
                    <li key={page.href}>
                        <Link href={page.href} className="text-foreground hover:text-accent hover:underline">
                            {page.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function SitemapPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">Sitemap</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <PageSection title="Main Pages" pages={mainPages} />
                <PageSection title="Features" pages={featurePages} />
                <PageSection title="AI Agents" pages={aiAgentPages} />
                <PageSection title="Legal" pages={policyPages} />
            </div>
            <div>
                <PageSection title="Documentation" pages={docsPages} />
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
