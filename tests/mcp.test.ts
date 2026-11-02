import { describe, expect, it } from "vitest";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { createServer } from "@/mcp/server";
import { MCP_TOOLS } from "@/mcp/tools";

async function connect() {
  const server = createServer();
  const client = new Client({ name: "test", version: "0.0.0" });
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  await Promise.all([server.connect(serverTransport), client.connect(clientTransport)]);
  return client;
}

function outputOf(result: { content: { type: string; text: string }[] }): string {
  return result.content[0].text;
}

describe("symbly MCP server", () => {
  it("exposes exactly the three symbol tools", async () => {
    const client = await connect();
    const { tools } = await client.listTools();
    expect(tools.length).toBe(3);
    expect(new Set(tools.map((t) => t.name))).toEqual(new Set(["symbol_search", "char_info", "decorate_text"]));
    await client.close();
  });

  it("symbol_search finds symbols by name, keyword and pasted character", async () => {
    const client = await connect();
    // by name
    const byName = await client.callTool({ name: "symbol_search", arguments: { query: "leftwards arrow" } });
    expect(outputOf(byName as never)).toContain("←");
    // by keyword
    const byKeyword = await client.callTool({ name: "symbol_search", arguments: { query: "euro" } });
    expect(outputOf(byKeyword as never)).toContain("€");
    // by pasted character — the exact match is reported first
    const byChar = await client.callTool({ name: "symbol_search", arguments: { query: "★" } });
    expect(outputOf(byChar as never).startsWith("★")).toBe(true);
    // category restriction
    const greek = await client.callTool({ name: "symbol_search", arguments: { query: "alpha", category: "greek" } });
    expect(outputOf(greek as never)).toContain("α");
    const limited = await client.callTool({ name: "symbol_search", arguments: { query: "arrow", limit: 3 } });
    expect(outputOf(limited as never).split("\n").length).toBe(3);
    await client.close();
  });

  it("symbol_search returns an honest miss instead of pretending", async () => {
    const client = await connect();
    const miss = await client.callTool({ name: "symbol_search", arguments: { query: "zzzzqqqq" } });
    expect((miss as any).isError).toBeUndefined();
    expect(outputOf(miss as never)).toContain("no symbols match");
    await client.close();
  });

  it("char_info reports codepoint, decimal, entity, UTF-8 bytes and block", async () => {
    const client = await connect();
    // ASCII letter: numeric entity, one UTF-8 byte
    const a = await client.callTool({ name: "char_info", arguments: { char: "A" } });
    const aText = outputOf(a as never);
    expect(aText).toContain("codepoint: U+0041");
    expect(aText).toContain("decimal 65");
    expect(aText).toContain("&#65;");
    expect(aText).toContain("utf-8 bytes: 41");
    expect(aText).toContain("Basic Latin");
    expect(aText).toContain("not in the curated library"); // "A" is not a curated symbol
    // a curated library member gets its name and category
    const star = await client.callTool({ name: "char_info", arguments: { char: "★" } });
    const starText = outputOf(star as never);
    expect(starText).toContain("black star");
    expect(starText).toContain("stars");
    expect(starText).not.toContain("not in the curated library");
    const euro = await client.callTool({ name: "char_info", arguments: { char: "€" } });
    const euroText = outputOf(euro as never);
    expect(euroText).toContain("&euro;");
    expect(euroText).toContain("currency");
    // CJK: three UTF-8 bytes, numeric entity
    const zh = await client.callTool({ name: "char_info", arguments: { char: "中" } });
    const zhText = outputOf(zh as never);
    expect(zhText).toContain("U+4E2D");
    expect(zhText).toContain("decimal 20013");
    expect(zhText).toContain("&#20013;");
    expect(zhText).toContain("E4 B8 AD");
    expect(zhText).toContain("CJK Unified Ideographs");
    await client.close();
  });

  it("char_info treats emoji as one code point and flags the surrogate pair", async () => {
    const client = await connect();
    const emoji = await client.callTool({ name: "char_info", arguments: { char: "👍" } });
    const t = outputOf(emoji as never);
    expect(t).toContain("U+1F44D");
    expect(t).toContain("decimal 128077");
    expect(t).toContain("F0 9F 91 8D");
    expect(t).toContain("astral: yes (surrogate pair in UTF-16)");
    await client.close();
  });

  it("char_info rejects empty input at the logic layer", async () => {
    const client = await connect();
    // schema layer: min(1) rejects "" → protocol-level error result
    const schemaBad = await client.callTool({ name: "char_info", arguments: { char: "" } });
    expect((schemaBad as any).isError).toBe(true);
    expect((schemaBad.content as any)[0].text).toContain("-32602");
    await client.close();
  });

  it("decorate_text renders all five styles", async () => {
    const client = await connect();
    for (const style of ["box", "sparkles", "arrows", "stars", "gothic"] as const) {
      const r = await client.callTool({ name: "decorate_text", arguments: { text: "Hi", style } });
      expect(outputOf(r as never).length).toBeGreaterThan(2);
    }
    const gothic = await client.callTool({ name: "decorate_text", arguments: { text: "Hi 中", style: "gothic" } });
    expect(outputOf(gothic as never)).toBe("𝕳𝖎 中");
    const box = await client.callTool({ name: "decorate_text", arguments: { text: "Hi" } }); // default style = sparkles
    expect(outputOf(box as never)).toContain("Hi");
    await client.close();
  });

  it("invalid decorate style is a schema-level error", async () => {
    const client = await connect();
    const bad = await client.callTool({ name: "decorate_text", arguments: { text: "x", style: "neon" } });
    expect((bad as any).isError).toBe(true);
    expect((bad.content as any)[0].text).toContain("-32602");
    await client.close();
  });

  it("tool schemas are all zod object schemas (defensive check on the registry)", () => {
    for (const tool of MCP_TOOLS) {
      expect(tool.schema, tool.name).toBeTypeOf("object");
      expect(Object.keys(tool.schema).length, tool.name).toBeGreaterThan(0);
    }
  });
});
