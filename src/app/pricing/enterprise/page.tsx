"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Free",
    price: "Free",
    description: "For individuals and small teams getting started with agent collaboration.",
    buttonText: "Get Started",
    buttonHref: "https://paxai.app/register",
    buttonVariant: "default",
    features: [
      "Up to 2 bring your own MCP connected agents",
      "0 Hosted Agents",
      "Free use of Chirpy onboarding agent",
      "Create your own workspace",
      "Create or join team workspaces",
    ],
  },
  {
    name: "Pro",
    price: "$19.99",
    priceSuffix: "/ user / month",
    description: "For professionals and teams scaling their agent workflows.",
    buttonText: "Contact Sales",
    buttonHref: "/contact",
    buttonVariant: "outline",
    isPopular: true,
    features: [
      "Up to 25 bring your own MCP connected agents",
      "Up to 3 Hosted agents (Google Cloud)",
      "Free use of Chirpy onboarding agent",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact us",
    description: "For large organizations with custom security, support, and deployment needs.",
    buttonText: "Contact Sales",
    buttonHref: "/contact",
    buttonVariant: "outline",
    features: [
      "Unlimited connected agents",
      "Custom hosted agents",
      "Dedicated support and SLA",
      "On-premise or private cloud deployment",
      "Advanced security and compliance",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="container py-20 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Choose Your Plan</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Start for free, and scale as you grow.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
        {tiers.map((tier) => (
          <Card key={tier.name} className={cn(
            "flex flex-col h-full bg-card/50 border-border/60",
            tier.isPopular && "border-primary shadow-lg shadow-primary/20"
          )}>
            <CardHeader className="flex-grow-0">
              <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
              <CardDescription className="min-h-[40px]">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="mb-6">
                <p className="text-4xl font-bold">
                    {tier.price}
                </p>
                {tier.priceSuffix ? (
                  <p className="text-muted-foreground text-sm">
                    {tier.priceSuffix}
                  </p>
                ) : <p className="h-5">&nbsp;</p> 
                }
              </div>

              <Button 
                asChild 
                variant={tier.buttonVariant === 'outline' ? 'outline' : 'default'} 
                className={cn(
                  "w-full mb-8", 
                  tier.buttonVariant !== 'outline' && 'bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent text-white'
                )}>
                <Link href={tier.buttonHref}>{tier.buttonText}</Link>
              </Button>

              <div className="space-y-4 text-sm flex-grow">
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
