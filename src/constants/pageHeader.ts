// src/constants/pageHeader.ts

export const pageHeaders = {
  about: {
    title: "About Me",
    description:
      "From self-learning to shipping real-world apps that impact thousands of users.",
  },
  project: {
    title: "Featured Projects",
    description:
      "A showcase of my recent work, from real-time systems to developer tools.",
  },
  offer: {
    title: "What I Offer",
    description:
      "Comprehensive development services to bring your ideas to life.",
  },
  contact: {
    title: "Let's Build Something Cool Together",
    description:
      "Have a project in mind? Let's discuss how we can bring your ideas to life.",
  },
  day: {
    title: "A Day as DevKrish",
    description:
      "From morning coffee to late-night experiments, here's what drives my daily workflow.",
  },
  opensource: {
    title: "Open Source Contributions",
    description:
      "Giving back to the community that helped me grow as a developer.",
  },
  services: {
    title: "What I Offer",
    description:
      "Comprehensive development services to bring your ideas to life.",
  },
} as const

export type PageHeaderKey = keyof typeof pageHeaders
