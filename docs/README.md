# Documentation index

This directory contains supporting documentation for the Emilo Labs institutional website repository.

## Normative contribution and operating guidance

| Document | Intended readers | Authority | Document role |
|---|---|---|---|
| [Repository contribution policy](../CONTRIBUTING.md) | Human contributors, maintainers, coding agents | Normative | Defines contribution workflow, human authorship, commit rules, validation, and review expectations |
| [Commit attribution policy](commit-attribution.md) | Repository owner, contributors, maintainers, coding agents | Normative | Defines the no-AI/no-bot Git authorship rule and its enforcement model |
| [Repository agent instructions](../AGENTS.md) | AI agents and human maintainers | Normative operating instructions | Repository-specific implementation, content, architecture, and workflow constraints |

## Product and website reference material

| Document | Intended readers | Authority | Document role |
|---|---|---|---|
| [Product artwork guide](product-artwork.md) | Designers, frontend contributors, maintainers | Implementation guidance | Explains product artwork conventions and how assets are generated or maintained |
| [Product source review](product-source-review.md) | Maintainers, product owners, content reviewers | Review record | Records source review and product-content evidence; verify against current product sources before reuse |
| [Complete website requirements draft](EmiloLabs_Complete_Website_Requirements_Draft.docx) | Project owner, designers, implementers | Historical/planning reference | Draft requirements input; not automatically authoritative over the current implementation or newer decisions |

## How to interpret this corpus

The labels above distinguish three kinds of information:

- **Normative:** a rule contributors are expected to follow.
- **Implementation guidance:** explains how an existing part of the repository is built or maintained. Verify it against current source before making changes.
- **Historical or planning reference:** preserves earlier requirements or review work. It does not override the current implementation, an accepted decision, or a normative policy.

When documents conflict, use this precedence:

1. Explicit repository-owner direction for the current task.
2. Normative repository policy and current accepted decisions.
3. The current implementation on the target branch.
4. Implementation guides and product source reviews, after checking their currency.
5. Historical drafts and planning material.

Do not treat an old requirements draft as proof that a feature currently exists. Do not treat a planned feature as implemented or a prototype as production-ready.

## Required reading before a contribution

1. Read [CONTRIBUTING.md](../CONTRIBUTING.md).
2. Read [AGENTS.md](../AGENTS.md).
3. Read [Commit attribution policy](commit-attribution.md).
4. Read the relevant product or artwork reference only when the change touches that area.
5. Inspect the current implementation and verify assumptions against the target branch.
