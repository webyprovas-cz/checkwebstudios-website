export const siteConfig = {
  name: "CheckWeb Studios",
  title: "CheckWeb Studios — Tvorba moderních webových stránek",
  description:
    "CheckWeb Studios je webdesignová agentura, která navrhuje a vyvíjí moderní, rychlé a SEO optimalizované webové stránky a e-shopy na míru.",
  url: "https://www.checkwebstudios.cz",
  email: "info@checkwebstudios.cz",
  keywords: [
    "tvorba webových stránek",
    "webdesign",
    "webová agentura",
    "UI/UX design",
    "e-shop na míru",
    "SEO optimalizace",
    "redesign webu",
  ],
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  areaServed: "CZ",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CZ",
  },
  sameAs: [] as string[],
};
