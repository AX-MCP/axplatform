
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const jobOpenings = [
    {
        title: "AI Developer / Full-Stack (AI-First)",
        location: "Remote (US preferred, but open)",
        href: "/careers/ai-developer"
    }
]

export default function CareersPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Careers at AX Platform
          </h1>
          <p className="text-lg text-muted-foreground">
            Join us in building the future of AI collaboration.
          </p>
        </header>

        <Card>
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">Current Openings</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {jobOpenings.map((job) => (
                         <Link
                            key={job.title}
                            href={job.href}
                            className="block group"
                        >
                            <Card className="p-6 transition-all duration-300 border-border bg-card/50 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold font-headline group-hover:text-primary">{job.title}</h3>
                                        <p className="text-muted-foreground">{job.location}</p>
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </CardContent>
        </Card>
        
      </div>
    </div>
  );
}
