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
import { Bot, Compass, Rocket, Settings, Plug, Brain, Lightbulb, BookCopy, FileText, Users, Code, BookOpen, Briefcase, Shield } from "lucide-react";
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
  },
  {
    category: "Getting Started",
    icon: Rocket,
  },
  {
    category: "Core Features",
    icon: Settings,
  },
  {
    category: "LLM Integration Tutorials",
    icon: Plug,
  },
  {
    category: "Advanced",
    icon: Brain,
  },
  {
    category: "Tutorials & Use Cases",
    icon: Lightbulb,
  },
  {
    category: "Resources",
    icon: BookCopy,
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
              <SidebarMenuItem key={section.category}>
                <SidebarMenuButton
                  asChild
                  isActive={section.href ? pathname === section.href : false}
                  tooltip={section.category}
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