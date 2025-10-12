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
} from "@/components/ui/sidebar";
import { Bot, Compass, Rocket, Settings, Plug, Brain, Lightbulb, BookCopy } from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  {
    category: "Welcome",
    icon: Compass,
    href: "/docs",
  },
  {
    category: "Introduction",
    icon: Compass,
    href: "/docs#Introduction"
  },
  {
    category: "Getting Started",
    icon: Rocket,
    href: "/docs#Getting-Started",
  },
  {
    category: "Core Features",
    icon: Settings,
    href: "/docs#Core-Features",
  },
  {
    category: "LLM Integration Tutorials",
    icon: Plug,
    href: "/docs#LLM-Integration-Tutorials",
  },
  {
    category: "Advanced",
    icon: Brain,
    href: "/docs#Advanced",
_  },
  {
    category: "Tutorials & Use Cases",
    icon: Lightbulb,
    href: "/docs#Tutorials-&-Use-Cases",
  },
  {
    category: "Resources",
    icon: BookCopy,
    href: "/docs#Resources",
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
        <SidebarContent>
          <SidebarMenu>
            {sections.map((section) => (
              <SidebarMenuItem key={section.category} className="border-b border-sidebar-border last:border-b-0">
                <SidebarMenuButton
                  asChild
                  isActive={pathname === section.href}
                  tooltip={section.category}
                  className="h-12 justify-start"
                  size="lg"
                >
                  <Link href={section.href || `/docs#${section.category.replace(/\s+/g, '-')}`}>
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
