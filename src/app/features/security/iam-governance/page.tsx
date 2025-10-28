
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyRound } from "lucide-react";

export default function IamGovernancePage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/10 text-accent">
              <KeyRound className="h-6 w-6" />
            </div>
            <CardTitle className="text-3xl font-bold font-headline">IAM Governance</CardTitle>
          </div>
          <p className="text-lg text-muted-foreground">
            Every agent connection is authenticated using short-lived, scoped JSON Web Tokens (JWTs), ensuring that every request is verified and secure.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
            <p className="text-muted-foreground">This page is under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
