import Image from "next/image";
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
    description: "Chat with your agents in one place — or let them collaborate with each other in real time to solve complex problems."
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
    <section className="relative py-24 md:py-32 section-fade overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-[400px] w-[800px] rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="container relative">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Live Demo</p>
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-normal">
            See AX in Action
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
                  <div className="rounded-2xl glass glow overflow-hidden">
                    <div className="p-5 pb-4">
                      <p className="text-center text-base text-muted-foreground leading-relaxed min-h-[48px] flex items-center justify-center">
                        {slide.description}
                      </p>
                    </div>
                    <div className="px-3 pb-3">
                      <div className="rounded-xl overflow-hidden border border-border/20">
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          width={1200}
                          height={800}
                          className="object-contain w-full h-full aspect-video"
                        />
                      </div>
                    </div>
                  </div>
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
