export type Article = {
  slug: string;
  title: string;
  description: string;
  category: "AI" | "Developer Tips" | "Productivity";
  publishedAt: string;
  readingTime: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  checklist?: string[];
};

export type ArticleCategory = {
  slug: string;
  label: Article["category"];
  displayLabel: string;
  landingLabel: string;
  title: string;
  description: string;
};

export const articleCategories: ArticleCategory[] = [
  {
    slug: "practical-ai",
    label: "AI",
    displayLabel: "Practical AI",
    landingLabel: "Practical AI",
    title: "Practical AI Articles",
    description:
      "Guides for using AI tools safely and practically in daily work, writing, meetings, and development.",
  },
  {
    slug: "developer-tips",
    label: "Developer Tips",
    displayLabel: "Developer Tips",
    landingLabel: "Developer Tips",
    title: "Developer Tips Articles",
    description:
      "Practical checklists and workflows for building, reviewing, deploying, and maintaining small web projects.",
  },
  {
    slug: "productivity",
    label: "Productivity",
    displayLabel: "Productivity",
    landingLabel: "Productivity",
    title: "Productivity Articles",
    description:
      "Simple systems for planning, organizing information, and turning notes into useful work.",
  },
];

export const articles: Article[] = [
  {
    slug: "how-to-write-better-prompts-for-everyday-work",
    title: "How to Write Better Prompts for Everyday Work",
    description:
      "A practical prompt writing guide for using AI tools in emails, planning, research, and daily work.",
    category: "AI",
    publishedAt: "2026-07-05",
    readingTime: "6 min read",
    intro:
      "Good prompts are not magic words. They are small briefs that tell an AI tool what role to play, what outcome you need, and what constraints matter.",
    sections: [
      {
        heading: "Start with the job, not the tool",
        body: [
          "A weak prompt often starts with a vague command like summarize this or make this better. A stronger prompt starts with the job you are trying to finish. For example, say that you need a client-ready summary, a friendly reply, a risk checklist, or a first draft for a team update.",
          "This gives the AI a target. It also helps you judge the answer. If the job is a client-ready summary, the output should be concise, polished, and careful. If the job is a brainstorm, the output can be wider and rougher.",
        ],
      },
      {
        heading: "Give context in layers",
        body: [
          "You do not need to paste everything at once. Start with the basic situation, then add details only when they change the answer. A useful structure is: goal, audience, input, constraints, and desired format.",
          "For example: I am writing a short update for a non-technical manager. Use the notes below. Keep it under 150 words. Mention blockers first. That prompt is simple, but it gives the model enough shape to produce something useful.",
        ],
      },
      {
        heading: "Ask for the format you will actually use",
        body: [
          "AI output becomes much more valuable when it lands close to your final format. Ask for a table when you need comparison, bullets when you need scanning, a checklist when you need action, or a short paragraph when you need something to send.",
          "If you keep copying output into another document and reorganizing it by hand, the prompt is probably missing a format instruction.",
        ],
      },
      {
        heading: "Add constraints before style",
        body: [
          "Tone matters, but constraints matter more. Before asking for a professional tone, say what must not happen. Examples: do not invent facts, flag uncertain assumptions, keep names unchanged, avoid legal advice, or do not include confidential details.",
          "These instructions reduce cleanup. They also make the response safer when you are using AI for business, code, or research tasks.",
        ],
      },
    ],
    checklist: [
      "State the real task in one sentence.",
      "Name the audience for the output.",
      "Provide only the context that changes the answer.",
      "Ask for the format you will use next.",
      "Tell the AI what to avoid or flag.",
    ],
  },
  {
    slug: "ai-tools-vs-ai-workflows-what-saves-time",
    title: "AI Tools vs AI Workflows: What Actually Saves Time",
    description:
      "Learn why repeatable AI workflows matter more than collecting more AI tools.",
    category: "AI",
    publishedAt: "2026-07-05",
    readingTime: "6 min read",
    intro:
      "Trying a new AI tool can feel productive, but the time savings usually come from repeatable workflows, not from the tool list itself.",
    sections: [
      {
        heading: "A tool is a possibility, a workflow is a habit",
        body: [
          "An AI tool gives you a capability. A workflow tells you when to use it, what input to provide, how to review the output, and where the result goes next. Without that workflow, the tool becomes another tab to remember.",
          "For example, using AI to draft one email is helpful. Using AI every Friday to turn messy notes into a weekly status update is a workflow. The second one saves time because it replaces a repeated task.",
        ],
      },
      {
        heading: "Look for repeated friction",
        body: [
          "The best AI workflows begin with tasks you already repeat. Common examples are meeting summaries, code review preparation, customer support drafts, research notes, job application tailoring, and documentation cleanup.",
          "Do not start by asking what AI can do. Start by asking where your week leaks time. Then design a small workflow around that point.",
        ],
      },
      {
        heading: "Keep a human review step",
        body: [
          "AI workflows should not remove judgment. They should move the boring parts earlier and make review easier. A good workflow produces a draft, list, table, or checklist that a person can inspect quickly.",
          "This is especially important for technical, financial, legal, or health-related topics. If the output could affect a real decision, the workflow should include verification.",
        ],
      },
      {
        heading: "Document your best prompts",
        body: [
          "Once a prompt works, save it. Give it a name, write when to use it, and include a sample input. This turns a one-time trick into a team-friendly process.",
          "A small library of five reliable workflows is more useful than a long list of AI tools you rarely open.",
        ],
      },
    ],
    checklist: [
      "Choose one repeated task.",
      "Define the input and output.",
      "Add a review step.",
      "Save the prompt that worked.",
      "Improve the workflow after real use.",
    ],
  },
  {
    slug: "how-to-use-ai-to-review-code-without-leaking-secrets",
    title: "How to Use AI to Review Code Without Leaking Secrets",
    description:
      "A simple safety checklist for using AI to review code while protecting tokens, customer data, and private context.",
    category: "AI",
    publishedAt: "2026-07-05",
    readingTime: "7 min read",
    intro:
      "AI can help find bugs, explain unfamiliar code, and improve tests. The risk is that code often contains secrets, private business logic, or user data.",
    sections: [
      {
        heading: "Remove secrets before anything else",
        body: [
          "Before pasting code into an AI tool, scan for API keys, tokens, passwords, private URLs, customer names, database dumps, and internal credentials. Even a short config file can reveal more than you intended.",
          "A safer pattern is to replace sensitive values with placeholders such as API_KEY, CUSTOMER_ID, or INTERNAL_URL. The model usually does not need the real value to reason about the code.",
        ],
      },
      {
        heading: "Share the smallest useful slice",
        body: [
          "Do not paste a whole repository when a function, error message, and short explanation are enough. Smaller input reduces privacy risk and often produces a clearer answer.",
          "If the AI needs more context, add it step by step. This also helps you notice when the model is guessing beyond the code you provided.",
        ],
      },
      {
        heading: "Ask for categories of risk",
        body: [
          "A useful review prompt asks the AI to separate issues by severity. For example: identify correctness bugs, security concerns, edge cases, and missing tests. This makes the response easier to evaluate.",
          "You can also ask the model to explain why each issue matters. A good code review finding should connect a line of code to a concrete failure mode.",
        ],
      },
      {
        heading: "Verify every suggestion locally",
        body: [
          "AI suggestions can be plausible and wrong. Run tests, read the diff, and check whether the proposed change fits the project conventions.",
          "Treat the model as a reviewer, not an authority. The final responsibility still belongs to the developer and the team.",
        ],
      },
    ],
    checklist: [
      "Remove credentials and private data.",
      "Paste only the relevant code slice.",
      "Ask for bugs, security, edge cases, and tests separately.",
      "Require explanations for each finding.",
      "Verify every suggestion in your local environment.",
    ],
  },
  {
    slug: "turn-meeting-notes-into-action-items-with-ai",
    title: "How to Turn Meeting Notes Into Action Items With AI",
    description:
      "A practical workflow for converting messy meeting notes into owners, deadlines, decisions, and follow-ups.",
    category: "AI",
    publishedAt: "2026-07-05",
    readingTime: "5 min read",
    intro:
      "Meeting notes are only useful if they become action. AI can help convert rough notes into a clean follow-up, but the prompt needs structure.",
    sections: [
      {
        heading: "Separate facts from tasks",
        body: [
          "Raw notes often mix decisions, questions, context, and action items in the same paragraph. Ask AI to separate these into sections. This makes it easier to see what actually needs to happen.",
          "A useful output format is: decisions made, action items, open questions, risks, and next meeting topics.",
        ],
      },
      {
        heading: "Ask for missing owners and deadlines",
        body: [
          "Do not let the AI invent owners or due dates. Instead, ask it to mark missing fields as unassigned or TBD. That gives you a clean list of gaps to resolve.",
          "This is better than a polished but inaccurate summary. For team work, uncertainty should be visible.",
        ],
      },
      {
        heading: "Create a follow-up message",
        body: [
          "After the action list is clean, ask for a short message you can send to the team. Keep it concise and make the owner/date list easy to scan.",
          "The best follow-up messages are not summaries of everything discussed. They are reminders of what changed and what happens next.",
        ],
      },
      {
        heading: "Store decisions where people can find them",
        body: [
          "AI can help write the summary, but your team still needs a reliable place for records. Put decisions in a project document, issue tracker, or shared workspace.",
          "A meeting workflow is successful when people can find the answer later without asking the same question again.",
        ],
      },
    ],
    checklist: [
      "Paste notes with obvious sensitive details removed.",
      "Ask for decisions, actions, questions, and risks.",
      "Do not allow invented owners or dates.",
      "Generate a short follow-up message.",
      "Store final decisions in the project record.",
    ],
  },
  {
    slug: "developer-checklist-before-deploying-a-small-website",
    title: "Developer Checklist Before Deploying a Small Website",
    description:
      "A practical pre-deploy checklist for small websites covering SEO, accessibility, performance, and trust pages.",
    category: "Developer Tips",
    publishedAt: "2026-07-05",
    readingTime: "7 min read",
    intro:
      "Small websites do not need complicated infrastructure, but they do need a few basics before going public.",
    sections: [
      {
        heading: "Check the public pages first",
        body: [
          "Before tuning anything, click through every public route. Confirm that the home page, about page, privacy page, contact page, sitemap, and robots file load correctly.",
          "Broken links hurt trust quickly. They also make it harder to debug later because you may confuse routing issues with deployment issues.",
        ],
      },
      {
        heading: "Review metadata and titles",
        body: [
          "Every important page should have a clear title and description. The title should identify the page. The description should explain the value in a way a search result can show.",
          "Avoid using the same generic metadata everywhere. Duplicate metadata is not fatal, but it wastes an easy chance to help users and search engines understand the site.",
        ],
      },
      {
        heading: "Test on a narrow screen",
        body: [
          "A page that looks good on a large monitor can still fail on a phone. Check navigation, long words, buttons, headings, and article layouts on a small viewport.",
          "You are looking for overflow, hidden text, impossible tap targets, and sections that require awkward zooming.",
        ],
      },
      {
        heading: "Keep launch simple",
        body: [
          "A small website does not need authentication, dashboards, custom analytics, or a backend on day one. Launch the static version first and add complexity only when there is a real need.",
          "The best early deployment is boring: it builds, routes are static, content is readable, and users can contact you.",
        ],
      },
    ],
    checklist: [
      "Visit every public route.",
      "Check titles and descriptions.",
      "Verify sitemap and robots output.",
      "Test mobile layout.",
      "Run lint and production build.",
    ],
  },
  {
    slug: "simple-seo-checklist-for-new-websites",
    title: "A Simple SEO Checklist for New Websites",
    description:
      "The essential SEO setup for a new website: metadata, indexable pages, sitemap, internal links, and useful content.",
    category: "Developer Tips",
    publishedAt: "2026-07-05",
    readingTime: "6 min read",
    intro:
      "SEO for a new website does not start with tricks. It starts with making pages understandable, indexable, and useful.",
    sections: [
      {
        heading: "Make every page answer a real question",
        body: [
          "Search traffic comes from people trying to solve problems. A page should be clear about the problem it solves, who it is for, and what the reader can do after reading.",
          "If a page only says coming soon, it is not ready for search. If it explains the site purpose, links to useful sections, and gives readers a reason to stay, it is much stronger.",
        ],
      },
      {
        heading: "Use clear titles and descriptions",
        body: [
          "The title should include the topic, not just the brand name. The description should be specific enough that a reader knows what they will get from the page.",
          "Good metadata will not rescue weak content, but weak metadata can hide good content from the right users.",
        ],
      },
      {
        heading: "Create a sitemap and robots file",
        body: [
          "A sitemap helps search engines discover important URLs. A robots file tells crawlers what they can access and where the sitemap is located.",
          "For small static sites, these files are simple and low maintenance. They should be added early, not after the site grows large.",
        ],
      },
      {
        heading: "Add internal links",
        body: [
          "Internal links help readers move through the site and help crawlers understand which pages matter. A home page should link to important sections, and articles should link back to the article index.",
          "Do not rely on search engines to guess your structure. Make the structure visible.",
        ],
      },
    ],
    checklist: [
      "Write a specific page title.",
      "Write a useful meta description.",
      "Add sitemap and robots.",
      "Link important pages from the home page.",
      "Publish content that solves a clear problem.",
    ],
  },
  {
    slug: "what-to-put-on-a-contact-page-for-a-small-website",
    title: "What to Put on a Contact Page for a Small Website",
    description:
      "A small website contact page should be simple, trustworthy, and clear about how people can reach you.",
    category: "Developer Tips",
    publishedAt: "2026-07-05",
    readingTime: "5 min read",
    intro:
      "A contact page is not just a form or email address. It is a trust signal that shows the site is maintained by someone reachable.",
    sections: [
      {
        heading: "Use a real contact method",
        body: [
          "The most important part is simple: provide a working way to reach the site owner or team. A Gmail address is acceptable for an early project if it is clearly connected to the site brand.",
          "Later, a custom domain email can improve brand trust, but it is not required for a useful first version.",
        ],
      },
      {
        heading: "Set expectations",
        body: [
          "Tell visitors what kinds of messages are welcome. Examples include questions, corrections, suggestions, and collaboration ideas.",
          "It also helps to mention that response times may vary. This is honest and avoids promising a support level you cannot maintain.",
        ],
      },
      {
        heading: "Keep the page focused",
        body: [
          "A contact page should not distract users with a complex layout. The goal is to make the next step obvious.",
          "If you add a form later, keep the fields minimal. Name, email, topic, and message are enough for most small websites.",
        ],
      },
      {
        heading: "Link related trust pages",
        body: [
          "Contact, privacy policy, and about pages work together. The contact page shows reachability, the about page explains purpose, and the privacy page explains data handling.",
          "For a new website, these pages create a basic trust foundation before monetization or user accounts are added.",
        ],
      },
    ],
    checklist: [
      "Show a working email address.",
      "Say what messages are welcome.",
      "Avoid unnecessary form fields.",
      "Mention response expectations.",
      "Link from the main navigation.",
    ],
  },
  {
    slug: "a-simple-weekly-planning-system-for-busy-people",
    title: "A Simple Weekly Planning System for Busy People",
    description:
      "A lightweight weekly planning routine for choosing priorities, tracking commitments, and reducing mental clutter.",
    category: "Productivity",
    publishedAt: "2026-07-05",
    readingTime: "6 min read",
    intro:
      "A weekly plan should make the week easier to run. It should not become another complicated system to maintain.",
    sections: [
      {
        heading: "Start with commitments",
        body: [
          "Before choosing goals, list fixed commitments. Meetings, appointments, deadlines, and family obligations shape the real capacity of the week.",
          "This prevents the classic planning mistake: writing a perfect task list for a week that does not actually exist.",
        ],
      },
      {
        heading: "Pick three outcomes",
        body: [
          "Choose three outcomes that would make the week successful. Outcomes are better than vague themes because they describe a finish line.",
          "For example, finish landing page copy is clearer than work on website. Send proposal to client is clearer than business development.",
        ],
      },
      {
        heading: "Block time for the hard work",
        body: [
          "Important tasks need protected time. Put the most demanding work earlier in the day or earlier in the week if possible.",
          "If everything is left for open time, urgent small tasks will usually consume the schedule first.",
        ],
      },
      {
        heading: "End with a short review",
        body: [
          "At the end of the week, review what moved, what stalled, and what should change next week. Keep the review short enough that you will actually do it.",
          "The goal is not perfect productivity. The goal is learning how your time is really being used.",
        ],
      },
    ],
    checklist: [
      "List fixed commitments first.",
      "Choose three weekly outcomes.",
      "Schedule the hardest work.",
      "Keep a small buffer.",
      "Review the week in ten minutes.",
    ],
  },
  {
    slug: "how-to-organize-browser-bookmarks-for-research",
    title: "How to Organize Browser Bookmarks for Research",
    description:
      "A simple bookmark system for saving useful links without creating a messy archive nobody can use.",
    category: "Productivity",
    publishedAt: "2026-07-05",
    readingTime: "5 min read",
    intro:
      "Bookmarks are helpful only when you can find them later. A good system is small, named clearly, and cleaned regularly.",
    sections: [
      {
        heading: "Use fewer folders",
        body: [
          "Deep folder structures feel organized at first, but they often make saving and finding links slower. Start with a few broad folders such as Work, Research, Tools, Reading, and Archive.",
          "If a folder needs many subfolders, that may be a sign you need a separate document or database for that topic.",
        ],
      },
      {
        heading: "Rename saved links",
        body: [
          "Web page titles are often too long, too vague, or full of branding. Rename important bookmarks with the reason you saved them.",
          "A title like CSS container query examples is more useful than a marketing headline from the original page.",
        ],
      },
      {
        heading: "Separate active research from reference",
        body: [
          "Active research links should be easy to access for a short time. Reference links should be stored for later. Mixing these two creates clutter.",
          "Create a temporary folder for current research and clear it after the project ends. Move only the best links into long-term reference.",
        ],
      },
      {
        heading: "Review monthly",
        body: [
          "A bookmark system needs maintenance. Once a month, delete links you no longer need, merge duplicates, and move finished research out of the active area.",
          "The cleanup should be quick. If it takes too long, the system is too complex.",
        ],
      },
    ],
    checklist: [
      "Use a few broad folders.",
      "Rename important bookmarks.",
      "Keep active research separate.",
      "Archive or delete old links.",
      "Review once a month.",
    ],
  },
  {
    slug: "how-to-turn-notes-into-finished-work",
    title: "How to Turn Notes Into Finished Work",
    description:
      "A practical system for moving notes from capture to decisions, drafts, tasks, and published output.",
    category: "Productivity",
    publishedAt: "2026-07-05",
    readingTime: "6 min read",
    intro:
      "Taking notes feels productive, but notes only matter when they help create decisions, actions, or finished work.",
    sections: [
      {
        heading: "Capture without organizing too early",
        body: [
          "During a meeting, reading session, or idea burst, do not spend too much effort sorting everything perfectly. Capture the raw material first.",
          "Over-organizing too early can interrupt thinking. The cleanup step should happen later, when you know what the notes are for.",
        ],
      },
      {
        heading: "Process notes into outcomes",
        body: [
          "After capture, ask what each note should become. Some notes are tasks. Some are decisions. Some are references. Some are ideas for later.",
          "This processing step is where notes become useful. Without it, they become a pile of text that feels important but never changes behavior.",
        ],
      },
      {
        heading: "Create a next action",
        body: [
          "If a note requires work, turn it into a concrete next action. Write the action as a verb: email, review, draft, test, schedule, compare, or publish.",
          "A clear next action lowers friction when you return to the work later.",
        ],
      },
      {
        heading: "Keep source notes linked",
        body: [
          "When notes become a document, task, or article, keep a link back to the source if possible. This helps you verify details and revisit context.",
          "The goal is not to keep every note forever. The goal is to preserve enough context to trust the finished work.",
        ],
      },
    ],
    checklist: [
      "Capture first, organize later.",
      "Sort notes by outcome.",
      "Turn work into next actions.",
      "Link back to useful sources.",
      "Delete notes that no longer serve a purpose.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getCategory(slug: string) {
  return articleCategories.find((category) => category.slug === slug);
}

export function getCategoryByLabel(label: Article["category"]) {
  return articleCategories.find((category) => category.label === label);
}

export function getArticlesByCategory(category: Article["category"]) {
  return articles.filter((article) => article.category === category);
}
