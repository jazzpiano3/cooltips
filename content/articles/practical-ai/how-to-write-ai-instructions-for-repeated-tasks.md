---
title: "How to Write AI Instructions for Repeated Tasks"
description: "A reusable instruction format for repeated AI tasks, including input, output, rules, examples, review steps, and safe boundaries."
category: "AI"
publishedAt: "2026-07-06"
readingTime: "8 min read"
---

Repeated AI tasks deserve reusable instructions. A saved instruction reduces setup time and improves consistency because you do not have to explain the task from scratch every time.

This is different from writing one clever prompt. A reusable instruction is closer to a small operating procedure. It tells the AI what job to do, what input to expect, what output to return, what rules to follow, and how the result should be checked.

## Name the task clearly

Start with a short name for the task, such as weekly update draft, support reply review, meeting notes cleanup, or code review checklist.

Naming the task helps you recognize when to reuse the instruction and when a different workflow is needed.

A good task name should describe the real workflow, not the AI technique. "Weekly status update from rough notes" is better than "summary prompt." "Business email tone review" is better than "writing helper." Clear names make the instruction easier to find later.

Add one sentence that explains when to use it:

```text
Use this instruction when I have rough weekly notes and need a concise
manager-friendly update with progress, blockers, and next steps.
```

That sentence prevents misuse. If the task does not match the description, you know to write a different instruction.

## Define input and output

Write what you will provide and what the AI should return. This removes ambiguity.

For example, input may be rough meeting notes. Output may be decisions, action items, open questions, and a short follow-up message.

Input and output should be specific enough that the AI can tell whether it has enough information. For repeated tasks, include a small schema:

```text
Input:
- Rough notes
- Audience
- Deadline, if any
- Items that must not be changed

Output:
- Short summary
- Action items with owner and due date
- Open questions
- Risks or missing information
```

This structure reduces the chance of getting a beautiful but unusable response.

## Add rules and boundaries

Reusable instructions should include rules such as do not invent facts, mark missing information as TBD, preserve names, or ask clarifying questions before drafting.

These boundaries are what make the instruction safer to reuse when you are moving quickly.

Rules are especially important for AI because the output can sound confident even when context is missing. Good boundaries include:

- Do not invent names, numbers, dates, links, or sources.
- Mark missing owners or deadlines as TBD.
- Preserve original names and terminology.
- Ask clarifying questions if required information is missing.
- Separate facts from assumptions.
- Do not include confidential details in the final output.

The right boundaries depend on the task. A writing task may need tone rules. A research task may need source rules. A code review task may need privacy and verification rules.

## Include a review step

A repeated instruction should say how the human should review the output. This keeps responsibility in the right place.

For example:

```text
Before using the output, I will check names, dates, commitments,
uncertain claims, and any action items assigned to other people.
```

The AI can also help by ending with a review checklist. That checklist reminds you what to verify before sending, publishing, or saving the result.

## Include one example

An example makes the instruction easier to understand later. It also helps the AI match the shape of output you expect.

The example does not need to be long. A small sample input and output is usually enough.

Keep examples clean. Replace private names, customer information, internal URLs, and sensitive business details with placeholders. The example should teach the structure without exposing real data.

For example:

```text
Sample input:
Notes: API integration delayed. Waiting for vendor response. Design done.
Audience: non-technical manager.

Expected output:
Progress: Design work is complete.
Blocker: API integration is delayed while waiting for vendor response.
Next step: Follow up with vendor by TBD.
```

This shows the desired pattern and keeps missing information visible.

## Store instructions where you will use them

Reusable instructions fail when they are hidden. Store them in a prompt library, project document, team wiki, or notes folder where you naturally look during work.

If the instruction belongs to a specific workflow, keep it near that workflow. A meeting notes instruction can live with meeting templates. A code review instruction can live with engineering docs. A content review instruction can live with publishing notes.

## Improve after real use

Every time the instruction produces a bad output, improve the instruction. If the AI keeps writing too much, add a length limit. If it invents dates, add a stricter missing-information rule. If it misses risks, add a risk section.

Small improvements make repeated tasks steadily better. The goal is not one perfect prompt. The goal is a reusable process that becomes more reliable over time.

## Quick checklist

- Name the repeated task.
- Define the input.
- Define the output.
- Add rules and boundaries.
- Add a human review step.
- Save one example.
- Store it where you will reuse it.
- Improve it after real use.
