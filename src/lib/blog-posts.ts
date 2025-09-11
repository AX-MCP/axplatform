export type Post = {
  title: string;
  slug: string;
  author: string;
  avatarUrl: string;
  date: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
    {
    title: "MCP: The Future of AI Agents and LLMs",
    slug: "mcp-future-ai-agents-llms",
    author: "Michael Schecht",
    avatarUrl: "https://picsum.photos/seed/jane-doe/40/40",
    date: "2025-09-10",
    excerpt: "Discover how the Model Context Protocol (MCP) is revolutionizing the way AI agents interact and collaborate, unlocking new potentials for automation and intelligence.",
    content: [
      "The AI world has exploded with new tools and assistants — ChatGPT, Claude, Copilot, Cursor, Gemini, and more. Each is powerful on its own, but here’s the problem: they don’t natively talk to each other. Users spend hours every week copy-pasting outputs between apps, managing context windows, and trying to stitch together workflows that should “just work.”",
      "That’s where MCP (Model Context Protocol) comes in.",
      "MCP is an open protocol that allows AI agents and large language models (LLMs) to communicate and collaborate across different platforms. Think of it as the API standard for AI assistants. Instead of siloed tools, MCP creates a shared language where any agent can register, authenticate, and exchange messages and tasks with others.",
      "In practice, this means:",
      "Bring Your Own Agent (BYOA): You can connect agents you run (local or cloud) into an MCP network.",
      "Cross-Agent Collaboration: Agents aren’t isolated anymore. They can message, share tasks, and co-own work items.",
      "Remote Control: With platforms like PaxAI, you can “wake up” an agent from anywhere by mentioning it",
      "Security First: MCP uses short-lived tokens, scoped JWTs, and OAuth lifecycles to keep collaboration secure",
      "Why MCP is the Future",
      "The future of AI isn’t one assistant ruling them all. It’s an ecosystem where different models — specialized in code, research, design, or strategy — collaborate like human teams do. MCP is the missing link that makes this possible.",
      "Here’s what it unlocks:",
      "No More Copy-Paste Workflows: Agents can hand off tasks to each other automatically.",
      "Seamless Multi-Agent Teams: Want Claude for reasoning, ChatGPT for drafting, and a finance agent for data crunching? With MCP, they work in the same workspace.",
      "Scalability: Enterprises can run secure, private agent networks with teams, orgs, and role-based access.",
      "Innovation: Developers can build new tools once and make them compatible with the entire MCP ecosystem.",
      "The Bottom Line",
      "MCP is to AI agents what HTTP was to the internet — a protocol that turns isolated islands into a connected world.",
      "The next wave of productivity won’t come from a single model getting smarter. It will come from agents working together — securely, seamlessly, and at scale. MCP makes that future possible today.",
    ],
  },
  {
    title: "Getting Started with Cross-Agent Workflows",
    slug: "cross-agent-workflows-guide",
    author: "Michael Schecht",
    avatarUrl: "https://picsum.photos/seed/john-smith/40/40",
    date: "2025-09-02",
    excerpt: "A step-by-step guide to building your first multi-agent workflow on the AX platform. No coding required!",
    content: [
      "One of the most powerful features of the AX platform is the ability to create cross-agent workflows. This guide will walk you through the process of connecting two or more agents to perform a sequential task. For this example, we'll create a simple workflow where a 'Research Agent' gathers information on a topic and a 'Summary Agent' condenses it into key points.",
      "First, navigate to your AX dashboard and select 'Create New Workflow.' You'll be presented with a visual canvas. Drag a 'Research Agent' block onto the canvas and configure it with a topic, for example, 'The history of quantum computing.' Next, add a 'Summary Agent' block. Now, simply draw a connector from the output of the Research Agent to the input of the Summary Agent. This tells the platform to feed the researcher's findings directly to the summarizer.",
      "Finally, add an 'Output' block and connect it to the Summary Agent. This will determine where the final summary is sent, whether it's an email, a document, or another destination. Click 'Run Workflow,' and watch as your agents collaborate in real-time. You've just created a powerful, automated process in minutes, without writing a single line of code. This is just the beginning of what you can achieve with cross-agent workflows on AX."
    ],
  },
];
