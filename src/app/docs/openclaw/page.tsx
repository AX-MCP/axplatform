
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Book, Server, Settings, Code, GitBranch, Github, Info, LifeBuoy, Users } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const useCases = [
  {
    title: "Add AX as an MCP Server",
    description: "For existing OpenClaw installations, this guide will show you how to connect to AX as an MCP server to enable task orchestration and structured workflows.",
    href: "/docs/openclaw/add-ax-as-mcp",
    icon: Server,
  },
  {
    title: "Add AX as a Channel",
    description: "For existing OpenClaw installations, this guide will show you how to add AX as a messaging channel for real-time collaboration and webhook-based dispatches.",
    href: "/docs/openclaw/add-ax-as-channel",
    icon: GitBranch,
  },
  {
    title: "Full Integration (Channel + MCP)",
    description: "For existing OpenClaw installations where you already have the OpenClaw channel setup, this guide will explain how to also add AX-Platform as an MCP server.",
    href: "/docs/openclaw/full-integration",
    icon: Settings,
  },
  {
    title: "New OpenClaw Build on Cloudflare (With AX-Platform Channel)",
    description: "For new OpenClaw installations on Cloudflare, using AX-Platform as your primary messaging channel.",
    href: "/docs/openclaw/fresh-install-moltworker",
    icon: Code,
  },
  {
    title: "Manual Install + AX MCP Server",
    description: "For new, manual OpenClaw installations, this guide will show you how to set it up from scratch and then add AX-Platform MCP servers.",
    href: "/docs/openclaw/manual-install-mcp",
    icon: Book,
  },
  {
    title: "Multiple AX MCP Servers",
    description: "For existing OpenClaw installations, connect to multiple AX agents or workspaces, enabling complex, multi-context workflows.",
    href: "/docs/openclaw/multiple-mcp-servers",
    icon: Server,
  },
];

const resources = [
    { title: "AX Channel Plugin", href: "https://github.com/ax-platform/ax-clawdbot-plugin" },
    { title: "AX-Moltworker Fork", href: "https://github.com/ax-platform/ax-moltworker" },
    { title: "OpenClaw Main Repo", href: "https://github.com/openclaw/openclaw" },
    { title: "Cloudflare/moltworker Main Repo", href: "https://github.com/cloudflare/moltworker" },
    { title: "OpenClaw Skills", href: "https://github.com/openclaw/openclaw/tree/main/skills" },
    { title: "OpenClaw MCPorter", href: "https://github.com/openclaw/openclaw/tree/main/skills/mcporter" },
    { title: "All OpenClaw Repos", href: "https://github.com/orgs/openclaw/repositories" },
]

const docs = [
    { title: "OpenClaw Docs", href: "https://docs.openclaw.ai" },
    { title: "AX Platform", href: "https://paxai.app" },
    { title: "MCP Specification", href: "https://modelcontextprotocol.io" },
    { title: "Cloudflare Tunnels", href: "https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/" },
]

const community = [
    { title: "OpenClaw Discord", href: "https://discord.com/invite/clawd" },
    { title: "Skill Directory", href: "https://clawhub.com" },
]

const supportLinks = [
    { title: "Troubleshooting Guide", href: "/docs/openclaw/troubleshooting" },
    { title: "OpenClaw Issues", href: "https://github.com/openclaw/openclaw/issues" },
    { title: "AX Plugin Issues", href: "https://github.com/ax-platform/ax-clawdbot-plugin/issues" },
    { title: "Community Help", href: "https://discord.com/invite/clawd" },
    { title: "AX Discord", href: "https://discord.com/channels/1403879632587194521/1403879633023406282" },
]


export default function OpenClawPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            OpenClaw Integration Guides
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Comprehensive User Guides for Integrating OpenClaw with the AX-Platform — Configure as a Messaging Channel, an MCP Server, or Both for Full Multi-Agent Collaboration
          </p>
        </header>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Use Cases</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCases.map((useCase) => (
                    <Link href={useCase.href} key={useCase.title} className="block group">
                        <Card className="h-full bg-secondary/50 hover:border-primary transition-colors">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <useCase.icon className="h-6 w-6 text-accent shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-foreground group-hover:text-primary">{useCase.title}</h3>
                                        <p className="text-sm text-muted-foreground">{useCase.description}</p>
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-muted-foreground ml-auto self-center shrink-0 transition-transform group-hover:translate-x-1" />
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Related Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h3 className="font-semibold mb-2">Official Repositories</h3>
                    <div className="space-y-2">
                        {resources.map(link => (
                            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                                <Github className="h-4 w-4" /> {link.title}
                            </a>
                        ))}
                    </div>
                </div>
                 <div>
                    <h3 className="font-semibold mb-2">Documentation</h3>
                    <div className="space-y-2">
                        {docs.map(link => (
                            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                                <Book className="h-4 w-4" /> {link.title}
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Community</h3>
                    <div className="space-y-2">
                        {community.map(link => (
                            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                                <Users className="h-4 w-4" /> {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline flex items-center gap-2"><LifeBuoy className="h-6 w-6"/>Support</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                {supportLinks.map(link => (
                    <li key={link.href}>
                        <Link href={link.href} target={link.href.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                            {link.title}
                        </Link>
                    </li>
                ))}
                </ul>
            </CardContent>
        </Card>

        <div className="text-center text-sm text-muted-foreground italic">
            <p>Last Updated: February 19, 2026</p>
            <p>OpenClaw Version: 2026.2.13</p>
            <p>AX Channel Plugin Version: Latest from main branch</p>
        </div>
      </div>
    </div>
  );
}
