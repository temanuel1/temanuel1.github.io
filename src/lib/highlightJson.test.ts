import assert from "node:assert/strict";
import { test } from "node:test";
import { tokenizeJson } from "./highlightJson.ts";

const SAMPLE = `"nba-recap": {
  "command": "uvx",
  "args": ["--from", "git+https://github.com/x/y", "nba-recap-mcp"]
}`;

test("round-trips the input exactly", () => {
  assert.equal(tokenizeJson(SAMPLE).map((t) => t.text).join(""), SAMPLE);
});

test("classifies keys, strings, and punctuation", () => {
  const tokens = tokenizeJson(SAMPLE);
  const ofKind = (kind: string) => tokens.filter((t) => t.kind === kind).map((t) => t.text);
  assert.deepEqual(ofKind("key"), ['"nba-recap"', '"command"', '"args"']);
  assert.deepEqual(ofKind("string"), ['"uvx"', '"--from"', '"git+https://github.com/x/y"', '"nba-recap-mcp"']);
  assert.ok(ofKind("punctuation").includes("{"));
  assert.ok(ofKind("punctuation").includes("["));
});

test("handles escaped quotes and empty input", () => {
  assert.deepEqual(tokenizeJson(`"a\\"b"`), [{ text: `"a\\"b"`, kind: "string" }]);
  assert.deepEqual(tokenizeJson(""), []);
});
