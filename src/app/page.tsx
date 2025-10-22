import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import FinancialAdvisorsSection from "@/components/home/financial-advisors-section";
import ResourcesSection from "@/components/home/resources-section";
import MonitorAgentSection from "@/components/home/monitor-agent-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ResourcesSection />
      <FeaturesSection />
      <FinancialAdvisorsSection />
      <MonitorAgentSection />
    </div>
  );
}
