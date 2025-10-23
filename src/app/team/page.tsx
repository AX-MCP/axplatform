
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Twitter, Github, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const teamMembers = [
  {
    name: "Jacob Taunton",
    title: "Founder / CEO",
    role: "Lead Product Engineer",
    certification: "AWS Certified",
    email: "jacob.taunton@ax-platform.com",
    linkedinUrl: "https://www.linkedin.com/in/jacob-taunton-cloudengineer/",
    credlyUrl: "https://www.credly.com/users/jacob-taunton/badges#credly",
    about: "Experienced Security Engineer with 15+ years in cybersecurity and 4+ years in Generative AI. Deep expertise in Model Context Protocol (MCP), function calling, and agent frameworks.",
    avatarUrl: "https://picsum.photos/seed/jacob-taunton/200/200",
  },
  {
    name: "Michael Schecht",
    title: "Cofounder",
    role: "Product Engineering and Business Development",
    certification: "CISSP",
    email: "michael.schecht@ax-platform.com",
    linkedinUrl: "https://www.linkedin.com/in/michael-schecht/",
    credlyUrl: "https://www.credly.com/users/michael-schecht/badges#credly",
    about: "Security Engineer with 12+ years of experience specializing in Identity & Access Management (IAM). Focused on developing AI-driven automation for secure enterprise workflows.",
    avatarUrl: "https://picsum.photos/seed/michael-schecht/200/200",
  },
  {
    name: "Heath Dorn",
    title: "Cofounder",
    role: "Strategy, Partnerships, and Go-to-Market",
    certification: "Certified DevOps Professional",
    email: "heath.dorn@ax-platform.com",
    linkedinUrl: "https://www.linkedin.com/in/heathdorn/",
    about: "Agile DevSecOps leader with 15+ years of experience in secure software engineering. Specializes in custom AI applications, including Voice and RAG models.",
    avatarUrl: "https://picsum.photos/seed/heath-dorn/200/200",
  },
];

export default function TeamPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Meet Our Team</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-card text-center rounded-lg shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 flex flex-col h-full">
              <CardContent className="p-8 flex flex-col items-center flex-grow">
                <div className="relative mb-6">
                  <Image
                    src={member.avatarUrl}
                    alt={`Portrait of ${member.name}`}
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-accent"
                    data-ai-hint="professional headshot"
                  />
                </div>
                <h2 className="text-2xl font-bold font-headline text-foreground">{member.name}</h2>
                <p className="font-semibold text-accent mt-2">{member.title}</p>
                <p className="font-semibold text-muted-foreground mt-4 mb-4">{member.role}</p>
                {member.certification && <p className="font-semibold text-muted-foreground mb-6">{member.certification}</p>}
                <p className="text-base text-muted-foreground mb-6 flex-grow">{member.about}</p>
                <div className="flex space-x-4">
                   <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary">
                    <Mail className="h-5 w-5" />
                  </a>
                  <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  {member.credlyUrl && (
                    <Link href={member.credlyUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Award className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
