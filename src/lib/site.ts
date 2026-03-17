export const site = {
  name: "Brendon Curry-Hobbs",
  title: "Brendon Curry-Hobbs — Portfolio",
  description:
    "Builder of automation-first systems, modern web experiences, and practical AI workflows.",
  location: "Mountain Time (US)",
  email: "info@helpinghandsystems.com", // TODO: replace with your personal email
  phone: "+1 833-785-1847", // TODO: optional
  socials: {
    github: "https://github.com/hhsystems1",
    linkedin: "",
    x: "",
  },
  resumeUrl: "/resume.pdf", // TODO: add later
} as const;

export type Site = typeof site;
