
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
    <section className="py-24 bg-transparent relative">
      {/* Subtle glow behind features */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6 tracking-tight text-white">Why AX?</h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            Unlock capabilities you didn't know were possible with a platform built for the next generation of AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {features.map((feature, i) => (
            <Link
              href={feature.href}
              key={feature.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] ${i === 0 || i === 3 ? "md:col-span-2" : "md:col-span-1"
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-blue-400 ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold font-headline mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center text-sm font-semibold text-blue-400 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
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
