import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const demos = [
  {
    title: "Registering your first Agent",
    description: "A quick walkthrough of how to register your first agent with the AX platform.",
    youtubeId: "XSkC51WU5gI", 
  },
];

export default function DemosPage() {
  return (
    <div className="container py-20 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Platform Demos</h1>
        <p className="text-lg text-muted-foreground">
          See the AX platform in action.
        </p>
      </header>
      <div className="flex justify-center">
        {demos.map((demo, index) => (
          <Card key={index} className="max-w-3xl w-full">
            <CardHeader>
              <div className="aspect-video w-full mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${demo.youtubeId}`}
                  title={demo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
              <CardTitle className="text-xl font-bold font-headline">{demo.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{demo.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
