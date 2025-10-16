import Image from "next/image";

const MonitorAgentSection = () => {
  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            AX Monitor Agent in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Watch how file changes can trigger automated agent workflows.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/ax-monitor-agent.gif"
            alt="AX Monitor Agent detecting a file change and triggering another agent."
            width={1200}
            height={750}
            className="rounded-lg border border-border/60"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default MonitorAgentSection;
