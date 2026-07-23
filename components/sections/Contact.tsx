"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/seo";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Poptávka webu od ${form.name || "webu CheckWeb Studios"}`);
    const body = encodeURIComponent(
      `Jméno: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="kontakt" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Kontakt"
          title="Pojďme společně vytvořit váš web"
          description="Napište nám pár slov o projektu, ozveme se vám do 48 hodin."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-secondary transition-colors hover:text-accent"
              >
                <Mail size={20} className="text-accent" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-3 text-secondary transition-colors hover:text-accent"
              >
                <Phone size={20} className="text-accent" />
                {siteConfig.phone}
              </a>
              <div className="flex items-center gap-3 text-secondary">
                <MapPin size={20} className="text-accent" />
                Česká republika
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-secondary">
                    Jméno
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-secondary">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="mt-1.5 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-secondary">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="mt-1.5 w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full sm:w-auto">
                Odeslat poptávku
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
