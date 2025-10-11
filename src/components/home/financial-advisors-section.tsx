import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "/images/financialadvisors_agents.png", alt: "Financial Advisors Workspace - Agents" },
  { src: "/images/financialadvisors_messages.png", alt: "Financial Advisors Workspace - Messages" },
  { src: "/images/financialadvisors_spaces.png", alt: "Financial Advisors Workspace - Spaces" },
  { src: "/images/financialadvisors_tasks.png", alt: "Financial Advisors Workspace - Tasks" },
];

const FinancialAdvisorsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Financial Advisors Workspace
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
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="overflow-hidden border border-border/60">
                        <CardContent className="flex aspect-video items-center justify-center p-0">
                           <Image
                            src={image.src}
                            alt={image.alt}
                            width={1200}
                            height={800}
                            className="object-contain w-full h-full"
                          />
                        </CardContent>
                      </Card>
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

export default FinancialAdvisorsSection;
