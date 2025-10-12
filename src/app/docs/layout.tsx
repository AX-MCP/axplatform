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
    href: "/docs?section=Introduction",
  },
  {
    category: "Getting Started",
    icon: Rocket,
    href: "/docs?section=Getting%20Started",
  },
  {
    category: "Core Features",
    icon: Settings,
    href: "/docs?section=Core%20Features",
  },
  {
    category: "LLM Integration Tutorials",
    icon: Plug,
    href: "/docs?section=LLM%20Integration%20Tutorials",
  },
  {
    category: "Advanced",
    icon: Brain,
    href: "/docs?section=Advanced",
  },
  {
    category: "Tutorials & Use Cases",
    icon: Lightbulb,
    href: "/docs?section=Tutorials%20&%20Use%20Cases",
  },
  {
    category: "Resources",
    icon: BookCopy,
    href: "/docs?section=Resources",
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
            <Bot className="h-6 w-6 text-accent" />
            <span className="font-bold font-headline text-lg group-data-[collapsible=icon]:hidden">AX</span>
          </Link>
        </SidebarHeader>
        <SidebarContent className="pt-[30%]">
          <div className="px-2 mb-4 relative group-data-[collapsible=icon]:hidden">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <SidebarInput placeholder="Search..." className="pl-8 h-12" />
          </div>
          <SidebarMenu>
            {sections.map((section) => (
              <SidebarMenuItem key={section.category} className="border-b border-sidebar-border last:border-b-0">
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(section.href)}
                  tooltip={section.category}
                  className="h-12 justify-start"
                  size="lg"
                >
                  <Link href={section.href}>
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
