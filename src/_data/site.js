export default {
  title: "Redfearn Group",
  name: "Brady Redfearn",
  tagline: "AI Systems That Ship, and Hold Up Under Scrutiny",
  url: "https://redfearn.group",
  description:
    "Brady Redfearn builds AI products and the governance to back them up. 20+ years shipping systems in the rooms where legal, security, and the board all get a vote.",
  email: "brady@redfearn.group",
  linkedin: "https://linkedin.com/in/redfearnb/",
  github: "https://github.com/redfearn-group",
  scholar: "https://scholar.google.com/citations?user=SQKgljkAAAAJ",
  // Not a profile Brady maintains, so it is never surfaced as a link for
  // humans. It earns its place as a persistent identifier: schema.org @id
  // and sameAs, which is what lets search engines resolve the ACM DOIs, the
  // Scholar profile, and this site to one person.
  orcid: "https://orcid.org/0000-0003-3074-2083",
  researchgate: "https://www.researchgate.net/profile/Brady-Redfearn",
  x: "https://x.com/redfearnb",
  location: "Spanish Fork, UT",
  region: "Utah County, Utah",
  founded: 2014,
  nav: [
    { label: "Work", url: "/work/" },
    { label: "Frameworks", url: "/frameworks/" },
    { label: "Insights", url: "/insights/" },
    { label: "Reports", url: "/reports/" },
    { label: "Publications", url: "/publications/" },
    { label: "About", url: "/about/" },
    { label: "Contact", url: "/contact/" },
  ],
  // Eyebrow labels for the publications collection. Lives here so the listing
  // page and the detail layout cannot drift apart.
  pubTypes: {
    dissertation: "PhD Dissertation",
    thesis: "Master's Thesis",
    "conference-paper": "Conference Paper",
    "extended-abstract": "Extended Abstract",
    talk: "Conference Talk",
  },
};
