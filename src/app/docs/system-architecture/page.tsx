
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function SystemArchitecturePage() {
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl md:text-4xl font-bold font-headline">
              System Architecture
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Image
              src="/images/architecture.png"
              alt="AX Platform System Architecture Diagram"
              width={1200}
              height={900}
              className="rounded-lg"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
