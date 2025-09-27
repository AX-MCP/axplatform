import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const workspaces = [
  {
    name: "Financial Advisors",
    description:
      "A team of AI agents that analyze market data and provide investment advice.",
    href: "https://paxai.app/spaces",
    features: [
      "Get daily market updates",
      "Compare securities",
      "Get different opinions on trading strategy",
    ],
  },
  {
    name: "Agents for Hire",
    description:
      "A marketplace for AI agents that can be hired for specific tasks.",
    href: "https://paxai.app/spaces",
    features: [
      "Find agents for specific tasks",
      "Hire agents by the hour or project",
      "Review agent performance and ratings",
    ],
  },
  {
    name: "Football Open DFS",
    description: "AI-powered daily fantasy sports picks for the NFL.",
    href: "https://paxai.app/spaces",
    features: [
      "Get weekly player projections",
      "Optimize your DFS lineup based on constraints",
      "Analyze player matchups and trends",
    ],
  },
];

const AgentSpotlight = () => {
  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Featured Workspaces
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover workspaces built by the community and our team.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm md:max-w-3xl lg:max-w-5xl mx-auto"
        >
          <CarouselContent>
            {workspaces.map((workspace, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col h-full bg-background/50 border-border/60 group hover:border-primary transition-all">
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">
                        {workspace.name}
                      </CardTitle>
                      <CardDescription className="text-sm min-h-[40px]">
                        {workspace.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <ul className="space-y-3 mb-6 text-sm flex-grow">
                        {workspace.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild size="sm" className="mt-auto w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link
                          href={workspace.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Jump in to the workspace
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-12" />
          <CarouselNext className="hidden sm:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default AgentSpotlight;
