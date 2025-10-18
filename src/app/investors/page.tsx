
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ndaContent } from "@/lib/nda-content";

export default function InvestorsPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-bold font-headline">
            Mutual Non-Disclosure Agreement
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert max-w-none">
          <p className="text-muted-foreground">
            This Mutual Non-Disclosure Agreement (the "Agreement") is entered
            into between the Disclosing Party and the Receiving Party for the
            purpose of preventing the unauthorized disclosure of Confidential
            Information as defined below.
          </p>
          {ndaContent.map((section, index) => (
            <div key={index}>
              <h2 className="mt-8">{section.title}</h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
