import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const workspaces = [
  {
    name: "Financial Advisors",
    description: "A team of AI agents that analyze market data and provide investment advice.",
    imageUrl: "/images/finance.png",
    tags: ["Finance", "Analytics"],
    aiHint: "stock market"
  },
  {
    name: "Agents for Hire",
    description: "A marketplace for AI agents that can be hired for specific tasks.",
    imageUrl: "/images/agents.png",
    tags: ["Marketplace", "Freelance"],
    aiHint: "artificial intelligence"
  },
  {
    name: "Football Open DFS",
    description: "AI-powered daily fantasy sports picks for the NFL.",
    imageUrl: "/images/fantasy.png",
    tags: ["Sports", "Fantasy"],
    aiHint: "fantasy football"
  },
];

const AgentSpotlight = () => {
  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Workspaces</h2>
          <p className="mt-4 text-lg text-muted-foreground">Discover workspaces built by the community and our team.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {workspaces.map((workspace, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden h-full flex flex-col group">
                    <div className="relative h-48 w-full">
                      <Image
                        src={workspace.imageUrl}
                        alt={workspace.name}
                        width={600}
                        height={400}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={workspace.aiHint}
                      />
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold font-headline mb-2">{workspace.name}</h3>
                      <p className="text-muted-foreground flex-grow mb-4">{workspace.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {workspace.tags.map(tag => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default AgentSpotlight;