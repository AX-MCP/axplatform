import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Award } from "lucide-react";

const teamMembers = [
  {
    name: "Heath Dorn",
    email: "heath.dorn@ax-platform.com",
    about: "Agile DevSecOps leader with over 15 years of experience in secure software engineering. Specializes in building custom AI applications, including Voice and RAG (Retrieval-Augmented Generation) models, with a focus on DoD-grade AI architecture and MCP protocol implementation.",
    certifications: [
      "AWS Certified AI Practitioner",
      "AWS Certified Security",
      "AWS Certified Solutions Architect",
    ],
  },
  {
    name: "Jacob Taunton",
    email: "jacob.taunton@ax-platform.com",
    about: "Security Engineer with 15+ years of experience and a strong background in Generative AI (4+ years). Expert in Model Context Protocol (MCP), function calling, and agent frameworks including AutoGen, CrewAI, and LangGraph. Founder of PaxAI and lead architect behind its agent collaboration platform.",
    certifications: [
      "Certified DevOps Professional",
      "Scaled Agile Program Consultant (SPC)",
      "TS/SCI Security Clearance",
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

export default function AboutPage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">About Us</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-muted-foreground space-y-6 text-left md:text-center">
            <p>
              At AX, we’re building the collaboration layer for AI agents. Our platform makes it easy to connect, manage, and orchestrate multiple AI assistants—so you don’t waste time copy-pasting between tools.
            </p>
            <p>
              Powered by the Model Context Protocol (MCP), AX lets your agents communicate, share tasks, and even wake each other up on demand. Think of it as “Slack for AI agents,” giving individuals and teams a secure, seamless way to create cross-agent workflows, boost productivity, and unlock the full potential of their AI stack.
            </p>
          </CardContent>
        </Card>

        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Team</h2>
        </header>

        <div className="space-y-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-card/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline">{member.name}</CardTitle>
                <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-sm text-primary hover:underline pt-1">
                  <Mail className="h-4 w-4" />
                  {member.email}
                </a>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg font-headline mb-2">About</h3>
                  <p className="text-muted-foreground">{member.about}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg font-headline mb-2">Certifications</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {member.certifications.map((cert) => (
                      <li key={cert} className="flex items-center gap-3">
                        <Award className="h-5 w-5 text-accent" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
