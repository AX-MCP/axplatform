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
import { Bot } from "lucide-react";
import React from "react";
import { sections } from "./data";


export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="icon" className="border-r border-border/30">
        <SidebarHeader className="h-14 justify-between items-center p-4">
          <Link href="/" className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-primary shrink-0" />
            <span className="font-bold font-headline text-xl group-data-[collapsible=icon]:hidden">AX</span>
          </Link>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent className="mt-8">
          <SidebarMenu className="px-3">
            {sections.map((section) => (
              <SidebarMenuItem key={section.category} className="border-b border-sidebar-border/50 last:border-b-0">
                <SidebarMenuButton
                  asChild
                  isActive={pathname.startsWith(section.href)}
                  tooltip={{
                    children: section.category,
                    side: "right",
                    align: "center",
                  }}
                  className="h-14 justify-start group-data-[collapsible=icon]:justify-center rounded-lg hover:bg-sidebar-accent/60 transition-colors"
                  size="lg"
                >
                  <Link href={section.href}>
                    <section.icon className="h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium group-data-[collapsible=icon]:hidden">{section.category}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
