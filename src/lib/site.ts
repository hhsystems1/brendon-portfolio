export const site = {
  name: "Brendon Curry-Hobbs",
  roleLine: "Full Stack Web Engineer",
  title: "Brendon Curry-Hobbs — Portfolio",
  description:
    "I build premium websites and automation-first systems that ship fast and scale cleanly.",
  location: "Mountain Time (US)",
  email: "brendon1798@gmail.com",
  phone: "", // optional
  socials: {
    github: "https://github.com/hhsystems1",
    linkedin: "",
    x: "",
  },
  resumeUrl: "/resume.pdf", // TODO: upload later
} as const;

export type Site = typeof site;
