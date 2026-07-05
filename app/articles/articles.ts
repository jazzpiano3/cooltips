import fs from "node:fs";
import path from "node:path";

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

const articlesDirectory = path.join(process.cwd(), "content/articles");

function parseFrontmatter(markdown: string) {
  const frontmatterMatch = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!frontmatterMatch) {
    throw new Error("Article is missing frontmatter.");
  }

  const [, frontmatter, content] = frontmatterMatch;
  const metadata = Object.fromEntries(
    frontmatter.split("\n").map((line) => {
      const separatorIndex = line.indexOf(":");
      const key = line.slice(0, separatorIndex).trim();
      const value = line
        .slice(separatorIndex + 1)
        .trim()
        .replace(/^"|"$/g, "");

      return [key, value];
    }),
  );

  return { metadata, content: content.trim() };
}

function splitParagraphs(markdown: string) {
  return markdown
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function parseArticleContent(markdown: string) {
  const parts = markdown.split(/^## /m);
  const intro = splitParagraphs(parts[0]).join("\n\n");
  const sections: Article["sections"] = [];
  let checklist: string[] | undefined;

  for (const part of parts.slice(1)) {
    const [headingLine, ...bodyLines] = part.split("\n");
    const heading = headingLine.trim();
    const body = bodyLines.join("\n").trim();

    if (heading === "Quick checklist") {
      checklist = body
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.startsWith("- "))
        .map((line) => line.slice(2));
      continue;
    }

    sections.push({
      heading,
      body: splitParagraphs(body),
    });
  }

  return { intro, sections, checklist };
}

function readArticle(categorySlug: string, fileName: string): Article {
  const slug = fileName.replace(/\.md$/, "");
  const markdown = fs.readFileSync(
    path.join(articlesDirectory, categorySlug, fileName),
    "utf8",
  );
  const { metadata, content } = parseFrontmatter(markdown);
  const { intro, sections, checklist } = parseArticleContent(content);

  return {
    slug,
    title: metadata.title,
    description: metadata.description,
    category: metadata.category as Article["category"],
    publishedAt: metadata.publishedAt,
    readingTime: metadata.readingTime,
    intro,
    sections,
    checklist,
  };
}

export const articles: Article[] = articleCategories.flatMap((category) => {
  const directory = path.join(articlesDirectory, category.slug);

  return fs
    .readdirSync(directory)
    .filter((fileName) => fileName.endsWith(".md"))
    .sort()
    .map((fileName) => readArticle(category.slug, fileName));
});

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
