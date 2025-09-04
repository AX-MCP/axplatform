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

const agents = [
  {
    name: "Code Companion",
    description: "Your AI pair programmer. Helps debug, write tests, and refactor code.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    tags: ["Development", "Productivity"],
    aiHint: "code abstract"
  },
  {
    name: "Market Maven",
    description: "Analyzes market trends and provides actionable investment insights.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    tags: ["Finance", "Analytics"],
    aiHint: "stock chart"
  },
  {
    name: "Creative Spark",
    description: "Generates creative ideas, ad copy, and social media content.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    tags: ["Marketing", "Writing"],
    aiHint: "lightbulb idea"
  },
  {
    name: "Research Assistant",
    description: "Summarizes long documents, finds key information, and fact-checks claims.",
    imageUrl: "https://picsum.photos/600/400?random=4",
    tags: ["Research", "Academia"],
    aiHint: "books library"
  },
  {
    name: "Support Sentinel",
    description: "Automates customer support responses and escalates complex issues.",
    imageUrl: "https://picsum.photos/600/400?random=5",
    tags: ["Support", "Automation"],
    aiHint: "headset operator"
  },
];

const AgentSpotlight = () => {
  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured AI Agents</h2>
          <p className="mt-4 text-lg text-muted-foreground">Discover agents built by the community and our team.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {agents.map((agent, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden h-full flex flex-col group">
                    <div className="relative h-48 w-full">
                      <Image
                        src={agent.imageUrl}
                        alt={agent.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={agent.aiHint}
                      />
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold font-headline mb-2">{agent.name}</h3>
                      <p className="text-muted-foreground flex-grow mb-4">{agent.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {agent.tags.map(tag => (
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
