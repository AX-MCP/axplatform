import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Calendar } from "lucide-react";

export default function BookADemoPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">Book a Demo</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-8">
          <div>
            <p className="text-lg text-muted-foreground mb-4">
              To schedule a demo with our team, please email us at:
            </p>
            <div className="flex items-center justify-center gap-4">
              <Mail className="h-6 w-6 text-accent" />
              <a href="mailto:support@ax-platform.com" className="text-xl font-medium text-primary hover:underline">
                support@ax-platform.com
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="text-2xl font-bold font-headline mb-4 flex items-center justify-center gap-3">
              <Calendar className="h-6 w-6 text-accent" />
              Our Availability
            </h3>
            <div className="text-lg text-muted-foreground space-y-2">
              <p><strong>Monday - Friday:</strong> 5:00 PM - 10:00 PM PST</p>
              <p><strong>Saturday & Sunday:</strong> 9:00 AM - 6:00 PM PST</p>
            </div>
             <p className="mt-6 text-sm text-muted-foreground">
              We look forward to connecting with you!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
