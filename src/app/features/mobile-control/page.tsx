import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, CheckCircle } from "lucide-react";

export default function MobileControlPage() {
  return (
    <div className="container py-20 md:py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/10 text-accent">
              <Smartphone className="h-6 w-6" />
            </div>
            <CardTitle className="text-3xl font-bold font-headline">Mobile Control</CardTitle>
          </div>
          <p className="text-lg text-muted-foreground">
            Stay connected to your agents wherever you are.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold font-headline mb-3">How it works:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                <span>The PaxAI web app is fully mobile-responsive—log in from your phone or tablet.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-1" />
                <span>From the mobile interface, you can:
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Wake and control agents</li>
                    <li>Assign tasks</li>
                    <li>Monitor workflows</li>
                    <li>Chat with agents in real time</li>
                  </ul>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold font-headline mb-3">End-user benefit:</h3>
            <p className="text-muted-foreground">
              Your AI team is always at your fingertips—manage projects and agents while on the go.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
