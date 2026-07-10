export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    slug: "placeholder-1",
    title: "Ukázkový projekt — E-shop",
    category: "E-shop",
    summary: "Zástupná ukázka — bude nahrazena reálnou realizací.",
    tags: ["Next.js", "E-commerce"],
  },
  {
    slug: "placeholder-2",
    title: "Ukázkový projekt — Firemní web",
    category: "Firemní web",
    summary: "Zástupná ukázka — bude nahrazena reálnou realizací.",
    tags: ["Redesign", "SEO"],
  },
  {
    slug: "placeholder-3",
    title: "Ukázkový projekt — Portfolio",
    category: "Portfolio",
    summary: "Zástupná ukázka — bude nahrazena reálnou realizací.",
    tags: ["UI/UX", "Animace"],
  },
  {
    slug: "placeholder-4",
    title: "Ukázkový projekt — Rezervační systém",
    category: "Webová aplikace",
    summary: "Zástupná ukázka — bude nahrazena reálnou realizací.",
    tags: ["Next.js", "Aplikace"],
  },
  {
    slug: "placeholder-5",
    title: "Ukázkový projekt — Landing page",
    category: "Landing page",
    summary: "Zástupná ukázka — bude nahrazena reálnou realizací.",
    tags: ["Konverze", "SEO"],
  },
  {
    slug: "placeholder-6",
    title: "Ukázkový projekt — Restaurace",
    category: "Gastro web",
    summary: "Zástupná ukázka — bude nahrazena reálnou realizací.",
    tags: ["Rezervace", "Responzivní"],
  },
];
