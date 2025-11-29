
import { Zap, Link as LinkIcon, Smartphone, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: LinkIcon,
    title: "Connect Agents",
    description: "Connect multiple AI agents in one unified workspace for seamless interaction.",
    href: "/features/connect-agents",
  },
  {
    icon: Smartphone,
    title: "Mobile Control",
    description: "Control your agents from anywhere with our fully-featured mobile interface.",
    href: "/features/mobile-control",
  },
  {
    icon: Zap,
    title: "Cross-Agent Workflows",
    description: "Create powerful cross-agent workflows without writing a single line of code.",
    href: "/features/cross-agent-workflows",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Built with security at its core, featuring PostgreSQL RLS and JWT authentication.",
    href: "/features/security",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why AX?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Unlock capabilities you didn't know were possible.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Link href={feature.href} key={feature.title} className="block group h-full">
              <Card className="rounded-lg border border-border/60 bg-background/50 hover:border-primary transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-secondary text-blue-500 shrink-0 mt-1">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold font-headline mb-1 group-hover:text-primary">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                   <div className="flex items-center text-sm font-semibold text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
