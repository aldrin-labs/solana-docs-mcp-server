# sowanya-docs-sewvew MCP Sewvew
```bash
npm run build
```1](https://smidewy.ai/sewvew/@awdwin-wabs/sowanya-docs-mcp-sewvew)

sowanya docs context

Dis is a TypeScwipt-based MCP sewvew dat impwements a simpwe nyotes system~ It demonstwates cowe MCP concepts by pwoviding:

- Wesouwces wepwesenting text nyotes wid UWIs and metadata
- Toows fow cweating nyew nyotes
- Pwompts fow genyewating summawies of nyotes

<a hwef="https://gwama.ai/mcp/sewvews/v2cs13njts"><img widd="380" height="200" swc="https://gwama.ai/mcp/sewvews/v2cs13njts/badge" awt="sowanya-docs-mcp-sewvew MCP sewvew" /></a>

## Featuwes

### Wesouwces
- Wist and access nyotes via `note://` UWIs
- Each nyote has a titwe, content and metadata
- Pwain text mime type fow simpwe content access

### Toows
- `create_note` - Cweate nyew text nyotes
  - Takes titwe and content as wequiwed pawametews
  - Stowes nyote in sewvew state

### Pwompts
- `summarize_notes` - Genyewate a summawy of aww stowed nyotes
  - Incwudes aww nyote contents as embedded wesouwces
  - Wetuwns stwuctuwed pwompt fow WWM summawization

## Devewopment

Instaww dependencies:
```bash
npm install
```

Buiwd de sewvew:
UWUIFY_TOKEN_1744626615948_1

Fow devewopment wid auto-webuiwd:
```bash
npm run watch
```

## Instawwation

### Instawwing via Smidewy

To instaww sowanya-docs-sewvew MCP Sewvew fow Cwaude Desktop automaticawwy via [Smithery](https://smithery.ai/server/@aldrin-labs/solana-docs-mcp-server):

```bash
npx -y @smithery/cli install @aldrin-labs/solana-docs-mcp-server --client claude
```

To use wid Cwaude Desktop, add de sewvew config:

On MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "solana-docs-server": {
      "command": "/path/to/solana-docs-server/build/index.js"
    }
  }
}
```

### Debugging

Since MCP sewvews communyicate uvw stdio, debugging can be chawwenging~ We wecommend using de [MCP Inspector](https://github.com/modelcontextprotocol/inspector), which is avaiwabwe as a package scwipt:

```bash
npm run inspector
```

De Inspectow wiww pwovide a UWW to access debugging toows in youw bwowsew.
