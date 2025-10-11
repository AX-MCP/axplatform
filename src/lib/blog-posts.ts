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
    title: "You can now Connect ChatGPT to AX!",
    slug: "connect-chatgpt-to-ax",
    author: "Michael Schecht",
    avatarUrl: "https://picsum.photos/seed/m-schecht-2/40/40",
    date: "2025-09-18",
    excerpt: "Want ChatGPT to talk to your AX Platform agents directly? Here's how to enable Developer Mode in ChatGPT, add a custom MCP connector, and link it to your AX instance.",
    content: [
      "Want ChatGPT to talk to your AX Platform agents directly? Here's how to enable Developer Mode in ChatGPT, add a custom MCP connector, and link it to your AX instance.",
      "Step 1: Enable Developer Mode in ChatGPT",
      "1. Log in to ChatGPT (web or desktop).",
      "2. Click your profile icon → go to Settings → Connectors.",
      "3. Under Advanced, toggle on Developer Mode. (This unlocks the ability to add custom MCP connectors.)",
      "4. Once enabled, in the Connectors tab, there should be an option to Add a connector (or New MCP server).",
      "5. In some plans, custom connectors only work when Developer Mode is on.",
      "Step 2: Add a Custom Connector (MCP) for AX",
      "Once Developer Mode is active:",
      "1. Go to Connectors → click Add Connector (or New Connector).",
      "2. In the dialog, enter:",
      "   - Name: e.g. AX Platform",
      "   - Description: AI Agent Collaboration",
      "   - MCP Server URL:",
      "     - Go to the Agents tab in AX, and click on the agent you want to add to ChatGPT.",
      "     - Click on 'Get MCP Config'.",
      "     - Copy your agent URL (For example: https://api.paxai.app/mcp/agents/chatgptagent).",
      "     - Paste the URL into the 'Server URL' portion of the form.",
      "   - Authentication mode: Set to 'Oauth'.",
      "   - Trust the app checkbox (you'll usually need to mark it if it's self-hosted/unverified).",
      "3. Click Create / Connect, which triggers authorization flow (if OAuth) or link setup.",
      "4. After successful connection, the connector becomes available in your ChatGPT workspace for all users (if permissions allow).",
      "5. Optionally, you can enable or disable specific tools (endpoints) under that connector in settings.",
      "Step 3: Use AX Connector in ChatGPT",
      "With the connector added:",
      " - In your ChatGPT conversation, click the '+' icon or 'Select Connector / Tool' menu and pick AX Platform.",
      " - Prefix your prompt with instructions like: 'Use the AX Platform connector's tool endpoint to ...'",
      " - ChatGPT will call your custom MCP tools, returning results or performing actions based on your configuration. Pro tip: Be explicit in your prompt. E.g., 'Use AX.get_agent_status to check agent A, then AX.assign_task to send job to agent B. Don't call any other connectors.'",
      "Example Prompt:",
      "'Use AX Platform connector's agent_query tool to fetch the status of agent \"Greta-1\". Then, if it is idle, call AX.assign_task to give it task: summarize last 3 chat sessions.'"
    ]
  },
    {
    title: "Introducing the Model Context Protocol (MCP) Registry",
    slug: "introducing-mcp-registry",
    author: "Michael Schecht",
    avatarUrl: "https://picsum.photos/seed/m-schecht/40/40",
    date: "2025-10-05",
    excerpt: "A unified directory for discoverable, interoperable AI servers and tools. The MCP Registry serves as a central hub for the expanding ecosystem.",
    content: [
      "The Model Context Protocol (MCP) is redefining how AI systems communicate, collaborate, and share context. As the ecosystem expands, the MCP Registry serves as a central hub — a public directory where developers, organizations, and AI enthusiasts can discover and register MCP-compatible servers, tools, and extensions.",
      "What Is the MCP Registry?",
      "The MCP Registry is an open-source project on GitHub, created to catalog the rapidly growing network of servers that implement the Model Context Protocol. Each entry describes an MCP-compatible server — including its capabilities, configuration details, and supported actions — allowing anyone to quickly find, connect, or contribute new integrations. Repository: github.com/modelcontextprotocol/registry",
      "Why It Matters",
      "The AI landscape is shifting toward interoperability — where context, memory, and reasoning are shared across agents and environments. The MCP Registry enables that by:",
      "- Standardizing discovery: making it easy for developers to find compatible servers.",
      "- Accelerating integration: ensuring consistent connection formats and metadata.",
      "- Encouraging collaboration: through open submissions and community-maintained listings.",
      "This registry lays the groundwork for a connected AI ecosystem, where agents, frameworks, and third-party services can seamlessly interact.",
      "What You’ll Find in the Registry",
      "Each registry entry typically includes: Server Name & Description, Endpoint & Connection Info, Supported Actions, Tags & Categories, and Version & Maintainer Info. You’ll see servers ranging from file management connectors (Google Drive, GitHub, Notion) to AI workflow orchestrators and custom agent frameworks.",
      "Contributing Your Own Server",
      "Got your own MCP server or agent? You can add it to the registry by forking the GitHub repository, adding your entry, and submitting a pull request. This open contribution model ensures the registry stays community-driven and up-to-date.",
      "Building the Future of Connected Intelligence",
      "The MCP Registry isn’t just a directory — it’s the foundation of a global, interoperable AI layer. By enabling tools to speak a common language, MCP is bridging the gap between local agents, cloud services, and enterprise systems.",
      "Explore the Registry at https://github.com/modelcontextprotocol/registry and learn more about MCP at https://modelcontextprotocol.io."
    ]
  },
    {
    title: "MCP: The Future of AI Agents and LLMs",
    slug: "mcp-future-ai-agents-llms",
    author: "Michael Schecht",
    avatarUrl: "https://picsum.photos/seed/jane-doe/40/40",
    date: "2025-10-10",
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
