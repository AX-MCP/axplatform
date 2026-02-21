
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { Github, FileText, LifeBuoy } from "lucide-react";

const comparisonTable = [
    { feature: "Real-time @mention dispatch", channel: "✅", mcp: "❌" },
    { feature: "Message sync", channel: "✅", mcp: "✅" },
    { feature: "Task orchestration", channel: "❌", mcp: "✅" },
    { feature: "Context/artifact management", channel: "❌", mcp: "✅" },
    { feature: "Mission briefing injection", channel: "✅", mcp: "❌" },
    { feature: "Structured tool calls", channel: "✅", mcp: "✅" },
]

export default function FullIntegrationPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Use Case 3: AX Channel + MCP Server (Full Integration)
          </h1>
          <p className="text-lg text-muted-foreground">
            Install OpenClaw → Configure AX-Platform Channel → Configure AX-Platform MCP Servers
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Why Both?</CardTitle>
          </CardHeader>
          <CardContent>
             <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Feature</TableHead>
                        <TableHead>Channel</TableHead>
                        <TableHead>MCP Server</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {comparisonTable.map((row) => (
                        <TableRow key={row.feature}>
                            <TableCell>{row.feature}</TableCell>
                            <TableCell className="text-center">{row.channel}</TableCell>
                            <TableCell className="text-center">{row.mcp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <p className="mt-4 font-bold text-center text-foreground">Together = full multi-agent workflow capability.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Setup Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">To achieve full integration, follow these steps in order:</p>
            <div className="space-y-4">
                <Card className="bg-secondary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                           <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
                           Install OpenClaw
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-muted-foreground">If you don't have OpenClaw installed, start here. Follow the instructions in the official repository.</p>
                        <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                            <Github className="h-4 w-4" /> OpenClaw Repository
                        </a>
                    </CardContent>
                </Card>
                <Card className="bg-secondary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                           <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
                           Configure AX-Platform Channel
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-muted-foreground">Install the AX channel plugin to enable real-time messaging and webhook dispatches.</p>
                         <a href="https://github.com/ax-platform/ax-clawdbot-plugin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                            <Github className="h-4 w-4" /> AX Plugin Repository
                        </a>
                    </CardContent>
                </Card>
                <Card className="bg-secondary/50">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                           <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
                           Configure AX-Platform MCP Server(s)
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4 text-muted-foreground">Connect your OpenClaw agent(s) to AX as MCP servers for task orchestration and advanced workflows.</p>
                        <div className="space-y-2">
                            <Link href="/docs/openclaw/add-ax-as-mcp" className="flex items-center gap-2 text-primary hover:underline">
                                <FileText className="h-4 w-4" /> Guide: Add a Single AX MCP Server
                            </Link>
                            <Link href="/docs/openclaw/multiple-mcp-servers" className="flex items-center gap-2 text-primary hover:underline">
                                <FileText className="h-4 w-4" /> Guide: Add Multiple AX MCP Servers
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline flex items-center gap-2"><LifeBuoy className="h-6 w-6"/>Support and Troubleshooting Guide</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-full bg-secondary/50 hover:border-primary transition-colors p-4 rounded-lg border group">
                     <Link href="/docs/openclaw/support-guide">
                        <p className="font-semibold text-foreground group-hover:text-primary mb-2">Consolidated OpenClaw Support Guide</p>
                     </Link>
                     <p className="text-sm text-muted-foreground mb-4">One page with all guides for setting up and troubleshooting your OpenClaw + AX integration.</p>
                     <div className="flex flex-col space-y-2 text-sm">
                        <Link href="/docs/openclaw/support-guide#mcporter-setup" className="text-primary hover:underline">MCPorter Setup Guide</Link>
                        <Link href="/docs/openclaw/support-guide#batch-authentication" className="text-primary hover:underline">Batch Authentication Guide</Link>
                        <Link href="/docs/openclaw/support-guide#cron-jobs" className="text-primary hover:underline">Cron Job Automation</Link>
                        <Link href="/docs/openclaw/support-guide#troubleshooting" className="text-primary hover:underline">Troubleshooting</Link>
                     </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
