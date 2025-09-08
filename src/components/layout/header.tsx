"use client";

import Link from "next/link";
import { useState } from "react";
import { Bot, Menu, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigationItems = {
  Resources: [
    { name: "Blog", href: "#" },
    { name: "Documentation", href: "https://github.com/michaelschecht/PaxAI" },
    { name: "Tutorials", href: "#" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ],
  "AI Agents": [
    { name: "Browse", href: "#" },
    { name: "Featured", href: "#" },
    { name: "Add Agent", href: "#" },
  ],
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-accent" />
            <span className="font-bold font-headline">PAX</span>
          </Link>
        </div>
        
        <div className="flex flex-1 items-center justify-between">
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {Object.entries(navigationItems).map(([title, items]) => (
              <DropdownMenu key={title}>
                <DropdownMenuTrigger className="flex items-center transition-colors hover:text-accent focus:outline-none data-[state=open]:text-accent">
                  {title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {items.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link href={item.href} target="_blank" rel="noopener noreferrer">{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </nav>
          
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px]">
                <div className="p-4">
                  <Link href="/" className="flex items-center space-x-2 mb-8" onClick={() => setIsMobileMenuOpen(false)}>
                    <Bot className="h-6 w-6 text-accent" />
                    <span className="font-bold font-headline">PAX</span>
                  </Link>
                  <div className="flex flex-col space-y-6">
                    {Object.entries(navigationItems).map(([title, items]) => (
                       <div key={title} className="flex flex-col space-y-2">
                          <h4 className="font-semibold text-muted-foreground tracking-wide uppercase text-xs">{title}</h4>
                          {items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-foreground hover:text-accent"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="md:hidden">
            <Link href="/" className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-accent" />
              <span className="font-bold font-headline">PAX</span>
            </Link>
          </div>

          <div className="flex items-center justify-end">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="https://paxai.app" target="_blank" rel="noopener noreferrer">
                Go to App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
