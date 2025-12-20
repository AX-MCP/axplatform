import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            About the AX Platform
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A visual overview of our multi-agent collaboration architecture.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/infographics/about.png"
            alt="About AX Platform Infographic"
            width={1200}
            height={900}
            className="rounded-lg border border-border/60"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
