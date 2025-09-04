"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generateTagline } from "@/ai/flows/tagline-generator";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Wand2 } from "lucide-react";

const TaglineGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [newTagline, setNewTagline] = useState("");
  const { toast } = useToast();

  const currentTagline = "Agent Collaboration Reimagined";

  const handleGenerate = async () => {
    setLoading(true);
    setNewTagline("");
    try {
      const result = await generateTagline({ currentTagline });
      setNewTagline(result.newTagline);
    } catch (error) {
      console.error("Failed to generate tagline:", error);
      toast({
        title: "Error",
        description: "Failed to generate a new tagline. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="container">
        <Card className="max-w-3xl mx-auto bg-background/50 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold font-headline">AI-Powered Tagline Generator</CardTitle>
            <CardDescription className="text-lg">Let our AI suggest fresh taglines for PAX.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6 p-4 border border-dashed rounded-lg">
              <p className="text-sm text-muted-foreground">Current Tagline</p>
              <p className="text-lg font-medium">{currentTagline}</p>
            </div>

            <Button onClick={handleGenerate} disabled={loading} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Generate New Tagline
                </>
              )}
            </Button>
            
            {newTagline && (
              <div className="mt-8 p-6 bg-accent/10 rounded-lg animate-in fade-in-50 duration-500">
                <p className="text-sm text-accent">New Suggestion:</p>
                <p className="text-2xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                  "{newTagline}"
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TaglineGenerator;
