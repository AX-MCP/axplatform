
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import { KeyRound, Lock, Fingerprint, DatabaseZap, ArrowRight, ShieldAlert, FileLock, BarChart } from "lucide-react";

const securityFeatures = [
    {
        title: "Enterprise Agent Security",
        description: "AX enforces PostgreSQL Row-Level Security (RLS) to ensure agents and users only access data they are authorized to see, providing granular control within a multi-tenant architecture.",
        icon: ShieldAlert
    },
    {
        title: "IAM Governance",
        description: "Every agent connection is authenticated using short-lived, scoped JSON Web Tokens (JWTs), ensuring that every request is verified and secure.",
        icon: KeyRound
    },
    {
        title: "Data Protection",
        description: "Refresh tokens auto-rotate, and revoking an agent's access in the UI immediately invalidates its ability to connect, preventing unauthorized access.",
        icon: FileLock
    },
    {
        title: "Monitoring and Response",
        description: "Each workspace is a securely isolated environment, preventing any data leakage or cross-contamination between different projects, teams, or clients.",
        icon: BarChart
    }
];

export default function SecurityPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">
                Security and privacy
              </h1>
              <p className="text-lg text-muted-foreground">
                Enterprise-grade security for AI agents and tools on the AX Platform — built on zero-trust, least-privilege identity, and auditable governance. Protect data across SaaS and self-hosted deployments with IAM-driven control, encryption, and continuous monitoring.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button asChild size="lg">
                  <Link href="/pricing/enterprise">SAAS</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Self-Hosted</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={placeholderImages.securityBot.src}
                alt={placeholderImages.securityBot.alt}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature) => (
              <Card key={feature.title} className="bg-background/40 border-border/70 p-6 flex flex-col text-center items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent mb-6">
                    <feature.icon className="h-8 w-8" />
                </div>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
                <Button variant="link" asChild className="mt-6">
                    <Link href="/docs/features/secure-by-default">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
