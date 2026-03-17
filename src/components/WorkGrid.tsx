import { Reveal } from "@/components/Reveal";

type Project = {
  title: string;
  tagline: string;
  year: string;
  href?: string;
  status?: "Live" | "Private" | "In progress";
  highlights: string[];
};

const projects: Project[] = [
  {
    title: "HelpingHandsSystems-KB",
    tagline: "An automation-first company brain (SOPs, divisions, guardrails).",
    year: "2026",
    status: "Private",
    highlights: ["SOP-first", "Auditability", "Agent-ready"],
  },
  {
    title: "Web Intake + Deployment",
    tagline: "Lead capture + delivery pipeline (form → triage → deploy).",
    year: "2026",
    status: "Live",
    highlights: ["Netlify", "React/Vite", "Fast iteration"],
  },
  {
    title: "Rivryn / Sidekick Direction",
    tagline: "Modular architecture for local-first agents + tooling.",
    year: "2026",
    status: "In progress",
    highlights: ["Local-first", "Modular", "Human-in-loop"],
  },
  {
    title: "Your next case study",
    tagline: "Placeholder — we’ll add the real story, metrics, and screenshots.",
    year: "Soon",
    status: "In progress",
    highlights: ["Problem", "Process", "Result"],
  },
];

export function WorkGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {projects.map((p, idx) => (
        <Reveal key={p.title} delay={idx * 0.06}>
          <article className="group glass rounded-3xl p-6 ring-1 ring-white/10 transition hover:bg-white/[0.08]">
            <header className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/65">{p.tagline}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/55">{p.year}</p>
                {p.status ? (
                  <p className="mt-1 inline-flex rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                    {p.status}
                  </p>
                ) : null}
              </div>
            </header>

            <ul className="mt-5 flex flex-wrap gap-2">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full bg-black/30 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10"
                >
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <p className="mt-4 text-sm text-white/60">
              {p.href ? (
                <a
                  href={p.href}
                  className="text-white/80 underline decoration-white/25 underline-offset-4 hover:text-white"
                >
                  View project →
                </a>
              ) : (
                <span className="text-white/50">Details coming soon.</span>
              )}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
