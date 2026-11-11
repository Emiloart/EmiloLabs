#!/usr/bin/env node
import { execFileSync } from "node:child_process";

const AI_IDENTITY = /\b(claude|anthropic|chatgpt|openai|codex|github copilot|copilot|gemini|google ai|cursor|windsurf|codeium|devin|replit agent|amazon q|codewhisperer|cline|roo code|continue dev|aider|openhands|swe-agent|tabnine|sourcegraph cody|qodo|augment code|kiro|bot)\b/i;
const AI_SESSION = /^\s*(?:claude|anthropic|chatgpt|openai|codex|copilot|gemini|cursor|windsurf|devin|replit|amazon[- ]?q|cline|roo|aider|openhands)[-_ ]*(?:session|conversation|run|trace)\s*:/im;
const SESSION_URL = /https?:\/\/(?:claude\.ai\/code\/session|chatgpt\.com\/c|chat\.openai\.com\/c|github\.com\/copilot\/)/i;

function messageViolations(message) {
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

function identityViolations(identity, role) {
  return AI_IDENTITY.test(identity) ? [`AI or bot ${role} identity: ${identity}`] : [];
}

function inspectCommitMessage(message, author, committer, sha) {
  return [
    ...identityViolations(author, "author"),
    ...identityViolations(committer, "committer"),
    ...messageViolations(message),
  ].map((reason) => `${sha}: ${reason}`);
}

let failures = [];
let checked = 0;
const rangeIndex = process.argv.indexOf("--range");

if (rangeIndex !== -1) {
  const range = process.argv[rangeIndex + 1];
  if (!range) {
    process.stderr.write("Missing Git revision range after --range.\n");
    process.exit(2);
  }
  try {
    const output = execFileSync(
      "git",
      ["log", "--format=%H%x1f%an <%ae>%x1f%cn <%ce>%x1f%B%x1e", range],
      { encoding: "utf8" }
    );
    const commits = output.split("\x1e").filter(Boolean);
    checked = commits.length;
    for (const record of commits) {
      const fields = record.split("\x1f");
      if (fields.length < 4) continue;
      const [sha, author, committer, ...body] = fields;
      failures.push(...inspectCommitMessage(body.join("\x1f"), author, committer, sha.trim()));
    }
  } catch (error) {
    process.stderr.write(`Unable to inspect commit range "${range}": ${error.message}\n`);
    process.exit(2);
  }
} else {
  let input = "";
  for await (const chunk of process.stdin) input += chunk;
  checked = 1;
  let author = "";
  let committer = "";
  try {
    author = execFileSync("git", ["var", "GIT_AUTHOR_IDENT"], { encoding: "utf8" }).trim();
    committer = execFileSync("git", ["var", "GIT_COMMITTER_IDENT"], { encoding: "utf8" }).trim();
  } catch (error) {
    process.stderr.write(`Unable to inspect Git author/committer identity: ${error.message}\n`);
    process.exit(2);
  }
  failures = inspectCommitMessage(input, author, committer, "proposed commit");
}

if (failures.length) {
  process.stderr.write("Commit rejected by the Emilo Labs attribution policy.\n");
  for (const failure of failures) process.stderr.write(`- ${failure}\n`);
  process.stderr.write("AI tools and bots may assist but must not be Git authors or co-authors. Remove the attribution/session metadata and retry. See CONTRIBUTING.md and docs/commit-attribution.md.\n");
  process.exit(1);
}

process.stdout.write(`Commit metadata policy passed (${checked} commit(s) checked).\n`);
