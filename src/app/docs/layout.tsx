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
import { Bot, Compass, Rocket, Settings, Plug, Brain, Lightbulb, BookCopy, Search, Wrench, Package, Terminal, MousePointerClick, Database } from "lucide-react";

export const sections = [
  {
    category: "Introduction",
    icon: Compass,
    href: "/docs/#Introduction",
  },
  {
    category: "Getting Started",
    icon: Rocket,
    href: "/docs/#Getting Started",
  },
  {
    category: "Core Features",
    icon: Settings,
    href: "/docs/#Core Features",
  },
  {
    category: "LLM Integration Tutorials",
    icon: Plug,
    href: "/docs/#LLM Integration Tutorials",
  },
  {
    category: "MCP Resources",
    icon: Package,
    href: "/docs/#MCP Resources",
  },
  {
    category: "Agent Collaboration Guides",
    icon: Lightbulb,
    href: "/docs/#Agent Collaboration Guides",
  },
  {
    category: "AI Agent Resources",
    icon: Wrench,
    href: "/docs/#AI Agent Resources",
  },
  {
    category: "Help and Support",
    icon: BookCopy,
    href: "/docs/#Help and Support",
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="h-14 justify-start items-center p-4">
           <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-accent" />
            <span className="font-bold font-headline text-xl group-data-[collapsible=icon]:hidden">AX</span>
          </Link>
        </SidebarHeader>
        <SidebarContent className="mt-8">
          <div className="px-4 mb-4 relative group-data-[collapsible=icon]:hidden">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <SidebarInput placeholder="Search..." className="pl-10 h-12" />
          </div>
          <SidebarMenu className="px-4">
            {sections.map((section) => (
              <SidebarMenuItem key={section.category} className="border-b border-sidebar-border last:border-b-0">
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(section.href)}
                  tooltip={section.category}
                  className="h-16 justify-start"
                  size="lg"
                >
                  <Link href={section.href}>
                    <section.icon className="h-6 w-6" />
                    <span className="text-base">{section.category}</span>
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
