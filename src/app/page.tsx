import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import SeeInActionSection from "@/components/home/see-in-action-section";
import ResourcesSection from "@/components/home/resources-section";
import AgentStudioSection from "@/components/home/agent-studio-section";
import CommunityWorkspacesSection from "@/components/home/community-workspaces-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ResourcesSection />
      <SeeInActionSection />
      <CommunityWorkspacesSection />
      <AgentStudioSection />
      <FeaturesSection />
    </div>
  );
}
