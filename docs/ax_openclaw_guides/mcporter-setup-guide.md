# Setting Up aX Platform as an MCP Server with mcporter

This guide walks you through connecting your aX Platform agents to MCP-compatible applications using `mcporter`, a popular MCP server manager.

## Overview

aX Platform MCP servers use OAuth2 device flow for authentication. This guide covers:

- Installing and configuring mcporter
- Adding aX Platform agents as MCP servers
- Authenticating via OAuth device flow
- Troubleshooting common issues

**Two ways to set up:**
- 🤖 **Option 1: Use OpenClaw** — Automate most steps with simple prompts
- 📝 **Option 2: Manual** — Follow step-by-step commands yourself

---

## 🚀 Complete Setup with OpenClaw

If you have **OpenClaw** installed, you can automate the entire setup with one prompt:

```
Set up my aX Platform agent as an MCP server with mcporter:
- Agent name: my-assistant
- MCP URL: https://mcp.paxai.app/mcp/agents/my-assistant
- Target client: Claude Desktop

Install mcporter if needed, configure OAuth, walk me through browser approval,
and add the server to my Claude Desktop config.
```

OpenClaw will guide you through the entire process, only requiring you to click "Approve" in your browser.

**Want to do it manually instead?** Continue with the detailed steps below.

---

## Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** or **npm**
- An **aX Platform account** with at least one agent
- Access to a web browser for OAuth approval

---

## Part 1: Install mcporter

### Option 1: Use OpenClaw (Automated) 🤖

If you have OpenClaw installed, simply ask:

```
Install mcporter globally using pnpm and verify the installation.
```

OpenClaw will handle the installation and confirmation for you.

### Option 2: Manual Installation

```bash
# Using pnpm (recommended)
pnpm add -g @punkpeye/mcporter

# Or using npm
npm install -g @punkpeye/mcporter
```

### Verify Installation

```bash
mcporter --version
```

---

## Part 2: Configure Your aX Platform Agents

### Step 1: Find Your Agent's MCP URL

Log in to [aX Platform](https://paxai.app) and navigate to your agent's settings. Copy the MCP endpoint URL, which follows this format:

```
https://mcp.paxai.app/mcp/agents/<your-agent-name>
```

### Option 1: Use OpenClaw (Automated) 🤖

Once you have your agent's MCP URL, ask OpenClaw:

```
Add my aX Platform agent to mcporter:
- Agent name: my-assistant
- MCP URL: https://mcp.paxai.app/mcp/agents/my-assistant

Make sure to configure OAuth authentication.
```

OpenClaw will:
1. Run `mcporter config add` command
2. Edit the config file to add `"auth": "oauth"`
3. Verify the configuration

### Option 2: Manual Configuration

#### Step 2: Add the Server to mcporter

Run the following command for each agent you want to connect:

```bash
pnpm mcporter config add <agent-name> --url "https://mcp.paxai.app/mcp/agents/<your-agent-name>"
```

**Example:**
```bash
pnpm mcporter config add my-assistant --url "https://mcp.paxai.app/mcp/agents/my-assistant"
```

#### Step 3: Enable OAuth Authentication

mcporter doesn't automatically detect OAuth, so you need to manually edit the config file.

**Location:** `config/mcporter.json` (in your project directory) or `~/.mcporter/config.json`

Add `"auth": "oauth"` to each aX Platform server entry:

**Before:**
```json
{
  "servers": {
    "my-assistant": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/my-assistant"
    }
  }
}
```

**After:**
```json
{
  "servers": {
    "my-assistant": {
      "baseUrl": "https://mcp.paxai.app/mcp/agents/my-assistant",
      "auth": "oauth"
    }
  }
}
```

---

## Part 3: Authenticate via OAuth Device Flow

aX Platform uses **OAuth device flow**, which means you'll authorize via your browser and GitHub account.

### Option 1: Use OpenClaw (Semi-Automated) 🤖

Ask OpenClaw to handle the OAuth flow:

```
Authenticate my aX Platform agent "my-assistant" with mcporter using OAuth device flow:
- Agent URL: https://mcp.paxai.app/mcp/agents/my-assistant

Walk me through the process, open the verification URL in my browser, 
and update the mcporter credentials vault once I approve.
```

OpenClaw will:
1. Request the device code
2. Open the verification URL in your browser
3. Wait for you to approve
4. Poll for the access token
5. Calculate the vault key hash
6. Update `~/.mcporter/credentials.json` automatically
7. Restart the mcporter daemon

**You only need to:** Click "Approve" in the browser tab that opens.

### Option 2: Manual OAuth Flow

#### Step 1: Request a Device Code

Run this command to initiate the OAuth flow:

```bash
curl -s -X POST https://api.paxai.app/oauth/device/code \
  -d "client_id=mcporter&scope=mcp:read mcp:write"
```

**Response:**
```json
{
  "device_code": "abc123...",
  "user_code": "ABCD-1234",
  "verification_uri": "https://paxai.app/device",
  "verification_uri_complete": "https://paxai.app/device?user_code=ABCD-1234",
  "expires_in": 900
}
```

Note the:
- `verification_uri_complete` — URL to approve the request
- `device_code` — needed for the next step

### Step 2: Approve in Browser

1. Open the `verification_uri_complete` URL in your browser
2. Log in with your GitHub account (if not already logged in)
3. Click **Approve** to authorize mcporter

### Step 3: Poll for Access Token

Once approved, exchange the device code for an access token:

```bash
curl -s -X POST https://mcp.paxai.app/oauth/token \
  -d "grant_type=urn:ietf:params:oauth:grant-type:device_code" \
  -d "device_code=<PASTE_DEVICE_CODE_HERE>&client_id=mcporter"
```

**Response:**
```json
{
  "access_token": "ax_loc_...",
  "refresh_token": "ax_loc_...",
  "token_type": "Bearer",
  "expires_in": 28800,
  "scope": "mcp:read mcp:write"
}
```

Copy the `access_token` and `refresh_token` for the next step.

### Step 4: Store Credentials in mcporter Vault

mcporter stores credentials in `~/.mcporter/credentials.json` using a unique key based on the server's configuration.

#### 4a. Calculate the Vault Key Hash

Run this command, replacing `<YOUR_AGENT_NAME>` with your agent's name:

```bash
node -e "console.log(require('crypto').createHash('sha256').update(JSON.stringify({baseUrl: 'https://mcp.paxai.app/mcp/agents/<YOUR_AGENT_NAME>', auth: 'oauth'})).digest('hex'))"
```

Copy the **first 16 characters** of the output hash.

#### 4b. Construct the Vault Key

Format: `<agent-name>|<first_16_chars_of_hash>`

**Example:** `my-assistant|a840d868bcf6468a`

#### 4c. Edit the Credentials File

Open `~/.mcporter/credentials.json` and add an entry under `entries`:

```json
{
  "version": 1,
  "entries": {
    "my-assistant|a840d868bcf6468a": {
      "accessToken": "ax_loc_...",
      "refreshToken": "ax_loc_...",
      "tokenType": "Bearer",
      "expiresAt": 1770292789,
      "scope": "mcp:read mcp:write",
      "serverName": "my-assistant",
      "serverUrl": "https://mcp.paxai.app/mcp/agents/my-assistant",
      "updatedAt": 1770264789823
    }
  }
}
```

**Important fields:**
- `accessToken` — from Step 3
- `refreshToken` — from Step 3
- `expiresAt` — current Unix timestamp + 28800 seconds (~8 hours)
- `updatedAt` — current Unix timestamp in milliseconds

### Step 5: Verify the Connection

Restart mcporter to recognize the new credentials:

```bash
pnpm mcporter list
```

You should see your aX Platform agent listed as **healthy**.

---

## Part 4: Use Your MCP Server

Once authenticated, you can use your aX Platform agent with any MCP-compatible application.

### Option 1: Use OpenClaw (Automated) 🤖

Ask OpenClaw to configure your MCP client:

```
Add my aX Platform agent "my-assistant" to my Claude Desktop MCP config.
```

Or for VS Code:

```
Add my aX Platform agent "my-assistant" to my Cline/Roo-Cline MCP config in VS Code.
```

OpenClaw will locate the correct config file, add the server entry, and restart the application if needed.

### Option 2: Manual Client Configuration

#### Claude Desktop

Add to `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "my-assistant": {
      "command": "pnpm",
      "args": ["mcporter", "connect", "my-assistant"]
    }
  }
}
```

#### Cline / Roo-Cline (VS Code)

Add to your MCP settings in VS Code:

```json
{
  "mcpServers": {
    "my-assistant": {
      "command": "pnpm",
      "args": ["mcporter", "connect", "my-assistant"]
    }
  }
}
```

#### Continue.dev

Add to your Continue config:

```json
{
  "mcp": {
    "servers": {
      "my-assistant": {
        "command": "pnpm",
        "args": ["mcporter", "connect", "my-assistant"]
      }
    }
  }
}
```

---

## Token Expiration & Re-Authentication

aX Platform tokens expire after **8 hours**. When this happens, you'll see:

```
my-assistant (auth required — run 'mcporter auth my-assistant')
```

To re-authenticate, repeat **Part 3** (OAuth flow) or use the [batch authentication script](./mcporter-batch-auth-guide.md) if you have multiple agents.

---

## Troubleshooting

### "auth required" persists after adding credentials

**OpenClaw Solution:** 🤖
```
Restart the mcporter daemon and verify my aX Platform agent is healthy.
```

**Manual Solution:**
```bash
# Stop the mcporter daemon
pnpm mcporter daemon stop

# Wait a moment
sleep 2

# Restart the daemon
pnpm mcporter daemon start --background

# Verify
pnpm mcporter list
```

### Device code expired

Device codes expire after **15 minutes**. If you took too long to approve in the browser:

**OpenClaw:** 🤖
```
Re-run the OAuth authentication flow for my-assistant. I'll be faster this time!
```

**Manual:** Simply run the OAuth flow again from Step 1.

### Wrong vault key hash

If mcporter doesn't recognize your credentials:

**OpenClaw:** 🤖
```
Verify the vault key hash for my-assistant is correct in ~/.mcporter/credentials.json.
If it's wrong, recalculate and fix it.
```

**Manual checks:**
1. The `baseUrl` matches exactly (including `/mcp/agents/<name>`)
2. You included `auth: 'oauth'` when calculating the hash
3. You copied the first 16 characters of the hash correctly

### Verify credentials were saved correctly

**OpenClaw:** 🤖
```
Check if my-assistant credentials exist in the mcporter vault.
```

**Manual:**
```bash
cat ~/.mcporter/credentials.json | jq '.entries | keys'
```

Should include an entry like: `"my-assistant|a840d868bcf6468a"`

---

## Multiple Agents?

If you have multiple aX Platform agents, see the [Batch Authentication Guide](./mcporter-batch-auth-guide.md) for a faster workflow.

---

## Additional Resources

- **aX Platform:** https://paxai.app
- **mcporter:** https://github.com/punkpeye/mcporter
- **MCP Specification:** https://modelcontextprotocol.io
- **aX Platform MCP Docs:** https://docs.paxai.app/mcp

---

## Support

For issues specific to:
- **mcporter setup:** [mcporter GitHub Issues](https://github.com/punkpeye/mcporter/issues)
- **aX Platform authentication:** [aX Platform Support](https://paxai.app/support)
- **MCP protocol:** [MCP Discord](https://discord.gg/mcp)
