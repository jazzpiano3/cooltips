import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the CoolTips privacy policy, including what information may be collected and how it may be used.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] px-6 py-12 text-[#191815] sm:px-10 lg:px-16">
      <article className="mx-auto max-w-3xl">
        <Link className="text-sm font-semibold text-[#6f675c]" href="/">
          CoolTips
        </Link>

        <h1 className="mt-12 text-5xl font-black tracking-normal sm:text-6xl">
          Privacy Policy
        </h1>

        <div className="mt-10 space-y-8 text-base leading-7 text-[#4f493f]">
          <section>
            <h2 className="text-xl font-bold text-[#191815]">
              Information We Collect
            </h2>
            <p className="mt-3">
              CoolTips currently does not require user accounts or collect
              personal information directly through forms. Basic technical
              information may be processed by hosting, analytics, or security
              services when you visit the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#191815]">
              How Information Is Used
            </h2>
            <p className="mt-3">
              Information may be used to operate the website, understand site
              performance, improve content, prevent abuse, and maintain a safe
              browsing experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#191815]">
              Third-Party Services
            </h2>
            <p className="mt-3">
              CoolTips may use third-party services such as hosting providers,
              analytics tools, search tools, or advertising networks. These
              services may process data according to their own privacy
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#191815]">Contact</h2>
            <p className="mt-3">
              For privacy questions, contact us through the{" "}
              <Link className="font-semibold text-[#191815]" href="/contact">
                contact page
              </Link>
              .
            </p>
          </section>

          <p className="border-t border-[#191815]/20 pt-6 text-sm text-[#6f675c]">
            Last updated: July 5, 2026
          </p>
        </div>
      </article>
    </main>
  );
}
