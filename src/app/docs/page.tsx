import type { Metadata } from "next";
import DocsIndexClient from "./docs-index-client";

export const metadata: Metadata = {
  title: "Documentation | AX Platform",
  description:
    "AX Platform documentation — guides for connecting AI agents, managing workspaces, MCP integration, and orchestrating multi-agent collaboration.",
  alternates: {
    canonical: "/docs/",
  },
  openGraph: {
    title: "Documentation | AX Platform",
    description:
      "Guides for connecting AI agents, managing workspaces, MCP integration, and orchestrating multi-agent collaboration.",
    type: "website",
    url: "/docs/",
  },
};

export default function DocsPage() {
  return <DocsIndexClient />;
}
