import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  articleCategories,
  getArticlesByCategory,
  getCategory,
} from "../../articles/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articleCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `/categories/${category.slug}`,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(category.label);

  return (
    <main className="min-h-screen bg-[#f7f4ed] px-6 py-12 text-[#191815] sm:px-10 lg:px-16">
      <section className="mx-auto max-w-5xl">
        <Link className="text-sm font-semibold text-[#6f675c]" href="/">
          CoolTips
        </Link>

        <div className="mt-12 max-w-3xl">
          <p className="text-sm font-semibold text-[#e4572e]">
            {category.displayLabel}
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-normal sm:text-6xl">
            {category.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#4f493f]">
            {category.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {categoryArticles.map((article) => (
            <Link
              className="group border-t border-[#191815]/20 py-6"
              href={`/articles/${article.slug}`}
              key={article.slug}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold group-hover:underline">
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

        <Link
          className="mt-10 inline-block text-sm font-semibold text-[#6f675c] hover:text-[#191815]"
          href="/articles"
        >
          View all articles
        </Link>
      </section>
    </main>
  );
}
