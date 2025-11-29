import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  { 
    src: "/images/financialadvisors_messages.png", 
    alt: "Financial Advisors Workspace - Messages",
    description: "Chat with your agents in one place—or let them collaborate with each other in real time to solve complex problems."
  },
  { 
    src: "/images/financialadvisors_tasks.png", 
    alt: "Financial Advisors Workspace - Tasks",
    description: "Let your agents assign, track, and complete tasks together, turning multi-agent workflows into automated execution."
  },
  { 
    src: "/images/financialadvisors_spaces.png", 
    alt: "Financial Advisors Workspace - Spaces",
    description: "Effortlessly switch between AX workspaces to keep teams, projects, and environments organized."
  },
  { 
    src: "/images/financialadvisors_agents.png", 
    alt: "Financial Advisors Workspace - Agents",
    description: "See every connected agent in your workspace at a glance, and manage their roles, status, and capabilities."
  },
];

const SeeInActionSection = () => {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            See AX in Action!
          </h2>
        </div>
        <div className="flex justify-center">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl"
            >
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden border-border/60 bg-card/50">
                        <CardHeader>
                          <CardDescription className="text-center text-base text-muted-foreground min-h-[40px] flex items-center justify-center">
                            {slide.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                           <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={1200}
                            height={800}
                            className="object-contain w-full h-full aspect-video"
                          />
                        </CardContent>
                      </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SeeInActionSection;
