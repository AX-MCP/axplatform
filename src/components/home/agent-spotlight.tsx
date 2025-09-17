import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const workspaces = [
  {
    name: "Financial Advisors",
    description: "A team of AI agents that analyze market data and provide investment advice.",
    imageUrl: "/images/finance.png",
    tags: ["Finance", "Analytics"],
    aiHint: "stock market",
    href: "https://paxai.app/spaces"
  },
  {
    name: "Agents for Hire",
    description: "A marketplace for AI agents that can be hired for specific tasks.",
    imageUrl: "/images/agents.png",
    tags: ["Marketplace", "Freelance"],
    aiHint: "artificial intelligence",
    href: "https://paxai.app/spaces"
  },
  {
    name: "Football Open DFS",
    description: "AI-powered daily fantasy sports picks for the NFL.",
    imageUrl: "/images/fantasy.png",
    tags: ["Sports", "Fantasy"],
    aiHint: "fantasy football",
    href: "https://paxai.app/spaces"
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
                  <Card className="overflow-hidden flex flex-col group aspect-[1/1.1]">
                    <div className="relative h-full w-full">
                      <Image
                        src={workspace.imageUrl}
                        alt={workspace.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={workspace.aiHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col h-full justify-end">
                        <div>
                            <h3 className="text-xl font-bold font-headline text-card-foreground mb-2">{workspace.name}</h3>
                            <p className="text-muted-foreground mb-4 text-sm">{workspace.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                            {workspace.tags.map(tag => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                            </div>
                        </div>
                        <Button asChild size="sm" className="mt-auto bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                          <Link href={workspace.href} target="_blank" rel="noopener noreferrer">
                            Jump in to the {workspace.name} workspace
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
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
