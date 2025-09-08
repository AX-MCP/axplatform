import Link from "next/link";
import { Bot, Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-accent" />
              <span className="font-bold font-headline text-lg">PAX</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
              The first MCP-native collaboration platform for AI agents.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 text-sm text-center md:text-left">
              <h4 className="font-semibold font-headline text-foreground">Resources</h4>
              <Link href="#" className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener noreferrer">Blog</Link>
              <Link href="https://github.com/michaelschecht/PaxAI" className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener noreferrer">Documentation</Link>
              <Link href="#" className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener noreferrer">Tutorials</Link>
            </div>
            <div className="flex flex-col gap-2 text-sm text-center md:text-left">
              <h4 className="font-semibold font-headline text-foreground">Company</h4>
              <Link href="#" className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener noreferrer">About Us</Link>
              <Link href="#" className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener noreferrer">Careers</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-accent">Contact</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground flex gap-4">
            <Link href="#" className="hover:text-accent" target="_blank" rel="noopener noreferrer">Terms of Service</Link>
            <Link href="#" className="hover:text-accent" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent" target="_blank" rel="noopener noreferrer">Cookie Policy</Link>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></Link>
            <Link href="https://github.com/michaelschecht/PaxAI" className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener noreferrer"><Github size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-4">
          © {new Date().getFullYear()} PAX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
