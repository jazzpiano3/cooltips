import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CoolTips for questions, corrections, suggestions, and partnership inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] px-6 py-12 text-[#191815] sm:px-10 lg:px-16">
      <article className="mx-auto max-w-3xl">
        <Link className="text-sm font-semibold text-[#6f675c]" href="/">
          CoolTips
        </Link>

        <h1 className="mt-12 text-5xl font-black tracking-normal sm:text-6xl">
          Contact
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-8 text-[#4f493f]">
          <p>
            Have a question, correction, suggestion, or collaboration idea?
            CoolTips welcomes practical feedback that can make the site more
            useful for readers.
          </p>
          <p>
            Email:{" "}
            <a
              className="font-semibold text-[#191815]"
              href="mailto:cooltips_kr@gmail.com"
            >
              cooltips_kr@gmail.com
            </a>
          </p>
          <p>
            Response times may vary while the site is in its early launch
            phase.
          </p>
        </div>
      </article>
    </main>
  );
}
