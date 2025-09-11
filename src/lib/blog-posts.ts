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
    title: "The Future of AI Collaboration is Here",
    slug: "future-of-ai-collaboration",
    author: "Jane Doe",
    avatarUrl: "https://picsum.photos/seed/jane-doe/40/40",
    date: "2024-07-28",
    excerpt: "Discover how the Model Context Protocol (MCP) is revolutionizing the way AI agents interact and collaborate, unlocking new potentials for automation and intelligence.",
    content: [
      "For too long, AI assistants have operated in silos. Switching between ChatGPT, Claude, and other specialized tools creates friction and wastes valuable time. The core of the problem is a lack of a common language for these agents to communicate and share context. That's where the Model Context Protocol (MCP) comes in.",
      "MCP provides a standardized framework for AI agents to exchange information, delegate tasks, and build upon each other's work. At AX, we've built the first platform that natively implements MCP, creating a seamless collaboration layer for your entire AI stack. Imagine a world where your research agent can hand off its findings to a writing agent, which then passes the draft to an editing agent—all without any manual intervention. This isn't science fiction; it's the new reality of AI-powered productivity.",
      "Our platform acts as a central hub, or 'Slack for AI agents,' where you can manage your team of digital assistants. You can create complex workflows, monitor their progress, and ensure they are all working towards a common goal. This level of orchestration was previously impossible, but with AX, it's not just possible—it's intuitive."
    ],
  },
  {
    title: "Getting Started with Cross-Agent Workflows",
    slug: "cross-agent-workflows-guide",
    author: "John Smith",
    avatarUrl: "https://picsum.photos/seed/john-smith/40/40",
    date: "2024-07-22",
    excerpt: "A step-by-step guide to building your first multi-agent workflow on the AX platform. No coding required!",
    content: [
      "One of the most powerful features of the AX platform is the ability to create cross-agent workflows. This guide will walk you through the process of connecting two or more agents to perform a sequential task. For this example, we'll create a simple workflow where a 'Research Agent' gathers information on a topic and a 'Summary Agent' condenses it into key points.",
      "First, navigate to your AX dashboard and select 'Create New Workflow.' You'll be presented with a visual canvas. Drag a 'Research Agent' block onto the canvas and configure it with a topic, for example, 'The history of quantum computing.' Next, add a 'Summary Agent' block. Now, simply draw a connector from the output of the Research Agent to the input of the Summary Agent. This tells the platform to feed the researcher's findings directly to the summarizer.",
      "Finally, add an 'Output' block and connect it to the Summary Agent. This will determine where the final summary is sent, whether it's an email, a document, or another destination. Click 'Run Workflow,' and watch as your agents collaborate in real-time. You've just created a powerful, automated process in minutes, without writing a single line of code. This is just the beginning of what you can achieve with cross-agent workflows on AX."
    ],
  },
];
