export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: "sablona3",
    title: "Barber Elite — prémiový barbershop",
    category: "Barbershop",
    summary:
      "Tmavý, luxusní web pro prémiový barbershop se skutečnými referencemi a rezervací termínů.",
    tags: ["Barbershop", "Prémiový design", "Rezervace"],
    href: "https://webyprovas-cz.github.io/sablona3/",
    imageSrc: "/portfolio/sablona3.png",
    imageAlt: "Náhled webu Barber Elite",
  },
  {
    slug: "sablona1",
    title: "Iron & Oak Barbershop",
    category: "Barbershop",
    summary:
      "Řemeslný barbershop web v syrovém, mužném stylu — střihy, vousy a holení břitvou.",
    tags: ["Barbershop", "Řemeslný styl"],
    href: "https://webyprovas-cz.github.io/sablona1/",
    imageSrc: "/portfolio/sablona1.png",
    imageAlt: "Náhled webu Iron & Oak Barbershop",
  },
  {
    slug: "sablona2",
    title: "Clean Cut Barbershop",
    category: "Barbershop",
    summary:
      "Světlý, moderní barbershop web zaměřený na rodinné balíčky střihů.",
    tags: ["Barbershop", "Světlý design"],
    href: "https://webyprovas-cz.github.io/sablona2/",
    imageSrc: "/portfolio/sablona2.png",
    imageAlt: "Náhled webu Clean Cut Barbershop",
  },
  {
    slug: "website",
    title: "Kadeřnictví Markéta Hloušková",
    category: "Kadeřnictví",
    summary:
      "Rodinný kadeřnický salon na Praze 13 — služby, ceník a online objednávky telefonem.",
    tags: ["Kadeřnictví", "Lokální byznys"],
    href: "https://webyprovas-cz.github.io/website/",
    imageSrc: "/portfolio/website.png",
    imageAlt: "Náhled webu Kadeřnictví Markéta Hloušková",
  },
  {
    slug: "rapunzel",
    title: "Rapunzeli — Kadeřnictví Řeporyje",
    category: "Kadeřnictví",
    summary:
      "Pohádkově laděný web kadeřnictví s důrazem na atmosféru a osobní přístup.",
    tags: ["Kadeřnictví", "Atmosféra"],
    href: "https://webyprovas-cz.github.io/rapunzel/",
    imageSrc: "/portfolio/rapunzel.png",
    imageAlt: "Náhled webu Rapunzeli Kadeřnictví",
  },
];
