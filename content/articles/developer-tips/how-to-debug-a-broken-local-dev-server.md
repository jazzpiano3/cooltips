---
title: "How to Debug a Broken Local Dev Server"
description: "A practical step-by-step guide for diagnosing local development server problems, from terminal errors to ports, caches, dependencies, and recent code changes."
category: "Developer Tips"
publishedAt: "2026-07-06"
readingTime: "8 min read"
---

A broken local dev server can waste a surprising amount of time because the visible symptom is often not the real cause. The browser may show a blank page, a generic 500 error, or an old version of the site, but the useful clue is usually somewhere else.

The fastest way to debug a local server is to move from the most direct evidence to the least direct evidence. Start with the terminal, confirm the port, check environment variables, then isolate the last change. Guessing randomly feels active, but it often turns a five-minute issue into an hour of repeated restarts.

## Check the terminal first

The terminal usually tells you the real failure. Look for port conflicts, missing environment variables, syntax errors, dependency issues, unsupported Node versions, or permission problems.

Do not rely only on what the browser shows. A browser error may be the result, not the cause.

Read from the first error line, not only the last line. Many tools print a long stack trace, but the useful message may appear near the top. If the error says a module cannot be found, focus on dependencies or import paths. If it says a variable is undefined, focus on configuration or runtime data. If it says the port is already in use, do not edit application code until the port problem is resolved.

It also helps to copy the exact error message into a note before changing anything. That gives you a stable reference when the error changes after a restart.

## Confirm the port

Make sure the browser is pointed at the same port the dev server printed. If port 3000 is busy, a framework may start on 3001 or another port.

This simple mismatch often looks like changes are not applying.

For example, you may have one server running on `http://localhost:3000` and another on `http://localhost:3001`. If your browser is still open on the old tab, you can refresh forever and never see the new changes. The page is not broken; you are looking at the wrong process.

When in doubt, stop all local servers you started for the project, then start only one. Use the URL printed by the command output. If you use multiple projects at once, rename terminal tabs or keep each project in a separate window so the port owner is obvious.

## Check environment variables

Many local servers fail because a required environment variable is missing or loaded from the wrong file. A site may need an API key, database URL, public site URL, or feature flag before it can render.

Check whether the project expects files like `.env.local`, `.env.development`, or `.env`. Make sure the variable name matches exactly, including prefixes used by the framework. In client-rendered code, some frameworks only expose variables with a specific public prefix. In server code, the variable may exist locally but not in the deployed environment.

Avoid printing secrets into logs while debugging. If you need to confirm that a value exists, log a boolean or the first few non-sensitive characters instead of the entire value.

## Restart with a clean cache

If hot reload stops behaving, stop the server and restart it. If the issue continues, remove the local build cache and start again.

For many JavaScript projects, cache problems are common enough that a clean restart is worth trying early.

A clean restart is especially useful after changing configuration files, dependency versions, routing files, or build settings. Hot reload is good at updating normal source files, but it may not fully reload every kind of project configuration.

Be deliberate when removing caches. Delete only generated folders that the project can rebuild, such as a framework build cache or temporary output directory. Do not delete source files, content files, or local notes just because they happen to be near generated files.

## Verify dependencies and package scripts

If the project worked on another machine or before a pull, dependency drift may be the issue. Confirm that dependencies are installed and that you are using the package manager expected by the repository.

Check the scripts in `package.json` instead of relying on memory. A project might use `npm run dev`, `pnpm dev`, `yarn dev`, or a custom script that sets environment variables before starting. Running the wrong command can produce confusing failures.

Version mismatches matter too. If the project expects a specific Node version, use that version before chasing application bugs. An error caused by runtime incompatibility can look like a framework issue even when the code is fine.

## Isolate the last change

If the server broke after a specific edit, inspect that edit first. Check imports, file names, route names, and syntax around JSX.

The fastest debug path is usually to compare what worked with what changed.

A good isolation process is small and boring. Reopen the files you touched most recently. Look for renamed exports, changed relative paths, misspelled file names, invalid JSON, broken front matter, or markup that no longer closes correctly. If you added a dependency, confirm that it installed successfully. If you changed routing, confirm that the file path matches the framework convention.

If the last change is large, split the investigation. Temporarily comment out the newest section, restart, and see whether the error changes. The goal is not to hide the bug; the goal is to find the smallest piece of code that triggers it.

## A practical debugging order

Use this order when you are stuck:

1. Read the terminal error carefully.
2. Confirm the browser URL and port.
3. Stop duplicate dev servers.
4. Check required environment variables.
5. Restart the server.
6. Clear generated build cache if the error looks stale.
7. Reinstall dependencies if modules are missing.
8. Inspect the last changed files.
9. Run the production build if the dev server error is unclear.

The production build can reveal errors that hot reload hides, especially type errors, invalid static data, and route generation problems.

## Quick checklist

- Read the terminal error.
- Confirm the browser port.
- Check environment variables.
- Restart the dev server.
- Clear the build cache if needed.
- Verify the correct package script.
- Inspect the last changed files.
