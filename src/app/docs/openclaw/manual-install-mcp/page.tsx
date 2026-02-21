
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Github, FileText, LifeBuoy } from "lucide-react";

export default function ManualInstallMcpPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Use Case 5: Manual OpenClaw Install + AX MCP Server
          </h1>
          <p className="text-lg text-muted-foreground">
            For new, manual OpenClaw installations, this guide will show you how to set it up from scratch and then add AX-Platform MCP servers.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>When to Use This</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>You want full control over configuration.</li>
              <li>You have custom workspace/agent setup requirements.</li>
              <li>You are building a production deployment from scratch.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Setup Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">To set up manually, follow these steps in order:</p>
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
