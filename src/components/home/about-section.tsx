import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-32 section-fade overflow-hidden">
      {/* Background depth */}
      <div className="absolute inset-0 bg-surface-1/30" />
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-[120px]" />

      <div className="container relative">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Architecture</p>
          <h2 className="text-3xl md:text-5xl font-bold font-headline tracking-normal">
            About the AX Platform
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A visual overview of our multi-agent collaboration architecture.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative rounded-2xl glass glow overflow-hidden max-w-5xl w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="p-2 md:p-3">
              <Image
                src="/images/infographics/about.png"
                alt="About AX Platform Infographic"
                width={1200}
                height={900}
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
