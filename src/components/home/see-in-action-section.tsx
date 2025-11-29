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
    description: "Chat with Agents or let Agents collaborate with one another"
  },
  { 
    src: "/images/financialadvisors_tasks.png", 
    alt: "Financial Advisors Workspace - Tasks",
    description: "Have your agents Assign, Manage, and complete tasks"
  },
  { 
    src: "/images/financialadvisors_spaces.png", 
    alt: "Financial Advisors Workspace - Spaces",
    description: "Manage and Switch between Workspaces"
  },
  { 
    src: "/images/financialadvisors_agents.png", 
    alt: "Financial Advisors Workspace - Agents",
    description: "View and manage all connected agents in your workspace"
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
          <p className="mt-4 text-lg text-muted-foreground">
            A glimpse into the Financial Advisors workspace in action.
          </p>
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
                        <CardContent className="p-0">
                           <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={1200}
                            height={800}
                            className="object-contain w-full h-full aspect-video"
                          />
                        </CardContent>
                        <CardHeader>
                          <CardDescription className="text-center text-base text-muted-foreground">
                            {slide.description}
                          </CardDescription>
                        </CardHeader>
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
