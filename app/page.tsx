const topics = [
  "Practical AI",
  "Developer Tips",
  "Productivity Tools",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ed] text-[#191815]">
      <section className="relative flex min-h-screen items-center px-6 py-10 sm:px-10 lg:px-16">
        <div className="absolute inset-x-0 top-0 h-2 bg-[#191815]" />
        <div className="absolute right-0 top-0 hidden h-full w-[42%] border-l border-[#191815]/10 bg-[linear-gradient(90deg,rgba(25,24,21,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(25,24,21,0.08)_1px,transparent_1px)] bg-[size:28px_28px] lg:block" />
        <div className="absolute bottom-8 right-6 hidden h-52 w-52 rounded-full border border-[#191815]/15 xl:block" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#6f675c]">
            Coming Soon
          </p>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="text-[clamp(4.25rem,13vw,12rem)] font-black leading-[0.78] tracking-normal">
                Cool
                <br />
                Tips
              </h1>
            </div>

            <div className="max-w-xl lg:pb-4">
              <div className="h-px w-full bg-[#191815]" />
              <ul className="divide-y divide-[#191815]/20">
                {topics.map((topic) => (
                  <li
                    className="flex items-center justify-between gap-6 py-5 text-2xl font-semibold sm:text-3xl"
                    key={topic}
                  >
                    <span>{topic}</span>
                    <span className="h-3 w-3 shrink-0 rounded-full bg-[#e4572e]" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between gap-6 border-t border-[#191815]/20 pt-6 text-sm font-medium text-[#6f675c]">
            <span>AI workflows for builders</span>
            <span>Launch in progress</span>
          </div>
        </div>
      </section>
    </main>
  );
}
