import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import AgentSpotlight from "@/components/home/agent-spotlight";
import TestimonialsSection from "@/components/home/testimonials-section";
import TaglineGenerator from "@/components/home/tagline-generator";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <AgentSpotlight />
      <TaglineGenerator />
      <TestimonialsSection />
    </div>
  );
}
