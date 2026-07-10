"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";

const LINKS = [
  { href: "#sluzby", label: "Co děláme" },
  { href: "#reference", label: "Naše práce" },
  { href: "#proces", label: "Jak pracujeme" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-heading text-lg font-bold text-primary">
            CheckWeb Studios
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} CheckWeb Studios. Všechna práva vyhrazena.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <motion.a
          href="#top"
          aria-label="Zpět nahoru"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-muted"
        >
          <ArrowUp size={18} />
        </motion.a>
      </Container>
    </footer>
  );
}
