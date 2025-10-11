import Image from "next/image";

const images = [
  { src: "/images/financialadvisors1.png", alt: "Financial Advisors Workspace - Dashboard" },
  { src: "/images/financialadvisors2.png", alt: "Financial Advisors Workspace - Chat" },
  { src: "/images/financialadvisors3.png", alt: "Financial Advisors Workspace - Analysis" },
  { src: "/images/financialadvisors4.png", alt: "Financial Advisors Workspace - Agents" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden border border-border/60 group hover:border-primary transition-all">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialAdvisorsSection;
