# Batch Authentication for Multiple aX Platform MCP Servers

If you manage multiple aX Platform agents as MCP servers, re-authenticating each one individually when tokens expire (every 8 hours) can be tedious. This guide provides solutions to handle multiple servers at once.

---

## The Problem

aX Platform MCP servers use OAuth device flow, which requires:
1. Requesting a device code for each server
2. Opening a browser to approve each request
3. Polling for access tokens
4. Manually updating the mcporter credentials vault

Doing this **one server at a time** takes ~3 minutes per server. If you have 4 agents, that's 12 minutes of repetitive work every 8 hours.

## 🚀 Quick Solution with OpenClaw

If you have **OpenClaw** installed, simply ask:

```
Create and run a batch authentication script for all my aX Platform MCP servers in mcporter.
Open all verification URLs, wait for me to approve them, then update credentials automatically.
```

OpenClaw will:
1. Generate the batch authentication script
2. Find all your aX Platform servers in mcporter config
3. Request device codes for all servers simultaneously
4. Open all verification URLs in your browser
5. Wait for you to approve (click "Approve" on each tab)
6. Poll for tokens in parallel
7. Update the credentials vault with correct hashes
8. Restart the mcporter daemon

**You only need to:** Click "Approve" on each browser tab (~10 seconds total)

**Time:** ~30 seconds vs. 12+ minutes manual

**Want the script for future use?** Continue reading for the standalone solution.

---

## Manual Solution: Batch Authentication Script

A **Node.js batch authentication script** that:
- Requests device codes for **all** your aX servers simultaneously
- Opens **all** verification URLs in your browser at once
- Polls for tokens **in parallel**
- Automatically updates the credentials vault with correct hash keys
- Restarts the mcporter daemon

**Time savings:** ~30 seconds total vs. 12+ minutes manual

---

## Prerequisites

- Node.js (v18 or higher)
- All aX Platform servers already added to mcporter config (see [Setup Guide](./mcporter-setup-guide.md))

---

## The Batch Authentication Script

### Option 1: Use OpenClaw to Create the Script 🤖

Ask OpenClaw:

```
Create the aX Platform batch authentication script (ax-mcp-batch-auth.js) in my current directory.
Use the full script from the batch auth guide.
```

OpenClaw will create the script with all the necessary code and make it executable.

### Option 2: Create Manually

Save this as `ax-mcp-batch-auth.js` in a convenient location (e.g., your project directory or home folder):

```javascript
#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const os = require('os');

// Configuration
const CONFIG_PATH = path.join(process.cwd(), 'config', 'mcporter.json');
const CREDENTIALS_PATH = path.join(os.homedir(), '.mcporter', 'credentials.json');
const DEVICE_CODE_URL = 'https://api.paxai.app/oauth/device/code';
const TOKEN_URL = 'https://mcp.paxai.app/oauth/token';
const CLIENT_ID = 'mcporter';
const SCOPE = 'mcp:read mcp:write';
const POLL_INTERVAL = 3000; // 3 seconds
const MAX_RETRIES = 100; // 5 minutes total

console.log('\n🚀 Batch aX Platform MCP OAuth\n');

// Load mcporter config
let config;
try {
  config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
} catch (err) {
  console.error(`❌ Failed to load mcporter config from ${CONFIG_PATH}`);
  console.error('   Make sure you run this from your project directory.');
  process.exit(1);
}

// Find all aX Platform OAuth servers
const axServers = Object.entries(config.servers || {})
  .filter(([name, cfg]) => cfg.auth === 'oauth' && cfg.baseUrl?.includes('mcp.paxai.app'))
  .map(([name, cfg]) => ({ name, baseUrl: cfg.baseUrl }));

if (axServers.length === 0) {
  console.error('❌ No aX Platform OAuth servers found in config.');
  console.error('   Add servers with: pnpm mcporter config add <name> --url <url>');
  console.error('   Then edit config/mcporter.json to add "auth": "oauth"');
  process.exit(1);
}

console.log(`Found ${axServers.length} server(s): ${axServers.map(s => s.name).join(', ')}\n`);

// Step 1: Request device codes for all servers
console.log('📝 Requesting device codes for all servers...');
const deviceFlows = axServers.map(server => {
  try {
    const response = execSync(
      `curl -s -X POST ${DEVICE_CODE_URL} -d "client_id=${CLIENT_ID}&scope=${SCOPE}"`,
      { encoding: 'utf8' }
    );
    const data = JSON.parse(response);
    console.log(`   ${server.name}: ${data.user_code}`);
    return { ...server, ...data };
  } catch (err) {
    console.error(`   ❌ Failed to get device code for ${server.name}`);
    return null;
  }
}).filter(Boolean);

if (deviceFlows.length === 0) {
  console.error('\n❌ Failed to get any device codes. Check your network connection.');
  process.exit(1);
}

// Step 2: Open all verification URLs
console.log('\n🌐 Opening all verification URLs in your browser...');
console.log('   Click "Approve" on each tab, then come back here.\n');

deviceFlows.forEach(flow => {
  try {
    if (process.platform === 'darwin') {
      execSync(`open "${flow.verification_uri_complete}"`);
    } else if (process.platform === 'win32') {
      execSync(`start "" "${flow.verification_uri_complete}"`);
    } else {
      execSync(`xdg-open "${flow.verification_uri_complete}"`);
    }
  } catch (err) {
    console.warn(`   ⚠️  Failed to open browser for ${flow.name}. Open manually:`);
    console.warn(`      ${flow.verification_uri_complete}`);
  }
});

console.log('⏸️  Waiting 5 seconds for you to approve...\n');

// Step 3: Poll for tokens in parallel
setTimeout(async () => {
  console.log('⏳ Polling for tokens...\n');

  const tokenPromises = deviceFlows.map(flow => pollForToken(flow));
  const results = await Promise.all(tokenPromises);

  const successful = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);

  if (successful.length === 0) {
    console.error('\n❌ Failed to authenticate any servers.');
    console.error('   Make sure you clicked "Approve" on all tabs.');
    process.exit(1);
  }

  // Step 4: Update credentials vault
  console.log('\n💾 Updating credentials...');
  updateCredentials(successful);

  // Step 5: Restart mcporter daemon
  console.log('\n🔄 Restarting mcporter daemon...');
  try {
    execSync('pnpm mcporter daemon stop', { stdio: 'ignore' });
    execSync('sleep 2', { stdio: 'ignore' });
    execSync('pnpm mcporter daemon start --background', { stdio: 'ignore' });
  } catch (err) {
    console.warn('⚠️  Failed to restart daemon. You may need to do it manually.');
  }

  console.log(`\n✨ Done! ${successful.length} succeeded, ${failed.length} failed\n`);

  if (failed.length > 0) {
    console.log('❌ Failed servers:');
    failed.forEach(f => console.log(`   - ${f.name}: ${f.error}`));
  }
}, 5000);

// Poll for token helper
async function pollForToken(flow) {
  for (let i = 0; i < MAX_RETRIES; i++) {
    try {
      const response = execSync(
        `curl -s -X POST ${TOKEN_URL} -d "grant_type=urn:ietf:params:oauth:grant-type:device_code&device_code=${flow.device_code}&client_id=${CLIENT_ID}"`,
        { encoding: 'utf8' }
      );
      const data = JSON.parse(response);

      if (data.access_token) {
        return {
          success: true,
          name: flow.name,
          baseUrl: flow.baseUrl,
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
          expiresIn: data.expires_in,
          scope: data.scope
        };
      }

      if (data.error === 'authorization_pending') {
        await sleep(POLL_INTERVAL);
        continue;
      }

      return { success: false, name: flow.name, error: data.error };
    } catch (err) {
      return { success: false, name: flow.name, error: 'Network error' };
    }
  }
  return { success: false, name: flow.name, error: 'Timeout' };
}

// Update credentials vault
function updateCredentials(tokens) {
  let credentials;
  try {
    credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));
  } catch (err) {
    credentials = { version: 1, entries: {} };
  }

  const now = Date.now();

  tokens.forEach(token => {
    // Calculate vault key hash
    const configBlock = JSON.stringify({ baseUrl: token.baseUrl, auth: 'oauth' });
    const hash = crypto.createHash('sha256').update(configBlock).digest('hex').substring(0, 16);
    const vaultKey = `${token.name}|${hash}`;

    credentials.entries[vaultKey] = {
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
      tokenType: 'Bearer',
      expiresAt: Math.floor(now / 1000) + token.expiresIn,
      scope: token.scope,
      serverName: token.name,
      serverUrl: token.baseUrl,
      updatedAt: now
    };

    console.log(`   ✅ ${token.name}`);
  });

  fs.writeFileSync(CREDENTIALS_PATH, JSON.stringify(credentials, null, 2));
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

### Make it Executable

```bash
chmod +x ax-mcp-batch-auth.js
```

---

## Usage

### Option 1: Use OpenClaw (Easiest) 🤖

Simply ask:

```
Run the aX Platform batch authentication script. 
I'll approve the browser tabs that open.
```

OpenClaw will:
- Run the script from the correct directory
- Monitor the output
- Let you know when to approve
- Report the final status

**You only need to:** Click "Approve" on each browser tab that opens.

### Option 2: Run Manually

#### 1. Run the Script

From your project directory (where `config/mcporter.json` is located):

```bash
node ax-mcp-batch-auth.js
```

#### 2. Approve in Browser

The script will:
1. Generate device codes for all your aX Platform servers
2. Open all verification URLs in separate browser tabs
3. Wait 5 seconds for you to approve

**Your job:** Click **Approve** on each tab (takes ~10 seconds)

#### 3. Wait for Completion

The script will:
- Poll for tokens in parallel
- Update `~/.mcporter/credentials.json` automatically
- Restart the mcporter daemon
- Report success/failure for each server

**Expected output:**
```
🚀 Batch aX Platform MCP OAuth

Found 4 server(s): my-assistant, my-analyzer, my-writer, my-coder

📝 Requesting device codes for all servers...
   my-assistant: ABC1-2DEF
   my-analyzer: GHI3-4JKL
   my-writer: MNO5-6PQR
   my-coder: STU7-8VWX

🌐 Opening all verification URLs in your browser...
   Click "Approve" on each tab, then come back here.

⏸️  Waiting 5 seconds for you to approve...

⏳ Polling for tokens...

💾 Updating credentials...
   ✅ my-assistant
   ✅ my-analyzer
   ✅ my-writer
   ✅ my-coder

🔄 Restarting mcporter daemon...

✨ Done! 4 succeeded, 0 failed
```

### 4. Verify

```bash
pnpm mcporter list
```

All servers should show as **healthy**.

---

## When to Use This Script

Run the batch script whenever your aX Platform tokens expire (every **8 hours**). You'll know it's time when:

```bash
pnpm mcporter list
```

Shows:
```
my-assistant (auth required — run 'mcporter auth my-assistant')
```

---

## Troubleshooting

### "Device code expired"

Device codes expire in **15 minutes**. If you take too long to approve all tabs, just run the script again.

### "Failed to authenticate any servers"

- Make sure you clicked **Approve** (not just opened the tabs)
- Verify you're logged into GitHub in that browser
- Check your network connection

### "auth required" persists after script

Manually restart the mcporter daemon:

```bash
pnpm mcporter daemon stop
pkill -f mcporter || true
sleep 2
pnpm mcporter daemon start --background
pnpm mcporter list
```

### Verify credentials were written

```bash
cat ~/.mcporter/credentials.json | jq '.entries | keys'
```

Should show entries like:
```json
[
  "my-assistant|a840d868bcf6468a",
  "my-analyzer|ee7cd6d88b885d7d",
  "my-writer|c90f32bd24a71322",
  "my-coder|57524d5a3f627afb"
]
```

---

## Automation Ideas (Future)

### Option 1: Cron Job

Set up a cron job to run the script automatically every 7 hours (before tokens expire):

```bash
crontab -e
```

Add:
```
0 */7 * * * cd /path/to/your/project && node ax-mcp-batch-auth.js
```

**Challenge:** Still requires manual browser approval (can't be fully automated without GitHub OAuth token)

### Option 2: Persistent Browser Session

Use Playwright with a persistent browser session:
1. Log in to GitHub once
2. Save the session cookies
3. Automate "Approve" clicks with saved session

**Complexity:** Medium  
**Feasibility:** High

### Option 3: GitHub OAuth Token

If aX Platform supports it in the future:
1. Pre-authorize with GitHub personal access token
2. Skip browser login entirely
3. Fully automated re-authentication

**Complexity:** Low  
**Feasibility:** Depends on aX Platform API

---

## Comparison: Manual vs. Batch

| Method | Time per Server | Total Time (4 servers) |
|--------|----------------|------------------------|
| **Manual** (one at a time) | ~3 minutes | ~12 minutes |
| **Batch Script** | N/A | ~30 seconds |

**Time saved:** 95% reduction (11.5 minutes saved)

---

## Additional Resources

- **Setup Guide:** [mcporter Setup Guide](./mcporter-setup-guide.md)
- **aX Platform:** https://paxai.app
- **mcporter:** https://github.com/punkpeye/mcporter
- **MCP Specification:** https://modelcontextprotocol.io

---

## Support

For issues:
- **Script errors:** Check Node.js version (18+) and dependencies (`jq`, `curl`)
- **OAuth issues:** [aX Platform Support](https://paxai.app/support)
- **mcporter issues:** [mcporter GitHub Issues](https://github.com/punkpeye/mcporter/issues)
