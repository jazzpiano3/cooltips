import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn what CoolTips is building and why the site focuses on practical AI, developer, and productivity knowledge.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] px-6 py-12 text-[#191815] sm:px-10 lg:px-16">
      <article className="mx-auto max-w-3xl">
        <Link className="text-sm font-semibold text-[#6f675c]" href="/">
          CoolTips
        </Link>

        <h1 className="mt-12 text-5xl font-black tracking-normal sm:text-6xl">
          About CoolTips
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-8 text-[#4f493f]">
          <p>
            CoolTips is a practical knowledge website for people who want to
            use AI, developer workflows, and productivity systems in everyday
            work.
          </p>
          <p>
            The goal is simple: publish clear, useful, and trustworthy guides
            that help readers save time, solve problems, and make better
            decisions with modern tools.
          </p>
          <p>
            The site is starting small with AI tips, developer tips, and
            productivity content. Over time, CoolTips will grow into a
            collection of guides, utilities, calculators, and lightweight web
            tools.
          </p>
        </div>
      </article>
    </main>
  );
}
