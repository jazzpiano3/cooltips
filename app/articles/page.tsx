import type { Metadata } from "next";
import Link from "next/link";
import { articles, getCategoryByLabel } from "./articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Practical CoolTips articles about AI, developer workflows, and productivity.",
  alternates: {
    canonical: "/articles",
  },
};

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] px-6 py-12 text-[#191815] sm:px-10 lg:px-16">
      <section className="mx-auto max-w-5xl">
        <Link className="text-sm font-semibold text-[#6f675c]" href="/">
          CoolTips
        </Link>

        <div className="mt-12 max-w-3xl">
          <h1 className="text-5xl font-black tracking-normal sm:text-6xl">
            Articles
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#4f493f]">
            Practical guides for using AI, developer habits, and productivity
            systems in everyday work.
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {articles.map((article) => (
            <Link
              className="group border-t border-[#191815]/20 py-6"
              href={`/articles/${article.slug}`}
              key={article.slug}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#e4572e]">
                    {getCategoryByLabel(article.category)?.displayLabel ??
                      article.category}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold group-hover:underline">
                    {article.title}
                  </h2>
                  <p className="mt-3 max-w-3xl leading-7 text-[#4f493f]">
                    {article.description}
                  </p>
                </div>
                <p className="shrink-0 text-sm font-medium text-[#6f675c]">
                  {article.readingTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
