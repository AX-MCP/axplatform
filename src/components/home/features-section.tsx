import { Zap, Link as LinkIcon, Smartphone, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: LinkIcon,
    title: "Connect Agents",
    description: "Connect multiple AI agents in one unified workspace for seamless interaction.",
  },
  {
    icon: Smartphone,
    title: "Mobile Control",
    description: "Control your agents from anywhere with our fully-featured mobile interface.",
  },
  {
    icon: Zap,
    title: "Cross-Agent Workflows",
    description: "Create powerful cross-agent workflows without writing a single line of code.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    description: "Built with security at its core, featuring PostgreSQL RLS and JWT authentication.",
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
            <div key={feature.title} className="p-6 rounded-lg border border-border bg-card hover:border-accent transition-colors duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/10 text-accent mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
