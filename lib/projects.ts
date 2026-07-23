export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
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
    imageSrc: "/portfolio/sablona2.png",
    imageAlt: "Náhled webu Clean Cut Barbershop",
  },
];
