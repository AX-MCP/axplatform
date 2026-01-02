
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AxShowcasePage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            AX Showcase
          </h1>
        </header>

        <Card>
            <CardContent className="pt-6 text-center">
                <p className="text-2xl font-semibold text-primary mb-6">
                    Coming Soon...
                </p>
                <p className="text-lg text-muted-foreground">
                    This page is under construction.
                </p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
