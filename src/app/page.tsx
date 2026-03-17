import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Section } from "@/components/Chrome";
import { WorkGrid } from "@/components/WorkGrid";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <div>
      <Nav />
      <Hero />

      <Section
        id="work"
        eyebrow="Selected"
        title="Work"
        className="relative"
      >
        <WorkGrid />
      </Section>

      <Section id="about" eyebrow="Who" title="About">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="glass rounded-3xl p-7">
              <p className="text-white/75 leading-relaxed">
                I’m {site.name}. I build systems that reduce manual work without
                sacrificing clarity or control—especially in sales + operations
                environments where the details matter.
              </p>
              <p className="mt-4 text-white/65 leading-relaxed">
                This site is a living portfolio. The case studies will get more
                detailed over time (screenshots, metrics, timelines, and
                lessons learned).
              </p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.08}>
            <div className="glass rounded-3xl p-7">
              <p className="text-xs font-medium tracking-[0.22em] text-white/55">
                TOOLBELT
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/75">
                {[
                  "Next.js",
                  "React",
                  "Tailwind",
                  "Netlify",
                  "GitHub",
                  "Automation",
                  "AI workflows",
                  "SOP design",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="services" eyebrow="What I do" title="Services">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              title: "Websites that convert",
              body: "Fast, clean, and intentionally designed—built for real leads, not just aesthetics.",
            },
            {
              title: "Automation-first operations",
              body: "Turn messy workflows into SOPs + tools. Reduce busywork and keep accountability.",
            },
            {
              title: "AI integration (practical)",
              body: "Assistants that produce reviewable artifacts (not magic). Human-in-loop by default.",
            },
          ].map((s) => (
            <Reveal key={s.title}>
              <div className="glass rounded-3xl p-7">
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Next step" title="Contact">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="glass rounded-3xl p-7">
              <p className="text-white/70 leading-relaxed">
                Want to collaborate or hire me? Send a quick note and tell me
                what you’re building.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 ring-soft"
                  href={`mailto:${site.email}`}
                >
                  Email me
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/10"
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>

              <p className="mt-6 text-xs text-white/50">
                Resume: <a className="underline" href={site.resumeUrl}>download</a>
                {" "}(placeholder)
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.08}>
            <div className="glass rounded-3xl p-7">
              <p className="text-xs font-medium tracking-[0.22em] text-white/55">
                DETAILS
              </p>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                <p>
                  <span className="text-white/50">Location:</span> {site.location}
                </p>
                <p>
                  <span className="text-white/50">Email:</span> {site.email}
                </p>
                {site.phone ? (
                  <p>
                    <span className="text-white/50">Phone:</span> {site.phone}
                  </p>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <footer className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px w-full bg-white/10" />
          <p className="mt-6 text-xs text-white/45">
            © {new Date().getFullYear()} {site.name}. Built with Next.js.
          </p>
        </div>
      </footer>
    </div>
  );
}
