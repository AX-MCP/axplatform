
"use client";

import Link from "next/link";
import { useState } from "react";
import { Bot, Menu, ChevronDown, Github } from "lucide-react";
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
    { name: "FAQ", href: "/faq" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Meet the Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
};

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.36981C18.7915 3.72559 17.1825 3.28784 15.5245 3.09381C15.4385 3.33381 15.3465 3.59781 15.2545 3.86181C13.5905 3.54381 11.9645 3.54381 10.3345 3.86181C10.2425 3.59781 10.1505 3.33381 10.0645 3.09381C8.39953 3.28784 6.79153 3.72559 5.26653 4.36981C3.16453 7.03581 2.47653 9.68781 2.78253 12.3218C4.15653 13.4358 5.48053 14.2858 6.76253 14.9558C6.58353 15.2258 6.40953 15.4958 6.23553 15.7598C5.55153 15.5438 4.88753 15.2558 4.25353 14.8898C4.25353 14.8898 4.24753 14.8838 4.24153 14.8778C3.99153 14.6558 3.80153 14.3858 3.67053 14.0738C3.67053 14.0678 3.66453 14.0618 3.65853 14.0558C2.52253 11.9738 2.37853 9.94581 2.75853 7.91781C3.15053 5.82381 4.37053 4.00581 6.13653 2.64981C6.29253 2.52981 6.47153 2.45181 6.64953 2.45181C6.79953 2.45181 6.94953 2.49381 7.08053 2.57181C7.42053 2.77581 7.55053 3.19581 7.34053 3.53181C5.78653 4.67181 4.81653 6.13581 4.37653 7.72581C4.37653 7.72581 4.37653 7.73181 4.37053 7.73781C5.23053 7.03581 6.15453 6.42981 7.13253 5.91981C7.29453 6.18981 7.45653 6.45381 7.61253 6.71181C9.00653 6.13581 10.4645 5.79381 11.9645 5.75181C13.4645 5.79381 14.9225 6.13581 16.3165 6.71181C16.4725 6.45381 16.6345 6.18981 16.7965 5.91981C17.7745 6.42981 18.6985 7.03581 19.5585 7.73781C19.5585 7.73781 19.5585 7.73181 19.5525 7.72581C19.1125 6.13581 18.1425 4.67181 16.5885 3.53181C16.3785 3.19581 16.5085 2.77581 16.8485 2.57181C17.1885 2.36781 17.6085 2.49981 17.8125 2.83581C19.5785 4.00581 20.7985 5.82381 21.1905 7.91781C21.5765 9.94581 21.4265 11.9738 20.2905 14.0558C20.2905 14.0618 20.2845 14.0678 20.2785 14.0738C20.1475 14.3858 19.9575 14.6558 19.7075 14.8778C19.7015 14.8838 19.6955 14.8898 19.6955 14.8898C19.0615 15.2558 18.3975 15.5438 17.7135 15.7598C17.5395 15.4958 17.3655 15.2258 17.1865 14.9558C18.4685 14.2858 19.7925 13.4358 21.1665 12.3218C21.4905 9.53781 20.9145 6.91581 19.5585 4.71981L20.317 4.36981ZM8.34453 12.8018C7.45053 12.8018 6.72453 12.0038 6.72453 11.0258C6.72453 10.0478 7.45653 9.24981 8.34453 9.24981C9.23253 9.24981 9.95853 10.0478 9.95253 11.0258C9.95253 12.0038 9.23253 12.8018 8.34453 12.8018ZM15.5845 12.8018C14.6905 12.8018 13.9645 12.0038 13.9645 11.0258C13.9645 10.0478 14.6965 9.24981 15.5845 9.24981C16.4725 9.24981 17.1985 10.0478 17.1925 11.0258C17.1925 12.0038 16.4725 12.8018 15.5845 12.8018Z"/>
    </svg>
);


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-accent" />
            <span className="font-bold font-headline">AX</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
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
          <Link href="/docs/mcp-info" className="transition-colors hover:text-accent">
            MCP
          </Link>
          <Link href="/docs" className="transition-colors hover:text-accent">
            Docs
          </Link>
          <Link href="/pricing/enterprise" className="transition-colors hover:text-accent">
            Pricing
          </Link>
          <Link href="/investors" className="transition-colors hover:text-accent">
            Investors
          </Link>
        </nav>
          
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
                          href="/docs/mcp-info"
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
                        <Link
                          href="/investors"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-foreground hover:text-accent"
                        >
                          Investors
                        </Link>
                      </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden sm:flex items-center justify-end gap-2">
              <Button asChild variant="ghost" size="sm">
                  <Link href="https://discord.com/channels/1403879632587194521/1403879633023406282" target="_blank" rel="noopener noreferrer">
                      <DiscordIcon className="h-6 w-6 text-muted-foreground hover:text-accent" />
                      <span className="ml-2">Discord</span>
                  </Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                  <Link href="https://github.com/AX-MCP/PaxAI" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6 text-muted-foreground hover:text-accent" />
                      <span className="ml-2">Github</span>
                  </Link>
              </Button>
            <Button asChild variant="outline" className="bg-card/80 hover:bg-card w-48 h-10">
              <Link href="https://paxai.app" target="_blank" rel="noopener noreferrer">
                Log in
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

    