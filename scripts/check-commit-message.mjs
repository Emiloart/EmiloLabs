#!/usr/bin/env node
import { execFileSync } from "node:child_process";

const AI_IDENTITY = /\b(claude|anthropic|chatgpt|openai|codex|github copilot|copilot|gemini|google ai|cursor|windsurf|codeium|devin|replit agent|amazon q|codewhisperer|cline|roo code|continue dev|aider|openhands|swe-agent|tabnine|sourcegraph cody|qodo|augment code|kiro|bot)\b/i;
const AI_SESSION = /^\s*(?:claude|anthropic|chatgpt|openai|codex|copilot|gemini|cursor|windsurf|devin|replit|amazon[- ]?q|cline|roo|aider|openhands)[-_ ]*(?:session|conversation|run|trace)\s*:/im;
const SESSION_URL = /https?:\/\/(?:claude\.ai\/code\/session|chatgpt\.com\/c|chat\.openai\.com\/c|github\.com\/copilot\/)/i;

function violations(message) {
  const found = [];
  for (const line of message.split(/\r?\n/)) {
    const trailer = line.match(/^\s*Co-authored-by:\s*(.+)$/i);
    if (trailer && AI_IDENTITY.test(trailer[1])) {
      found.push(`AI or bot co-author trailer: ${line.trim()}`);
    }
  }
  if (AI_SESSION.test(message)) found.push("AI session metadata trailer detected.");
  if (SESSION_URL.test(message)) found.push("AI session URL detected in commit message.");
  return found;
}

let messages = [];
const rangeIndex = process.argv.indexOf("--range");
if (rangeIndex !== -1) {
  const range = process.argv[rangeIndex + 1];
  if (!range) {
    process.stderr.write("Missing Git revision range after --range.\n");
    process.exit(2);
  }
  try {
    const output = execFileSync("git", ["log", "--format=%H%x1f%B%x1e", range], { encoding: "utf8" });
    messages = output.split("\x1e").filter(Boolean).map((record) => {
      const separator = record.indexOf("\x1f");
      return { sha: record.slice(0, separator).trim(), message: record.slice(separator + 1) };
    });
  } catch (error) {
    process.stderr.write(`Unable to inspect commit range "${range}": ${error.message}\n`);
    process.exit(2);
  }
} else {
  let input = "";
  for await (const chunk of process.stdin) input += chunk;
  messages = [{ sha: "proposed commit", message: input }];
}

const failures = messages.flatMap(({ sha, message }) =>
  violations(message).map((reason) => `${sha}: ${reason}`)
);

if (failures.length) {
  process.stderr.write("Commit rejected by the Emilo Labs attribution policy.\n");
  for (const failure of failures) process.stderr.write(`- ${failure}\n`);
  process.stderr.write("AI tools and bots may assist but must not be Git authors or co-authors. Remove the attribution/session metadata and retry. See CONTRIBUTING.md and docs/commit-attribution.md.\n");
  process.exit(1);
}

process.stdout.write(`Commit metadata policy passed (${messages.length} commit(s) checked).\n`);
