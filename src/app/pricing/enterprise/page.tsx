"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check, Cloud, Server, SlidersHorizontal, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    priceMonthly: "$20",
    priceAnnually: "$20",
    executions: "2.5k",
    description: "Great for getting started and seeing the power of AX.",
    buttonText: "Start free trial",
    buttonHref: "https://paxai.app/register",
    buttonVariant: "default",
    hostedBy: "AX",
    featuresHeader: "This plan includes:",
    features: [
      "1 shared project",
      "5 concurrent executions",
      "Unlimited users",
      "Forum support",
    ],
  },
  {
    name: "Pro",
    priceMonthly: "$50",
    priceAnnually: "$50",
    executions: "10k",
    description: "For solo builders and small teams running workflows in production.",
    buttonText: "Start free trial",
    buttonHref: "https://paxai.app/register",
    buttonVariant: "default",
    hostedBy: "AX",
    featuresHeader: "Everything in Starter plan, plus:",
    features: [
      "3 shared projects",
      "20 concurrent executions",
      "7 days of insights",
      "Admin roles",
      "Global variables",
      "Workflow history",
      "Execution search",
    ],
  },
  {
    name: "Business",
    priceMonthly: "$667",
    priceAnnually: "$667",
    executions: "40k",
    description: "For companies with < 100 employees needing collaboration and scale.",
    buttonText: "Start free trial",
    buttonHref: "https://paxai.app/register",
    buttonVariant: "default",
    hostedBy: "Self-hosted",
    featuresHeader: "Everything in Pro plan, plus:",
    features: [
        "6 shared projects",
        "SSO, SAML and LDAP",
        "30 days of insights",
        "Different environments",
        "Scaling options",
        "Version control using Git",
        "Forum support"
    ],
  },
  {
    name: "Enterprise",
    price: "Contact us",
    executions: "Custom",
    description: "For organisations with strict compliance and governance needs.",
    buttonText: "Contact sales",
    buttonHref: "/contact",
    buttonVariant: "outline",
    hostedBy: "Both",
    featuresHeader: "Everything in Business plan, plus:",
    features: [
        "Unlimited shared projects",
        "200+ concurrent executions",
        "365 days of insights",
        "External secret store integration",
        "Log streaming",
        "Extended data retention",
        "Dedicated support with SLA",
        "Invoice billing"
    ],
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="container py-20 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Build as much as you want.</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Pay only when your workflows run.
        </p>
      </header>
        <div className="flex justify-center items-center gap-4 mb-12">
            <span className={cn("font-medium", !isAnnual && "text-primary")}>Monthly</span>
            <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            id="billing-cycle"
            />
            <span className={cn("font-medium", isAnnual && "text-primary")}>Annually</span>
            <Badge variant="secondary">Save 17%</Badge>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {tiers.map((tier) => (
          <Card key={tier.name} className={`flex flex-col h-full bg-card/50 border-border/60 ${tier.name === 'Pro' ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
            <CardHeader className="flex-grow-0">
              <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
              <CardDescription className="min-h-[40px]">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="mb-6">
                <p className="text-4xl font-bold">
                    {tier.price ? tier.price : (isAnnual ? tier.priceAnnually : tier.priceMonthly)}
                </p>
                {tier.price ? <p className="h-6">&nbsp;</p> :
                <p className="text-muted-foreground text-sm">
                    /mo, billed {isAnnual ? 'annually' : 'monthly'}
                </p>
                }
              </div>

                <div className="bg-background/40 border border-border/60 rounded-lg p-3 text-center mb-6">
                    {tier.name === 'Enterprise' ? (
                        <div className="flex items-center justify-center gap-4">
                            <SlidersHorizontal className="h-5 w-5 text-accent"/>
                            <p>Custom number of workflow executions</p>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between">
                            <p><span className="font-bold">{tier.executions}</span> workflow executions</p>
                            <ChevronDown className="h-4 w-4 text-muted-foreground"/>
                        </div>
                    )}
                </div>

              <Button asChild variant={tier.buttonVariant === 'outline' ? 'outline' : 'default'} className={cn("w-full mb-6", tier.buttonVariant !== 'outline' && 'bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent text-white')}>
                <Link href={tier.buttonHref}>{tier.buttonText}</Link>
              </Button>

              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
                {tier.hostedBy === 'AX' && <><Cloud className="h-4 w-4 text-accent" /> Hosted by AX</>}
                {tier.hostedBy === 'Self-hosted' && <><Server className="h-4 w-4 text-accent" /> Self-hosted</>}
                {tier.hostedBy === 'Both' && <>
                    <div className="flex items-center gap-2"><Cloud className="h-4 w-4 text-accent" /> Hosted by AX</div> or <div className="flex items-center gap-2"><Server className="h-4 w-4 text-accent" /> Self-hosted</div>
                </>}
              </div>

              <div className="space-y-4 text-sm flex-grow">
                {tier.featuresHeader && <p className="font-semibold text-foreground/90">{tier.featuresHeader}</p>}
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
