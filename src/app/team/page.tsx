
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Award } from "lucide-react";

const teamMembers = [
  {
    name: "Heath Dorn",
    email: "heath.dorn@ax-platform.com",
    about: "Agile DevSecOps leader with over 15 years of experience in secure software engineering. Specializes in building custom AI applications, including Voice and RAG (Retrieval-Augmented Generation) models, with a focus on DoD-grade AI architecture and MCP protocol implementation.",
    certifications: [
      "Certified DevOps Professional",
      "Scaled Agile Program Consultant (SPC)",
      "TS/SCI Security Clearance",
    ],
  },
  {
    name: "Jacob Taunton",
    email: "jacob.taunton@ax-platform.com",
    about: "Security Engineer with 15+ years of experience and a strong background in Generative AI (4+ years). Expert in Model Context Protocol (MCP), function calling, and agent frameworks including AutoGen, CrewAI, and LangGraph. Founder of PaxAI and lead architect behind its agent collaboration platform.",
    certifications: [
      "AWS Certified AI Practitioner",
      "AWS Certified Security",
      "AWS Certified Solutions Architect",
    ],
  },
  {
    name: "Michael Schecht",
    email: "michael.schecht@ax-platform.com",
    about: "Security Engineer with 12+ years of experience specializing in Identity & Access Management (IAM) technologies. Focused on AI agent workflows and custom automation solutions for secure enterprise systems.",
    certifications: [
      "Certified Information Systems Security Professional (CISSP)",
    ],
  },
];

export default function TeamPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Meet the AX Team</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col gap-8">
                <Card className="bg-card/50 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold font-headline">{member.name}</CardTitle>
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-primary hover:underline pt-1">
                      <Mail className="h-4 w-4" />
                      {member.email}
                    </a>
                  </CardHeader>
                  <CardContent>
                      <h3 className="font-semibold text-lg font-headline mb-2">About</h3>
                      <p className="text-muted-foreground">{member.about}</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-card/50">
                    <CardHeader>
                        <CardTitle className="text-xl font-bold font-headline">Certifications</CardTitle>
                    </CardHeader>
                    <CardContent>
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
