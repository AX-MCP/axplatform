# aX Platform MCP User Guides

Welcome! These guides help you connect your aX Platform agents to MCP-compatible applications using `mcporter`.

**🤖 Have OpenClaw?** All guides include automation prompts to let OpenClaw handle the setup for you!

---

## 📚 Available Guides

### 1. [mcporter Setup Guide](./mcporter-setup-guide.md)
**Start here if you're new to MCP or mcporter.**

Learn how to:
- Install and configure mcporter (automated or manual)
- Add aX Platform agents as MCP servers
- Authenticate using OAuth device flow
- Connect to Claude Desktop, Cline, Continue.dev, and other MCP clients
- Troubleshoot common issues

**Time:** 
- 🤖 With OpenClaw: ~3 minutes (just approve in browser)
- 📝 Manual: ~10 minutes for your first agent

---

### 2. [Batch Authentication Guide](./mcporter-batch-auth-guide.md)
**For users managing multiple aX Platform agents.**

Get a **batch authentication script** that:
- Authenticates all your agents at once
- Reduces re-auth time from 12+ minutes to ~30 seconds
- Automatically updates credentials and restarts mcporter

**Time:** 
- 🤖 With OpenClaw: ~30 seconds (one prompt + approve tabs)
- 📝 Manual: ~30 seconds to re-authenticate 4+ agents

---

### 3. [Quick Reference](./quick-reference.md)
**Cheat sheet for common operations.**

Includes OpenClaw prompts and manual commands for:
- Common mcporter operations
- Troubleshooting steps
- Client configuration snippets

---

## 🚀 Quick Start

### Have OpenClaw? (Fastest) 🤖

Simply ask OpenClaw:

```
Set up my aX Platform agent as an MCP server:
- Agent name: my-assistant
- MCP URL: https://mcp.paxai.app/mcp/agents/my-assistant
- Target client: Claude Desktop

Install mcporter if needed, configure OAuth, and set it up end-to-end.
```

OpenClaw will handle everything except clicking "Approve" in your browser.

### Prefer to do it yourself?

1. Read the [mcporter Setup Guide](./mcporter-setup-guide.md)
2. Follow the step-by-step instructions to connect your first agent
3. Test it with Claude Desktop or your favorite MCP client

### Already have agents set up?

Use the [Batch Authentication Guide](./mcporter-batch-auth-guide.md) to simplify re-authentication when tokens expire (every 8 hours).

---

## ❓ FAQ

### What is MCP?

**Model Context Protocol (MCP)** is an open standard that lets AI applications access external tools and data sources. Think of it like plugins for your AI assistant.

**Learn more:** https://modelcontextprotocol.io

### What is mcporter?

**mcporter** is a server manager that acts as a proxy between MCP clients (like Claude Desktop) and MCP servers (like your aX Platform agents). It handles authentication, connection management, and credential storage.

**Learn more:** https://github.com/punkpeye/mcporter

### Why use aX Platform with MCP?

aX Platform agents become **reusable tools** accessible from any MCP-compatible application:

- **Claude Desktop** — Add your agents as tools in conversations
- **Cline / Roo-Cline** — Use agents in your VS Code workflows
- **Continue.dev** — Integrate agents with your coding assistant
- **Custom apps** — Build your own MCP clients

**One agent, many applications.**

### How long do tokens last?

aX Platform OAuth tokens expire after **8 hours**. You'll need to re-authenticate when they expire using either:
- Manual OAuth flow ([Setup Guide](./mcporter-setup-guide.md))
- Batch script ([Batch Auth Guide](./mcporter-batch-auth-guide.md))

### Can I automate re-authentication?

**Partially.** The batch script automates most of the process, but you still need to manually click "Approve" in your browser (GitHub OAuth requirement). 

Future improvements could use:
- Persistent browser sessions with Playwright
- GitHub OAuth tokens (if aX Platform supports it)
- Built-in mcporter plugin for aX Platform flow

### I have one agent. Do I need the batch script?

**No.** The batch script is most valuable when you have 3+ agents. For 1-2 agents, the manual flow in the [Setup Guide](./mcporter-setup-guide.md) is fine.

---

## 🛠️ Troubleshooting

### "auth required" won't go away

Try restarting the mcporter daemon:

```bash
pnpm mcporter daemon stop
sleep 2
pnpm mcporter daemon start --background
pnpm mcporter list
```

### Device codes keep expiring

Device codes expire in **15 minutes**. If you're taking longer to approve, try:
- Having your browser ready before running the script
- Ensuring you're already logged into GitHub
- Using the batch script to approve all at once

### Tokens expire too quickly

Tokens last **8 hours**, which may feel short if you're actively developing. Unfortunately, this is an aX Platform limitation. 

**Workarounds:**
- Set a reminder to re-auth every 7 hours
- Use the batch script for quick re-authentication (~30 seconds)
- Request longer token lifetimes from aX Platform support

### mcporter list shows wrong status

The status can occasionally be stale. Force a refresh:

```bash
pnpm mcporter daemon stop
pnpm mcporter daemon start --background
sleep 2
pnpm mcporter list
```

---

## 📖 Additional Resources

### aX Platform
- **Homepage:** https://paxai.app
- **Documentation:** https://docs.paxai.app
- **Support:** https://paxai.app/support
- **Discord:** https://discord.gg/axplatform

### MCP Ecosystem
- **MCP Specification:** https://modelcontextprotocol.io
- **MCP Discord:** https://discord.gg/mcp
- **MCP GitHub:** https://github.com/modelcontextprotocol

### Tools
- **mcporter:** https://github.com/punkpeye/mcporter
- **Claude Desktop:** https://claude.ai/download
- **Cline:** https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev
- **Continue.dev:** https://continue.dev

---

## 🤝 Contributing

Found an issue with these guides? Have a suggestion?

- **File an issue:** https://github.com/paxai/ax-platform/issues
- **Submit a PR:** https://github.com/paxai/ax-platform/pulls
- **Join the discussion:** https://discord.gg/axplatform

---

## 📝 License

These guides are provided under the [MIT License](../LICENSE).

---

**Happy building!** 🚀
