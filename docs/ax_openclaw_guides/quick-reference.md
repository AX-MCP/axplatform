# aX Platform MCP Quick Reference

A cheat sheet for common mcporter + aX Platform operations.

**🤖 = OpenClaw prompt** | **📝 = Manual command**

---

## 🚀 Initial Setup

### 🤖 With OpenClaw
```
Install mcporter and add my aX Platform agent:
- Agent name: my-assistant
- MCP URL: https://mcp.paxai.app/mcp/agents/my-assistant

Configure OAuth authentication.
```

### 📝 Manual
```bash
# Install mcporter
pnpm add -g @punkpeye/mcporter

# Add aX Platform agent
pnpm mcporter config add <agent-name> \
  --url "https://mcp.paxai.app/mcp/agents/<agent-name>"

# Edit config to enable OAuth
# config/mcporter.json → add "auth": "oauth" to server entry
```

---

## 🔐 OAuth Authentication (Single Server)

### 🤖 With OpenClaw
```
Authenticate my-assistant with mcporter using OAuth device flow.
Open the verification URL, wait for me to approve, then update credentials.
```

### 📝 Manual
```bash
# 1. Get device code
curl -s -X POST https://api.paxai.app/oauth/device/code \
  -d "client_id=mcporter&scope=mcp:read mcp:write"

# 2. Open verification_uri_complete in browser → Approve

# 3. Exchange for token
curl -s -X POST https://mcp.paxai.app/oauth/token \
  -d "grant_type=urn:ietf:params:oauth:grant-type:device_code" \
  -d "device_code=<DEVICE_CODE>&client_id=mcporter"

# 4. Calculate vault key hash
node -e "console.log(require('crypto').createHash('sha256').update(JSON.stringify({baseUrl: 'https://mcp.paxai.app/mcp/agents/<AGENT_NAME>', auth: 'oauth'})).digest('hex').substring(0, 16))"

# 5. Edit ~/.mcporter/credentials.json
# Add entry: "<agent-name>|<hash>": { accessToken, refreshToken, ... }

# 6. Restart daemon
pnpm mcporter daemon stop && sleep 2 && \
pnpm mcporter daemon start --background && \
pnpm mcporter list
```

---

## 📦 Batch Authentication (Multiple Servers)

### 🤖 With OpenClaw
```
Run batch authentication for all my aX Platform MCP servers.
I'll approve the browser tabs.
```

### 📝 Manual
```bash
# Run batch script (see Batch Auth Guide for setup)
node ax-mcp-batch-auth.js

# Approve all tabs in browser
# Wait for completion (~30 seconds)
```

---

## 🔧 Common Commands

```bash
# List all servers and their status
pnpm mcporter list

# Check specific server details
pnpm mcporter info <agent-name>

# Restart daemon (fixes most issues)
pnpm mcporter daemon stop
sleep 2
pnpm mcporter daemon start --background

# View logs
pnpm mcporter daemon logs

# Check daemon status
pnpm mcporter daemon status

# Remove a server
pnpm mcporter config remove <agent-name>
```

---

## 🩺 Troubleshooting

### "auth required" won't clear

**🤖 OpenClaw:**
```
Force restart mcporter daemon and verify my agents are healthy.
```

**📝 Manual:**
```bash
pnpm mcporter daemon stop
pkill -f mcporter || true
sleep 2
pnpm mcporter daemon start --background
pnpm mcporter list
```

### Verify credentials exist

**🤖 OpenClaw:**
```
Check if my-assistant credentials exist in mcporter vault.
```

**📝 Manual:**
```bash
cat ~/.mcporter/credentials.json | jq '.entries | keys'
```

### Check if hash matches config

**🤖 OpenClaw:**
```
Verify the vault key hash for my-assistant is correct. 
Recalculate if needed.
```

**📝 Manual:**
```bash
# Calculate expected hash
node -e "const cfg = require('./config/mcporter.json'); \
  const server = cfg.servers['<agent-name>']; \
  const hash = require('crypto').createHash('sha256') \
    .update(JSON.stringify({baseUrl: server.baseUrl, auth: 'oauth'})) \
    .digest('hex').substring(0, 16); \
  console.log('<agent-name>|' + hash);"

# Compare with credentials file
cat ~/.mcporter/credentials.json | jq '.entries | keys' | grep <agent-name>
```

### Re-authenticate quickly

**🤖 OpenClaw:**
```
Re-authenticate all my aX Platform agents using batch script.
```

**📝 Manual:**
```bash
# Use batch script if you have it
node ax-mcp-batch-auth.js

# Or manual OAuth flow (Steps 1-6 above)
```

---

## 🔌 MCP Client Configs

### Claude Desktop

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`  
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "my-agent": {
      "command": "pnpm",
      "args": ["mcporter", "connect", "my-agent"]
    }
  }
}
```

### Cline (VS Code)

**Settings → MCP Servers:**

```json
{
  "mcpServers": {
    "my-agent": {
      "command": "pnpm",
      "args": ["mcporter", "connect", "my-agent"]
    }
  }
}
```

### Continue.dev

**Config file:**

```json
{
  "mcp": {
    "servers": {
      "my-agent": {
        "command": "pnpm",
        "args": ["mcporter", "connect", "my-agent"]
      }
    }
  }
}
```

---

## 📂 File Locations

| File | Location |
|------|----------|
| **mcporter config** | `config/mcporter.json` (project) or `~/.mcporter/config.json` |
| **Credentials vault** | `~/.mcporter/credentials.json` |
| **Daemon logs** | `~/.mcporter/logs/` |
| **Batch auth script** | `ax-mcp-batch-auth.js` (your project) |

---

## ⏰ Token Expiration

- **Lifetime:** 8 hours
- **Warning sign:** `mcporter list` shows "auth required"
- **Fix:** Re-run OAuth flow or batch script

---

## 🆘 Quick Fixes

### Fresh start (nuclear option)
```bash
# Stop daemon
pnpm mcporter daemon stop
pkill -f mcporter || true

# Backup and clear credentials
cp ~/.mcporter/credentials.json ~/.mcporter/credentials.json.bak
rm ~/.mcporter/credentials.json

# Re-authenticate all servers
node ax-mcp-batch-auth.js
```

### Daemon won't start
```bash
# Check for conflicting processes
ps aux | grep mcporter

# Kill all mcporter processes
pkill -9 -f mcporter

# Restart
pnpm mcporter daemon start --background
```

### Config changes not taking effect
```bash
# Always restart after config changes
pnpm mcporter daemon stop
sleep 2
pnpm mcporter daemon start --background
```

---

## 🔗 Quick Links

- **Full Setup Guide:** [mcporter-setup-guide.md](./mcporter-setup-guide.md)
- **Batch Auth Guide:** [mcporter-batch-auth-guide.md](./mcporter-batch-auth-guide.md)
- **aX Platform:** https://paxai.app
- **mcporter Docs:** https://github.com/punkpeye/mcporter
- **MCP Spec:** https://modelcontextprotocol.io

---

**Pro tip:** Bookmark this page for quick reference when tokens expire!
