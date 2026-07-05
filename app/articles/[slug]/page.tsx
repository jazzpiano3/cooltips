import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, getCategoryByLabel } from "../articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      url: `/articles/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f4ed] px-6 py-12 text-[#191815] sm:px-10 lg:px-16">
      <article className="mx-auto max-w-3xl">
        <Link className="text-sm font-semibold text-[#6f675c]" href="/articles">
          Articles
        </Link>

        <header className="mt-12 border-b border-[#191815]/20 pb-10">
          <p className="text-sm font-semibold text-[#e4572e]">
            {getCategoryByLabel(article.category)?.displayLabel ??
              article.category}
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#4f493f]">
            {article.intro}
          </p>
          <p className="mt-6 text-sm font-medium text-[#6f675c]">
            Published {article.publishedAt} · {article.readingTime}
          </p>
        </header>

        <div className="mt-10 space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-lg leading-8 text-[#4f493f]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          {article.checklist ? (
            <section className="border-t border-[#191815]/20 pt-8">
              <h2 className="text-2xl font-bold">Quick checklist</h2>
              <ul className="mt-4 space-y-3 text-lg leading-8 text-[#4f493f]">
                {article.checklist.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#e4572e]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </article>
    </main>
  );
}
