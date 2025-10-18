
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileSignature } from "lucide-react";

export default function InvestorsPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">
            Investor Relations
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-8">
            <p className="text-lg text-muted-foreground">
              To proceed with investment discussions, please review and sign our Mutual Non-Disclosure Agreement.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="https://app.pandadoc.com/document/v2?token=1f8e7c3ae1bddf7546312ac16e886179e7c1c606" target="_blank" rel="noopener noreferrer">
                <FileSignature className="mr-2 h-5 w-5" />
                Sign the NDA on PandaDoc
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground pt-4">
              For any questions, please contact us at <a href="mailto:enterprise@ax-platform.com" className="text-primary hover:underline">enterprise@ax-platform.com</a>.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
