import NavIsland from "@/components/NavIsland";
import Section from "@/components/Section";
import { site } from "@/lib/site";

export default function Page() {
  return (
    <div className="relative z-10">
      <NavIsland />

      <Section id="top" className="pt-32 sm:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {site.name}
                <span className="block bg-gradient-to-r from-primary-emerald via-primary-blue to-primary-lime bg-clip-text text-transparent">
                  Builder. Automator. Web Dev.
                </span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-xl">
                {site.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#work" className="btn btn-primary">
                View Work
              </a>
              <a href="#contact" className="btn">
                Contact
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { label: "Focus", value: "Automation + Web" },
                { label: "Style", value: "Modern, clean" },
                { label: "Delivery", value: "Fast + auditable" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4">
                  <div className="text-sm font-semibold text-primary-emerald">
                    {s.label}
                  </div>
                  <div className="text-white/80 text-sm">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-3xl p-8 card">
              <h2 className="text-2xl font-bold mb-6">Quick Overview</h2>
              <div className="space-y-4">
                {["Work", "About", "Services", "Contact", "Resume"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between py-3 border-b border-white/10"
                    >
                      <span className="text-white/90 font-medium">{item}</span>
                      <span className="text-primary-emerald text-sm">→</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="work" className="">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Work</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Selected projects and systems. Case study details will be added over time.
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
      </Section>

      <Section id="about">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              I’m {site.name}. I build systems that reduce manual work without sacrificing clarity.
            </p>
            <p className="text-white/70 leading-relaxed">
              This portfolio is a living system—expect more detailed writeups, visuals, and results as we ship.
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Next.js",
                "React",
                "Tailwind",
                "Netlify",
                "GitHub",
                "Automation",
                "AI workflows",
                "SOP design",
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
        <div className="glass rounded-3xl p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Let’s work</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Want to collaborate? Send a quick note and tell me what you’re building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              Email me
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>
            <a href={site.resumeUrl} className="btn">
              Resume
            </a>
          </div>
        </div>
      </Section>

      <footer className="py-10 px-6 text-center text-white/50 relative z-10">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  );
}
