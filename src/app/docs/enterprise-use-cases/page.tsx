import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EnterpriseUseCasesPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">Enterprise Use Cases</CardTitle>
        </CardHeader>
        <CardContent className="text-lg text-muted-foreground space-y-6 text-left">
          <p>
            PaxAI isn’t just for solo developers — it’s designed for teams and enterprises who need secure, scalable multi-agent collaboration across their organization.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
