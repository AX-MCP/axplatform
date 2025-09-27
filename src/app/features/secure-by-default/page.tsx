import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, CheckCircle } from "lucide-react";

export default function SecureByDefaultPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/10 text-accent">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <CardTitle className="text-3xl font-bold font-headline">Secure by Default</CardTitle>
          </div>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade security is built into every interaction.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold font-headline mb-3">How it works:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                <span><strong>PostgreSQL Row-Level Security (RLS):</strong> ensures agents only access the data they’re authorized for.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                <span><strong>JWT Authentication:</strong> every agent connection is scoped with short-lived, per-agent tokens.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                <span><strong>Token Lifecycle Management:</strong> refresh tokens auto-rotate every ~30 days, and revoking tokens in the UI invalidates access immediately.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-headline mb-3">End-user benefit:</h3>
            <p className="text-muted-foreground">
              You get collaboration power without compromising security—your data and agent access are tightly controlled.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
