"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyRound, ShieldAlert, FileLock, BarChart, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const securityFeatures = [
    {
        title: "Enterprise Agent Security",
        description: "Security must start at the agent level, not just the infrastructure. Organizations should treat every agent as an independent identity and secure it like any service account or workload.",
        icon: ShieldAlert,
        details: "<ul><li class='list-disc ml-4 mb-2'><strong>Zero-trust by design</strong> – Never assume trust based on origin. Agents should authenticate with short-lived, purpose-bound credentials and operate in isolated contexts.</li><li class='list-disc ml-4 mb-2'><strong>Least privilege & containment</strong> – Limit what each agent can see and do; scope access to only the datasets, tools, and environments required for its task.</li><li class='list-disc ml-4 mb-2'><strong>Code and image attestation</strong> – Sign and verify agent code or container images before deployment; maintain a version registry for auditability.</li><li class='list-disc ml-4 mb-2'><strong>Transparent execution</strong> – Log every action, prompt, and tool invocation to create a verifiable record of agent behavior.</li></ul>",
    },
    {
        title: "IAM Governance",
        description: "Strong identity and access management ensures agents act under controlled, auditable policies.",
        icon: KeyRound,
        details: "<ul><li class='list-disc ml-4 mb-2'><strong>Unified identity system</strong> – Treat agents as first-class identities in your IAM directory; assign roles, attributes, and ownership.</li><li class='list-disc ml-4 mb-2'><strong>Fine-grained authorization</strong> – Use a mix of RBAC (for broad roles) and ABAC (for contextual conditions like data type, time, or location).</li><li class='list-disc ml-4 mb-2'><strong>Scoped credentials</strong> – Issue short-lived tokens that include explicit audiences (tools, APIs, datasets) and revoke automatically after expiration.</li><li class='list-disc ml-4 mb-2'><strong>Centralized policy enforcement</strong> – Evaluate all agent actions through a policy engine (e.g., OPA/Rego) before granting access to tools or data.</li><li class='list-disc ml-4 mb-2'><strong>Human oversight</strong> – Require step-up approval or MFA for high-impact actions such as remote control or data export.</li></ul>",
    },
    {
        title: "Data Protection",
        description: "AI agents frequently handle sensitive content; protecting that data end-to-end is essential.",
        icon: FileLock,
        details: "<ul><li class='list-disc ml-4 mb-2'><strong>Isolate agent workspaces</strong> – Use row-level or namespace-level separation to prevent data crossover between tenants, projects, or customers.</li><li class='list-disc ml-4 mb-2'><strong>Encrypt everywhere</strong> – Apply TLS for all communications and encrypt storage with per-tenant or per-agent keys.</li><li class='list-disc ml-4 mb-2'><strong>Data minimization</strong> – Provide agents only the specific records or fields needed; redact or tokenize sensitive content before exposure.</li><li class='list-disc ml-4 mb-2'><strong>Monitor data egress</strong> – Inspect outputs for PII, PHI, or confidential information before they leave your network.</li><li class='list-disc ml-4 mb-2'><strong>Audit provenance</strong> – Digitally sign logs and artifacts so every decision can be traced back to its source agent and dataset.</li></ul>",
    },
    {
        title: "Monitoring and Response",
        description: "Continuous observability and response controls are critical to maintain trust in autonomous systems.",
        icon: BarChart,
        details: "<ul><li class='list-disc ml-4 mb-2'><strong>Comprehensive audit logs</strong> – Capture every message, API call, and tool execution; link logs to specific agent identities and purposes.</li><li class='list-disc ml-4 mb-2'><strong>Behavioral baselining</strong> – Monitor agents for abnormal actions (e.g., unusual data queries, external uploads, or excessive tool calls).</li><li class='list-disc ml-4 mb-2'><strong>Incident containment</strong> – Implement kill switches to suspend agents or revoke credentials instantly when suspicious activity occurs.</li><li class='list-disc ml-4 mb-2'><strong>Change management & reviews</strong> – Track all configuration and policy updates to ensure authorized, traceable changes.</li></ul>",
    }
];

export default function SecurityPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">
                Security and privacy
              </h1>
              <p className="text-lg text-muted-foreground">
                Security in AX begins at the agent level, enforcing least-privilege access, scoped permissions, and audited tool interactions. The AX Platform extends this protection with enterprise-grade identity management, encrypted data isolation, and continuous monitoring across both SaaS and self-hosted deployments.
              </p>
              <div className="pt-4 space-y-4">
                 <Button asChild size="lg" className="w-full max-w-md mx-auto md:mx-0">
                  <Link href="/whitepapers/securing-ai-agent-ecosystem">
                    <Download className="mr-2 h-5 w-5" />
                    Download Technical Whitepaper
                  </Link>
                </Button>
                <div>
                    <h3 className="text-2xl font-bold font-headline mb-4">Deployment Options</h3>
                    <div className="flex flex-col gap-4 max-w-md mx-auto md:mx-0">
                        <Button asChild size="lg" className="w-full">
                          <Link href="/pricing/saas">AX Platform Cloud (SaaS)</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full">
                          <Link href="/pricing/self-hosted">Self-Hosted Deployment</Link>
                        </Button>
                    </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/security.png"
                alt="A symbolic image representing AI security, like a shield with a circuit board pattern."
                width={500}
                height={500}
                data-ai-hint="robot security"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-card/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              AI Agent Security
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              A deep dive into the core components of our security model.
            </p>
          </div>
          <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature) => (
              <AccordionItem value={feature.title} key={feature.title} className="bg-background/40 border-border/70 p-6 flex flex-col text-left rounded-lg">
                <Card className="bg-transparent border-0 shadow-none">
                  <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/10 text-accent shrink-0">
                          <feature.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                          <CardHeader className="p-0 mb-2">
                              <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-0">
                              <p className="text-muted-foreground">{feature.description}</p>
                          </CardContent>
                      </div>
                  </div>
                </Card>
                <AccordionTrigger>
                  <span className="text-sm font-semibold text-primary">Read More</span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: feature.details }}/>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
