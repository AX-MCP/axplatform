"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
  SidebarInput,
} from "@/components/ui/sidebar";
import { Bot, Compass, Rocket, Settings, Plug, Brain, Lightbulb, BookCopy, Search } from "lucide-react";

export const sections = [
  {
    category: "Introduction",
    icon: Compass,
    href: "#introduction",
  },
  {
    category: "Getting Started",
    icon: Rocket,
    href: "#getting-started",
  },
  {
    category: "Core Features",
    icon: Settings,
    href: "#core-features",
  },
  {
    category: "LLM Integration Tutorials",
    icon: Plug,
    href: "#llm-integration-tutorials",
  },
  {
    category: "Advanced",
    icon: Brain,
    href: "#advanced",
  },
  {
    category: "Tutorials & Use Cases",
    icon: Lightbulb,
    href: "#tutorials-use-cases",
  },
  {
    category: "Resources",
    icon: BookCopy,
    href: "#resources",
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const getFullHref = (href: string) => {
    if (href.startsWith("#")) {
      return `/docs${href}`;
    }
    return href;
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="h-14 justify-start items-center p-4">
           <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-accent" />
            <span className="font-bold font-headline text-lg group-data-[collapsible=icon]:hidden">AX</span>
          </Link>
        </SidebarHeader>
        <SidebarContent className="pt-[30%]">
          <div className="px-2 mb-4 relative group-data-[collapsible=icon]:hidden">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <SidebarInput placeholder="Search..." className="pl-8" />
          </div>
          <SidebarMenu>
            {sections.map((section) => (
              <SidebarMenuItem key={section.category} className="border-b border-sidebar-border last:border-b-0">
                <SidebarMenuButton
                  asChild
                  isActive={pathname === getFullHref(section.href)}
                  tooltip={section.category}
                  className="h-12 justify-start"
                  size="lg"
                >
                  <Link href={getFullHref(section.href)}>
                    <section.icon />
                    <span>{section.category}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarTrigger />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
