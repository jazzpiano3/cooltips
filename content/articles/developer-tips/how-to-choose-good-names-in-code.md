---
title: "How to Choose Good Names in Code"
description: "A practical guide to naming variables, functions, files, and product concepts so code is easier to read, review, and maintain."
category: "Developer Tips"
publishedAt: "2026-07-05"
readingTime: "8 min read"
---

Good names reduce the amount of guessing a reader has to do. They are one of the cheapest ways to make code easier to maintain because they improve every future read of the same file.

Naming is not about sounding clever. A good name tells the next developer what the thing means in this specific program. That developer might be a teammate, a reviewer, or you three months later after the details have faded.

## Name the role, not the type

A name like data, item, or value often describes the type of thing, not what it means. A better name explains the role in the current logic.

For example, pendingInvoices is more helpful than items. selectedCategory is more helpful than value. The reader should not need to inspect five lines to learn the purpose.

Generic names are not always wrong. In a tiny callback, `item` may be fine if the surrounding context is obvious. The problem starts when generic names survive in important logic. A function that receives `data`, transforms it into `result`, then returns `output` forces the reader to reverse-engineer the intention.

Ask what role the value plays:

- Is it selected by the user?
- Is it waiting to be saved?
- Is it already validated?
- Is it the default value or the current value?
- Is it public content or internal configuration?

Those answers create names like `selectedPlan`, `pendingComment`, `validatedEmail`, `defaultSort`, or `publicArticles`.

## Use consistent vocabulary

If the product says article, do not randomly switch between post, entry, item, and content in the code. Different words imply different concepts.

Consistency is especially important across routes, database fields, UI labels, and helper functions.

This matters more as a project grows. If the navigation says "articles", the route uses `/posts`, the database field says `entries`, and the component is called `ContentList`, every future change becomes a small translation exercise. The code may work, but it asks the reader to remember that four words mean the same thing.

Choose one vocabulary set and use it everywhere unless there is a real domain difference. If "article" and "post" mean different things, document the difference. If they do not, pick one and rename the rest gradually.

## Match the level of detail to the scope

The wider the scope, the more descriptive the name should be. A loop variable inside three lines can be short. A function exported from a module should explain its job clearly. A file name should be understandable when seen in a folder list.

For example:

- `i` can be acceptable inside a simple numeric loop.
- `article` is clearer than `a` inside rendering code.
- `getPublishedArticles` is clearer than `getData` for an exported helper.
- `article-card.tsx` is easier to scan than `card.tsx` in a shared folder.

Short names are useful when the context is extremely local. Long names are useful when the reader sees the name without the implementation nearby.

## Avoid clever abbreviations

Short names are useful in tiny scopes, but abbreviations can become expensive when they spread. A future reader may not know what cfg, usr, or calcResp means.

Favor boring clarity. Code is read many more times than it is written.

Abbreviations are safer when they are common in the domain. `URL`, `API`, `HTML`, and `ID` are widely understood. Project-specific abbreviations are riskier. If only one person knows what `rptCfg` means, the name is saving a few keystrokes by spending everyone else's attention.

Autocomplete has also changed the trade-off. Developers no longer need to keep names extremely short to type quickly. A descriptive name that autocompletes is usually better than a compact name that must be decoded.

## Name functions by the promise they make

A function name should tell the reader what the function does, not how it happens internally. If a function validates, name it like validation. If it fetches data, name it like fetching. If it formats display text, name it like formatting.

Useful patterns include:

- `getPublishedArticles`
- `formatReadingTime`
- `validateEmailAddress`
- `createSitemapEntry`
- `isExternalLink`

Be careful with names that overpromise. A function called `saveUser` should actually save the user or clearly throw if it cannot. A function called `getActiveSubscription` should not quietly create a subscription as a side effect. Names are part of the contract.

## Avoid names that hide uncertainty

Some values are guesses, fallbacks, or optional data. The name should not make them sound more certain than they are.

For example, `userEmail` sounds like a confirmed email. If the value comes from an untrusted form field, `emailInput` or `submittedEmail` may be clearer. If a value may be missing, `optionalAvatarUrl` or `avatarUrl` with a clear type can help the reader handle it carefully.

Good names make invalid states more visible. They also reduce the chance that someone uses a value before it has been checked.

## Rename when understanding improves

Names often start rough because the concept is still forming. When the code becomes clearer, update the names to match the better understanding.

Renaming is not cosmetic when it makes future changes safer and faster.

Many naming improvements happen after the first working version. Early in a feature, you may not know whether something is a category, tag, topic, collection, or section. Once the behavior becomes clear, rename the code to match the concept.

Small renames are often worth doing during nearby work. If you are already changing a file and a confusing name is slowing you down, improve it while the context is fresh. For larger renames across many files, make the rename a separate change so reviewers can verify it easily.

## Quick checklist

- Name the role in the logic.
- Use product vocabulary consistently.
- Avoid unclear abbreviations.
- Keep short names for tiny scopes.
- Match detail to scope.
- Name functions by their promise.
- Do not hide uncertainty.
- Rename when the concept becomes clearer.
