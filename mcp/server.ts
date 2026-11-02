import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { MCP_TOOLS } from "./tools";

/**
 * Symbly MCP server (stdio): exposes the site's tested pure functions —
 * symbol search, character inspection and text decoration — as AI-executable
 * tools. Humans and AI run the same implementation.
 *
 * Build then run: npx symbly-mcp (or node mcp/dist/server.mjs)
 */

export function createServer() {
  const server = new McpServer(
    { name: "symbly", version: "1.0.0" },
    {
      instructions:
        "Symbly: Unicode symbol reference and copy tool (https://symbly.app). Search a curated 399-symbol library by name or keyword, inspect any character's codepoint/entity/UTF-8 bytes, and decorate text with Unicode flourishes. Symbol names and keywords are English.",
    },
  );

  for (const tool of MCP_TOOLS) {
    server.registerTool(tool.name, {
      title: tool.title,
      description: tool.description,
      inputSchema: tool.schema,
    }, async (args) => {
      try {
        return tool.run(args ?? {});
      } catch (e) {
        return {
          content: [{ type: "text" as const, text: `error: ${(e as Error).message}` }],
          isError: true,
        };
      }
    });
  }
  return server;
}

export async function runStdio() {
  const server = createServer();
  await server.connect(new StdioServerTransport());
  // stdio 模式下保持进程存活;stderr 可写日志(stdout 是协议通道)
  console.error(`symbly MCP server: ${MCP_TOOLS.length} tools ready`);
}

if (process.argv[1] && process.argv[1].includes("server")) {
  void runStdio();
}
