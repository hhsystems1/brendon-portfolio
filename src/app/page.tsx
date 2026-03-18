import NavIsland from "@/components/NavIsland";
import Section from "@/components/Section";
import HeroVideo from "@/components/HeroVideo";
import ContactForm from "@/components/ContactForm";
import RevealSection from "@/components/RevealSection";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <div className="relative z-10">
      <NavIsland />

      {/* Bold hero (replace with your actual reel when ready) */}
      <HeroVideo
        videoId="dQw4w9WgXcQ"
        title={`${site.roleLine}`}
        subtitle={
          "I design and build high-converting websites and automation-first workflows that feel premium and ship fast."
        }
        ctaText="Start project"
        ctaHref="#contact"
      />

      <Section id="top" className="pt-6">
        <RevealSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Name", value: site.name },
              { label: "Location", value: site.location },
              { label: "Focus", value: "Web + automation" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl p-6 card">
                <div className="text-sm font-semibold text-primary-emerald">
                  {s.label}
                </div>
                <div className="text-white/80 text-base mt-1">{s.value}</div>
              </div>
            ))}
          </div>
        </RevealSection>
      </Section>

      <Section id="work" className="">
        <RevealSection>
          <div className="text-center mb-16">
            <p className="text-primary-emerald font-semibold mb-3 tracking-wide">
              Portfolio
            </p>
            <h2 className="text-4xl font-bold mb-4">Work</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Selected projects and systems. Full case studies and screenshots
              coming next.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HelpingHandsSystems-KB",
                desc: "Business knowledge base + SOP-first ops brain.",
                tags: ["KB", "SOP", "Automation"],
              },
              {
                title: "Web Intake + Deploy",
                desc: "Lead intake forms + Netlify deployments.",
                tags: ["Netlify", "Next.js", "React"],
              },
              {
                title: "Sidekick / Rivryn Direction",
                desc: "Local-first assistant architecture + modular tooling.",
                tags: ["Agents", "Local-first", "Design"],
              },
              {
                title: "Case Study Placeholder",
                desc: "We’ll add metrics, screenshots, and story later.",
                tags: ["Coming Soon"],
              },
              {
                title: "Case Study Placeholder",
                desc: "We’ll add metrics, screenshots, and story later.",
                tags: ["Coming Soon"],
              },
              {
                title: "Case Study Placeholder",
                desc: "We’ll add metrics, screenshots, and story later.",
                tags: ["Coming Soon"],
              },
            ].map((p) => (
              <div key={p.title} className="card p-8 group cursor-pointer">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-emerald transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-primary-emerald/10 text-primary-emerald rounded-full border border-primary-emerald/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </Section>

      <Section id="about">
        <RevealSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-primary-emerald font-semibold tracking-wide">
                // About
              </p>
              <h2 className="text-4xl font-bold">{site.name}</h2>
              <p className="text-xl text-white/80 leading-relaxed">
                {site.org.role} at {site.org.name}. {site.roleLine} based in {site.location}.
              </p>
              <p className="text-white/70 leading-relaxed">
                I build high-converting websites and product UI—then I connect them
                to automations so the business actually runs.
              </p>
              <p className="text-white/70 leading-relaxed">
                Education: {site.education.school} · {site.education.credential}
              </p>
              <p className="text-white/70 leading-relaxed">
                This portfolio is a living system: projects, deliverables, and results
                will be added continuously.
              </p>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind",
                  "Netlify",
                  "GitHub",
                  "Automation",
                  "AI workflows",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white/5 rounded-xl p-4 border border-primary-emerald/10 hover:border-primary-emerald/30 transition-colors"
                  >
                    <div className="text-white/90 font-medium">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>
      </Section>

      <Section id="services">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            What I can build and ship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Websites that convert",
              desc: "Fast, modern, and built to generate real leads.",
            },
            {
              title: "Automation-first operations",
              desc: "SOPs + tooling that removes busywork and keeps accountability.",
            },
            {
              title: "Practical AI integration",
              desc: "Assistants that produce reviewable work. Human-in-loop by default.",
            },
          ].map((s) => (
            <div key={s.title} className="card p-8">
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-white/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" className="pb-32">
        <RevealSection>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <p className="text-primary-emerald font-semibold tracking-wide">
                // Get in touch
              </p>
              <h2 className="text-4xl font-bold">Ready to work?</h2>
              <p className="text-xl text-white/70">
                Send details here and I’ll reply within 24 hours.
              </p>

              <div className="glass rounded-3xl p-7">
                <p className="text-sm text-white/70">
                  Email
                </p>
                <a
                  className="mt-2 block text-lg font-semibold text-white hover:text-primary-emerald transition-colors"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={site.socials.github} target="_blank" rel="noreferrer" className="btn">
                    GitHub (@Brendonc-h)
                  </a>
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    LinkedIn
                  </a>
                  <a href={site.resumeUrl} className="btn">
                    Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-2">Start Project</h3>
              <p className="text-white/60 mb-6">
                Provide as many details as you can.
              </p>
              <ContactForm />
            </div>
          </div>
        </RevealSection>
      </Section>

      <footer className="py-10 px-6 text-center text-white/50 relative z-10">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  );
}
