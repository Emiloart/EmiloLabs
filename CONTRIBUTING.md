# Contributing to Emilo Labs

This repository contains the public Emilo Labs institutional website. Contributions must preserve the institution's product, research, privacy, and design standards.

## Contribution authority

- The repository owner is the accountable project owner and final authority over scope, acceptance, and release.
- Human contributors may be credited when they have made a substantive contribution and explicitly agree to the attribution.
- AI assistants, coding agents, generated agents, bots, and automated tools are not Git co-authors and must never be added through `Co-authored-by` trailers, alternate author identities, or equivalent commit metadata.
- AI tools may assist with research, implementation, review, testing, and documentation. Their use does not make them human contributors or grant them authorship.
- Do not add AI session URLs, private prompts, session identifiers, or tool transcripts to commit messages.

## Before making changes

1. Read [AGENTS.md](AGENTS.md) and the relevant project documentation.
2. Inspect the current branch and current implementation. Do not rely on stale descriptions or previous assumptions.
3. Identify the smallest change that satisfies the task. Preserve the established architecture and visual direction unless the task explicitly authorizes a change.
4. Do not invent product capabilities, release status, research results, metrics, partnerships, or institutional claims.
5. Keep unrelated cleanup out of a scoped change.

## Commit identity and messages

Git author and committer identity must represent the responsible human who is making the commit. Never configure an AI tool or bot as the author or committer.

Use concise, factual commit subjects. Explain the implementation reason in the body when useful. Do not append AI attribution trailers.

Allowed:
```text
Fix hero image asset resolution

Import the desktop and mobile hero assets so Vite bundles both files.
```

Not allowed:
```text
Co-authored-by: Claude <noreply@anthropic.com>
Co-authored-by: GitHub Copilot <...>
Co-authored-by: ChatGPT <...>
Claude-Session: ...
```

Human co-authors are permitted only when they are actual human contributors, have materially contributed, and have agreed to be credited. Do not infer consent from tool usage or commit generation.

## Required local safeguard

Install the repository's commit-message hook once per local clone:

```bash
git config core.hooksPath .githooks
```

The hook rejects commit messages that identify AI tools or bots as co-authors or include AI session metadata. The same policy is checked in GitHub Actions.

Verify the hook is active:

```bash
git config --get core.hooksPath
```

Expected output:

```text
.githooks
```

Do not bypass the hook with `--no-verify`. If a legitimate human co-author trailer is rejected, review and update the policy deliberately rather than bypassing the safeguard.

## Validation

Before requesting review or merging:

```bash
npm ci
npm run build
```

Run any additional checks relevant to the changed behavior. Report checks that could not be run; do not claim they passed.

## Review and release

- Prefer a focused branch and pull request for non-trivial changes.
- Review the complete diff, including generated files and commit metadata.
- Confirm the preview deployment before merging visual or routing changes.
- Keep the production branch protected with required status checks. The `commit-metadata` check must be required for pull-request merges; a workflow alone is not a substitute for branch protection.
- Do not force-push shared branches except when explicitly authorized to correct repository history. Coordinate history rewrites with anyone who may have based work on the previous history.

## Attribution corrections

If an AI tool or bot is accidentally credited:

1. Stop further pushes that could build on the affected commit.
2. Inspect the full affected commit range and identify the exact metadata that caused the attribution.
3. For an unpublished commit, amend it before publishing.
4. For a published commit, obtain repository-owner authorization before rewriting shared history. Use a force-with-lease update, preserve the tree and intended human authorship, and notify anyone who may have fetched the old history.
5. Verify the new branch history no longer contains the disallowed trailer. Do not claim that GitHub's contributor graph has refreshed until it has been checked.

This policy governs repository commit attribution. It does not claim that AI assistance was not used; it distinguishes tool assistance from human authorship.
