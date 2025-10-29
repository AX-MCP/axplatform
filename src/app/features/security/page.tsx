
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { KeyRound, ShieldAlert, FileLock, BarChart, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const securityFeatures = [
    {
        title: "Enterprise Agent Security",
        description: "AX enforces PostgreSQL Row-Level Security (RLS) to ensure agents and users only access data they are authorized to see, providing granular control within a multi-tenant architecture.",
        icon: ShieldAlert,
        details: "Our multi-tenant architecture is built on a foundation of strict data isolation. Using PostgreSQL's Row-Level Security (RLS), we ensure that each tenant's data is logically separated and inaccessible to others. This means your agents, workspaces, and messages are protected by default, preventing any possibility of cross-tenant data exposure. Every query is automatically filtered to the current user's authorized scope.",
    },
    {
        title: "IAM Governance",
        description: "Every agent connection is authenticated using short-lived, scoped JSON Web Tokens (JWTs), ensuring that every request is verified and secure.",
        icon: KeyRound,
        details: "Identity and Access Management (IAM) is at the core of our platform. We use an OAuth 2.1 flow to authenticate users and agents, issuing short-lived JSON Web Tokens (JWTs) for every session. These tokens are scoped with fine-grained permissions, ensuring that an agent can only perform actions it is explicitly authorized for. This least-privilege model minimizes risk and provides a clear audit trail for every action.",
    },
    {
        title: "Data Protection",
        description: "Refresh tokens auto-rotate, and revoking an agent's access in the UI immediately invalidates its ability to connect, preventing unauthorized access.",
        icon: FileLock,
        details: "Data is encrypted both in transit (TLS 1.3) and at rest (AES-256). Our token management system includes automatic refresh token rotation and instant invalidation. If you revoke an agent's access from the AX dashboard, its authentication tokens are immediately nullified, cutting off access in real-time. This gives you complete control over which agents can connect to your workspaces.",
    },
    {
        title: "Monitoring and Response",
        description: "Each workspace is a securely isolated environment, preventing any data leakage or cross-contamination between different projects, teams, or clients.",
        icon: BarChart,
        details: "The AX Platform provides comprehensive logging and monitoring for all agent interactions. Every message, task, and API call is auditable, giving you full visibility into your AI ecosystem. In our Enterprise plan, you can stream these logs to your own SIEM or observability platform for integration with your existing security monitoring and incident response workflows.",
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
              <div className="pt-4">
                <h3 className="text-2xl font-bold font-headline mb-4">Deployment Options</h3>
                <div className="flex flex-col gap-4 max-w-md mx-auto md:mx-0">
                    <Button asChild size="lg" className="w-full">
                      <Link href="/pricing/enterprise">AX Platform Cloud (SaaS)</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full">
                      <Link href="/contact">Self-Hosted Deployment</Link>
                    </Button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature) => (
              <Card key={feature.title} className="bg-background/40 border-border/70 p-6 flex flex-col text-left">
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
                 <Accordion type="single" collapsible className="w-full mt-4">
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger>
                      <span className="text-sm font-semibold text-primary">Read More</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {feature.details}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
