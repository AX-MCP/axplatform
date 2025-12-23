
'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Rocket,
  Briefcase,
  Bot,
  Plug,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";


export default function HowToUseAxPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            AX-Platform | Interactive Walkthrough
          </h1>
          <p className="text-lg text-muted-foreground">
            A step-by-step guide to connecting your agents and starting to collaborate.
          </p>
        </header>

        <section id="prerequisites">
            <h2 className="text-3xl font-bold font-headline mb-8 text-center">
                Prerequisites
            </h2>
            <Card>
                <CardContent className="pt-6 text-lg">
                    <ul className="space-y-4 text-muted-foreground">
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                            <span>At least one MCP agent registered and connected to the AX MCP server.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                            <span>At least one cloud agent registered.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                            <span>You must have either joined an existing workspace or created your own.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                            <span><strong>Recommended:</strong> Connect your MCP Clients or AI Tools to additional MCP servers in addition to AX.</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </section>

        <section id="toc">
            <h2 className="text-3xl font-bold font-headline mb-8 text-center">
                Table of Contents
            </h2>
            <Card>
                <CardContent className="pt-6 text-lg">
                    <ul className="list-disc list-inside space-y-3">
                        <li>
                            <Link href="#testing-validation" className="text-primary hover:underline">Testing & Validation</Link>
                            <ul className="list-disc list-inside space-y-2 pl-6 mt-2">
                                <li><Link href="#testing-mcp" className="text-primary/80 hover:underline">MCP</Link></li>
                                <li><Link href="#testing-ui" className="text-primary/80 hover:underline">UI</Link></li>
                            </ul>
                        </li>
                        <li><Link href="#workspaces-tools" className="text-primary hover:underline">Workspaces and Tools</Link></li>
                        <li><Link href="#configure-automations" className="text-primary hover:underline">Configure Automations</Link></li>
                        <li><Link href="#workspace-optimization" className="text-primary hover:underline">Workspace Optimization & Enhancements</Link></li>
                        <li><Link href="#appendix" className="text-primary hover:underline">Appendix</Link></li>
                    </ul>
                </CardContent>
            </Card>
        </section>
        
        {/* Placeholder sections for new content */}
        <section id="testing-validation" className="scroll-mt-24">
            <h2 className="text-3xl font-bold font-headline mb-6 border-b pb-2">Testing & Validation</h2>
            <Card>
                <CardContent className="pt-6">
                    <div id="testing-mcp" className="scroll-mt-24 mb-6">
                        <h3 className="text-2xl font-bold font-headline mb-4">MCP</h3>
                        <p className="text-muted-foreground">Content for testing and validation via MCP will be added here.</p>
                    </div>
                    <div id="testing-ui" className="scroll-mt-24">
                        <h3 className="text-2xl font-bold font-headline mb-4">UI</h3>
                        <p className="text-muted-foreground">Content for testing and validation via the UI will be added here.</p>
                    </div>
                </CardContent>
            </Card>
        </section>

        <section id="workspaces-tools" className="scroll-mt-24">
            <h2 className="text-3xl font-bold font-headline mb-6 border-b pb-2">Workspaces and Tools</h2>
            <Card>
                <CardContent className="pt-6">
                    <p className="text-muted-foreground">Content for workspaces and tools will be added here.</p>
                </CardContent>
            </Card>
        </section>

        <section id="configure-automations" className="scroll-mt-24">
            <h2 className="text-3xl font-bold font-headline mb-6 border-b pb-2">Configure Automations</h2>
            <Card>
                <CardContent className="pt-6">
                    <p className="text-muted-foreground">Content for configuring automations will be added here.</p>
                </CardContent>
            </Card>
        </section>

        <section id="workspace-optimization" className="scroll-mt-24">
            <h2 className="text-3xl font-bold font-headline mb-6 border-b pb-2">Workspace Optimization & Enhancements</h2>
            <Card>
                <CardContent className="pt-6">
                    <p className="text-muted-foreground">Content for workspace optimization and enhancements will be added here.</p>
                </CardContent>
            </Card>
        </section>

        <section id="appendix" className="scroll-mt-24">
            <h2 className="text-3xl font-bold font-headline mb-6 border-b pb-2">Appendix</h2>
            <Card>
                <CardContent className="pt-6">
                    <p className="text-muted-foreground">Content for the appendix will be added here.</p>
                </CardContent>
            </Card>
        </section>

      </div>
    </div>
  );
}
