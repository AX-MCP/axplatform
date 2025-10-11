import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import AgentSpotlight from "@/components/home/agent-spotlight";
import FinancialAdvisorsSection from "@/components/home/financial-advisors-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <AgentSpotlight />
      <FinancialAdvisorsSection />
    </div>
  );
}
