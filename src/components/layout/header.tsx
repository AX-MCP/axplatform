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
    { name: "Blog", href: "/blog" },
    { name: "Demos", href: "/demos" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Discord", href: "https://discord.com/channels/1403879632587194521/1403879633023406282", target: "_blank" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Meet the Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 items-center">
        <div className="flex items-center md:flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-accent" />
            <span className="font-bold font-headline">AX</span>
          </Link>
        </div>
        
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {Object.entries(navigationItems).map(([title, items]) => (
              <DropdownMenu key={title}>
                <DropdownMenuTrigger className="flex items-center transition-colors hover:text-accent focus:outline-none data-[state=open]:text-accent">
                  {title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {items.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link href={item.href} target={item.target} rel={item.target === "_blank" ? "noopener noreferrer" : undefined}>{item.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            <Link href="/mcp" className="transition-colors hover:text-accent">
              MCP
            </Link>
            <Link href="/docs" className="transition-colors hover:text-accent">
              Docs
            </Link>
            <Link href="/pricing/enterprise" className="transition-colors hover:text-accent">
              Pricing
            </Link>
          </nav>
        </div>
          
        <div className="flex flex-1 items-center justify-end gap-2">
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
                    <span className="font-bold font-headline">AX</span>
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
                              target={item.target}
                              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                    ))}
                     <div className="flex flex-col space-y-2">
                        <h4 className="font-semibold text-muted-foreground tracking-wide uppercase text-xs">More</h4>
                         <Link
                          href="/mcp"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-foreground hover:text-accent"
                        >
                          MCP
                        </Link>
                         <Link
                          href="/docs"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-foreground hover:text-accent"
                        >
                          Docs
                        </Link>
                        <Link
                          href="/pricing/enterprise"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-foreground hover:text-accent"
                        >
                          Pricing
                        </Link>
                      </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden sm:flex items-center justify-end gap-2">
            <Button asChild variant="outline" size="sm" className="bg-card/80 hover:bg-card">
                <Link href="https://forms.gle/WV1b8HVmk1TJuLvw8" target="_blank" rel="noopener noreferrer">Join our Newsletter</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="bg-card/80 hover:bg-card">
              <Link href="https://paxai.app" target="_blank" rel="noopener noreferrer">
                Go to App (Beta)
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
