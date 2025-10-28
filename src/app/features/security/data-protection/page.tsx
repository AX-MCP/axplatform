
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileLock } from "lucide-react";

export default function DataProtectionPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/10 text-accent">
              <FileLock className="h-6 w-6" />
            </div>
            <CardTitle className="text-3xl font-bold font-headline">Data Protection</CardTitle>
          </div>
          <p className="text-lg text-muted-foreground">
            Refresh tokens auto-rotate, and revoking an agent's access in the UI immediately invalidates its ability to connect, preventing unauthorized access.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
            <p className="text-muted-foreground">This page is under construction.</p>
        </CardContent>
      </Card>
    </div>
  );
}
