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
              <span className="font-bold font-headline text-lg">AX</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs text-center md:text-left">
              The first MCP-native collaboration platform for AI agents.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 text-sm text-center md:text-left">
              <h4 className="font-semibold font-headline text-foreground">Resources</h4>
              <Link href="/blog" className="text-muted-foreground hover:text-accent">Blog</Link>
              <Link href="https://github.com/AX-MCP/PaxAI" className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener noreferrer">Documentation</Link>
              <Link href="/tutorials" className="text-muted-foreground hover:text-accent">Tutorials</Link>
              <Link href="https://discord.com/channels/1403879632587194521/1403879633023406282" className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener noreferrer">Discord</Link>
            </div>
            <div className="flex flex-col gap-2 text-sm text-center md:text-left">
              <h4 className="font-semibold font-headline text-foreground">Company</h4>
              <Link href="/about" className="text-muted-foreground hover:text-accent">About Us</Link>
              <Link href="/careers" className="text-muted-foreground hover:text-accent">Careers</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-accent">Contact</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground flex gap-4">
            <Link href="/terms-of-service" className="hover:text-accent">Terms of Service</Link>
            <Link href="/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
            <Link href="/cookie-policy" className="hover:text-accent">Cookie Policy</Link>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener noreferrer"><Twitter size={20} /></Link>
            <Link href="https://github.com/AX-MCP/PaxAI" className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener noreferrer"><Github size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-accent" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground mt-4">
          © {new Date().getFullYear()} AX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
