import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">Blog</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Feel free to contact our team to request more information or to get in touch with our team members.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Mail className="h-6 w-6 text-accent" />
            <a href="mailto:support@ax-platform.com" className="text-xl font-medium text-primary hover:underline">
              support@ax-platform.com
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
