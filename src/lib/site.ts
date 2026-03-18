export const site = {
  name: "Brendon Curry-Hobbs",
  roleLine: "Full Stack Web Engineer",
  title: "Brendon Curry-Hobbs — Portfolio",
  description:
    "Founding member at Helping Hands Systems. I build premium websites and automation-first systems that ship fast and scale cleanly.",
  location: "Colorado (Mountain Time)",
  email: "brendon1798@gmail.com",
  phone: "", // optional
  socials: {
    github: "https://github.com/Brendonc-h",
    linkedin: "", // TODO
    x: "", // TODO
  },
  resumeUrl: "/resume.pdf", // TODO: upload later
  education: {
    school: "University of Denver",
    credential: "Full Stack Web Development Certificate",
  },
  org: {
    name: "Helping Hands Systems",
    role: "Founding member",
  },
} as const;

export type Site = typeof site;
