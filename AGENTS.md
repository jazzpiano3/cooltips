# Project Context

Before starting any task, read the following documents in order:

1. PROJECT.md
   - Project vision
   - Product goals
   - Engineering principles
   - Long-term roadmap

2. CURRENT_STATUS.md
   - Current progress
   - Completed milestones
   - Next priorities
   - Known issues

If there is any conflict:

User instructions

> CURRENT_STATUS.md
> PROJECT.md
> AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project Instructions

## Interaction

- Read this file before starting any task.
- Treat this file as the highest-priority project instruction unless explicitly overridden by the user.
- When the user asks for feedback or opinions (e.g. "What do you think?", "How about this?", "Would this work?"), **DO NOT modify any files.** Only explain and make suggestions.
- Only modify files when the user explicitly requests implementation with phrases like "implement", "apply", "edit", "change", "create", or equivalent.
- Before editing, briefly explain what files will be changed.
- After editing, summarize what changed.
- Never commit, push, or create PRs unless explicitly requested.
- When requirements are ambiguous, ask before making changes.

## Development

- Keep the project simple.
- Prefer static pages whenever possible.
- Prioritize SEO over visual effects.
- Minimize dependencies.
- Do not introduce external UI libraries without approval.
- Follow Next.js App Router conventions.
- Favor readability over cleverness.

## Long-term Goal

This project aims to become:

- An AdSense-approved website
- A production-quality portfolio project
- A collection of AI tools and utilities
- Easy to maintain and extend

## Engineering Principles

- MVP first.
- Do not over-engineer.
- Finish before optimizing.
- Simplicity is preferred over flexibility.

## Decision Policy

When there are multiple reasonable implementations:

- Explain the trade-offs.
- Recommend one.
- Do not implement automatically.
- Wait for confirmation.

## Keep Tracking

Whenever a significant milestone is completed,
update CURRENT_STATUS.md.
