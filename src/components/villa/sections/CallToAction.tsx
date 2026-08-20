import { Sparkles } from "lucide-react";

import { heroImg } from "@/assets/images";
import { Reveal } from "@/components/villa/Reveal";
import { site } from "@/config/site";

export function CallToAction() {
  return (
    <section id="kontakt" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="relative max-w-3xl mx-auto text-center text-primary-foreground">
        <Reveal>
          <Sparkles className="w-6 h-6 text-gold mx-auto mb-6" />
          <h2 className="font-display text-5xl md:text-6xl leading-tight">
            Ihr Aufenthalt beginnt
            <br />
            mit einer Anfrage.
          </h2>
          <p className="mt-6 text-primary-foreground/80 max-w-xl mx-auto">
            Senden Sie uns eine Nachricht und wir antworten innerhalb von 24 Stunden mit
            Verfügbarkeiten und einem persönlichen Angebot.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gold text-foreground font-medium hover:opacity-90 transition"
            >
              Verfügbarkeit anfragen
            </a>
            <a
              href={site.phone.href}
              className="px-8 py-4 rounded-full border border-cream/40 hover:bg-cream/10 transition"
            >
              {site.phone.display}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
