import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "AX has fundamentally changed how we leverage AI. Our agents now work in concert, creating value we never thought possible.",
    name: "Jane Doe",
    title: "CTO, Innovate Inc.",
    avatarUrl: "https://picsum.photos/40/40?random=6",
    aiHint: "woman portrait"
  },
  {
    quote: "The cross-agent workflows are a game-changer. What used to take hours of manual copy-pasting now happens in seconds.",
    name: "John Smith",
    title: "Lead AI Engineer, Tech Solutions",
    avatarUrl: "https://picsum.photos/40/40?random=7",
    aiHint: "man portrait"
  },
  {
    quote: "I can manage my entire fleet of AI agents from my phone. It's the future of AI collaboration, and it's here now.",
    name: "Emily White",
    title: "Founder, Automate Everything",
    avatarUrl: "https://picsum.photos/40/40?random=8",
    aiHint: "woman profile"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Loved by innovators</h2>
          <p className="mt-4 text-lg text-muted-foreground">Hear what our users have to say about AX.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col justify-between">
                <blockquote className="italic text-foreground/90 border-l-2 border-accent pl-4 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} width={40} height={40} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold font-headline">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
