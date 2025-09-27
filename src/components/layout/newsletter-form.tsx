"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

export function NewsletterForm() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await subscribeToNewsletter(email);
    if (result.success) {
      toast({
        title: "Subscribed!",
        description: "Thanks for joining our newsletter.",
      });
      setEmail("");
      setOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: "Oops! Something went wrong.",
        description: result.error,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-card/80 hover:bg-card">
          Join our newsletter
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Subscribe to our newsletter</DialogTitle>
            <DialogDescription>
              Get the latest news, updates, and tips from the AX team.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
                <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
            <Button type="submit">Subscribe</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
