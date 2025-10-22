
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Award, Linkedin } from "lucide-react";
import Link from "next/link";

const teamMembers = [
  {
    name: "Heath Dorn",
    email: "heath.dorn@ax-platform.com",
    linkedinUrl: "https://www.linkedin.com/in/heathdorn/",
    about: [
      "Agile **DevSecOps leader** with 15+ years of experience in secure software engineering.",
      "Specializes in **custom AI applications**, including Voice and **RAG (Retrieval-Augmented Generation)** models.",
      "Focused on **DoD-grade AI architecture** and **MCP protocol implementation**.",
      "Expert in integrating **security, automation, and AI** within scalable DevOps pipelines.",
    ],
    certifications: [
      "Certified DevOps Professional",
      "Scaled Agile Program Consultant (SPC)",
      "TS/SCI Security Clearance",
    ],
  },
  {
    name: "Jacob Taunton",
    email: "jacob.taunton@ax-platform.com",
    linkedinUrl: "https://www.linkedin.com/in/jacob-taunton-cloudengineer/",
    about: [
        "Experienced **Security Engineer** with 15+ years in cybersecurity and 4+ years in **Generative AI**.",
        "Deep expertise in **Model Context Protocol (MCP)**, function calling, and **agent frameworks** (AutoGen, CrewAI, LangGraph).",
        "Combines AI innovation with strong enterprise-level **security design** and compliance.",
    ],
    certifications: [
      "AWS Certified AI Practitioner",
      "AWS Certified Security",
      "AWS Certified Solutions Architect",
    ],
  },
  {
    name: "Michael Schecht",
    email: "michael.schecht@ax-platform.com",
    linkedinUrl: "https://www.linkedin.com/in/michael-schecht/",
    about: [
        "**Security Engineer** with 12+ years of experience specializing in **Identity & Access Management (IAM)**.",
        "Focused on developing **AI-driven automation** for secure enterprise workflows.",
        "Skilled in designing and integrating **agent-based systems** for IAM operations.",
        "Experienced in **cross-domain identity orchestration** and zero-trust frameworks.",
    ],
    certifications: [
      "Certified Information Systems Security Professional (CISSP)",
    ],
  },
];

function renderMarkdown(text: string) {
    const boldRegex = /\*\*(.*?)\*\*/g;
    return text.replace(boldRegex, "<strong>$1</strong>");
}


export default function TeamPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Meet the AX Team</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col h-full">
              <Card className="bg-card/50 flex flex-col flex-grow relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-accent"></div>
                  <CardHeader className="pt-8">
                  <CardTitle className="text-2xl font-bold font-headline">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                      <div className="flex-grow">
                          <h3 className="font-semibold text-lg font-headline mb-2">About</h3>
                          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                              {member.about.map((point, i) => <li key={i} dangerouslySetInnerHTML={{ __html: renderMarkdown(point) }}/>)}
                          </ul>
                          <div className="flex flex-col items-start gap-2 pt-4">
                            <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                                <Mail className="h-4 w-4" />
                                Email
                            </a>
                            <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline">
                                <Linkedin className="h-4 w-4" />
                                LinkedIn
                            </Link>
                          </div>
                      </div>
                  </CardContent>
              </Card>
              <Card className="bg-card/50 mt-4">
                <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg font-headline mb-2">Certifications</h3>
                    <ul className="space-y-2 text-muted-foreground">
                        {member.certifications.map((cert) => (
                        <li key={cert} className="flex items-center gap-3">
                            <Award className="h-5 w-5 text-accent" />
                            <span>{cert}</span>
                        </li>
                        ))}
                    </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
