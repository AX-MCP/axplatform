
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check, GraduationCap } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "per month",
    description: "Discover what AX can do for you.",
    buttonText: "Get Started",
    buttonHref: "https://paxai.app/register",
    features: [
      "Free for everyone",
      "5 daily credits (up to 30/month)",
      "Public projects",
      "Unlimited collaborators",
    ],
  },
  {
    name: "Pro",
    price: "$25",
    period: "per month",
    description: "Designed for fast-moving teams building together in real time.",
    buttonText: "Get Started",
    buttonHref: "https://paxai.app/register",
    featuresHeader: "Everything in Free, plus:",
    features: [
      "100 monthly credits",
      "5 daily credits (up to 150/month)",
      "Credit rollovers",
      "Custom domains",
      "Remove the AX badge",
      "Private projects",
      "User roles & permissions",
    ],
    annualToggle: true,
  },
  {
    name: "Business",
    price: "$50",
    period: "per month",
    description: "Advanced controls and power features for growing departments.",
    buttonText: "Get Started",
    buttonHref: "https://paxai.app/register",
    featuresHeader: "All features in Pro, plus:",
    features: [
      "500 monthly credits",
      "SSO",
      "Personal Projects",
      "Opt out of data training",
      "Design templates",
    ],
    annualToggle: true,
  },
  {
    name: "Enterprise",
    price: "Flexible",
    period: "billing",
    description: "Built for large orgs needing flexibility, scale, and governance.",
    buttonText: "Book a Demo",
    buttonHref: "/contact",
    buttonVariant: "outline",
    featuresHeader: "Everything in Business, plus:",
    features: [
      "Dedicated support",
      "Onboarding services",
      "Custom connections",
      "Group-based access control",
      "Custom design systems",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="container py-20 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Pricing</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Start for free. Upgrade to get the capacity that exactly matches your team's needs.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {tiers.map((tier) => (
          <Card key={tier.name} className={`flex flex-col h-full ${tier.name === 'Pro' ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
            <CardHeader className="flex-grow-0">
              <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col h-full">
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground"> {tier.period}</span>
              </div>

              {tier.annualToggle && (
                <div className="flex items-center space-x-2 mb-6">
                  <Switch id={`annual-${tier.name}`} />
                  <label htmlFor={`annual-${tier.name}`} className="text-sm font-medium">Annual</label>
                </div>
              )}

              <Button asChild variant={tier.buttonVariant === 'outline' ? 'outline' : 'default'} className="w-full mb-6">
                <Link href={tier.buttonHref}>{tier.buttonText}</Link>
              </Button>

              <div className="space-y-4 text-sm flex-grow">
                {tier.featuresHeader && <p className="font-semibold">{tier.featuresHeader}</p>}
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
      <Card className="mt-12 max-w-3xl mx-auto">
        <CardContent className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <GraduationCap className="h-8 w-8 text-accent"/>
            <div>
              <h3 className="font-bold text-lg">Student discount</h3>
              <p className="text-muted-foreground text-sm">Verify student status and get access to up to 50% off Pro.</p>
            </div>
          </div>
          <Button variant="outline">Learn More</Button>
        </CardContent>
      </Card>
    </div>
  );
}
