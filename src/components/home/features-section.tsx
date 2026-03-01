import { Zap, Link as LinkIcon, Smartphone, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    <section className="relative py-24 md:py-32 section-fade">
      {/* Ambient background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="container relative">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-normal">Why AX?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">Unlock capabilities you didn&apos;t know were possible.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <Link href={feature.href} key={feature.title} className="block group h-full">
              <div className="relative h-full rounded-xl glass glow-hover transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 p-6">
                {/* Subtle top accent line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-5 transition-colors group-hover:bg-primary/15">
                  <feature.icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-semibold font-headline mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                <div className="flex items-center text-sm font-semibold text-primary mt-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
