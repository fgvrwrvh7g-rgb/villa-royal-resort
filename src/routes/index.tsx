import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Waves, TreePine, Wifi, Car, ChefHat, Wine, Mountain, Fish,
  MapPin, Plane, ArrowRight, Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-villa.jpg";
import poolImg from "@/assets/pool.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import waterfallImg from "@/assets/waterfall.jpg";
import terraceImg from "@/assets/terrace.jpg";
import { Reveal } from "@/components/villa/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Villa Royal Resort — Luxuriöse Unterkunft mit Poolblick in Lisice" },
      { name: "description", content: "Villa Royal Resort in Lisice: saisonaler Außenpool, Garten, Terrasse und Bar. Nahe Kravica-Wasserfälle. WLAN & Parkplatz inklusive." },
      { property: "og:title", content: "Villa Royal Resort — Lisice, Bosnien" },
      { property: "og:description", content: "Eine elegante Oase mit Pool, Garten und Bar — nur 14 km von den Kravica-Wasserfällen." },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Karla:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Villa,
});

const amenities = [
  { icon: Waves, title: "Saisonaler Außenpool", desc: "Türkisblaues Wasser unter mediterranem Himmel." },
  { icon: TreePine, title: "Garten & Terrasse", desc: "Grüne Rückzugsorte, gemacht für lange Abende." },
  { icon: Wine, title: "Bar", desc: "Hausgemachte Cocktails bei Sonnenuntergang." },
  { icon: Wifi, title: "Kostenfreies WLAN", desc: "Verbunden bleiben — wenn Sie wollen." },
  { icon: Car, title: "Privatparkplatz", desc: "Kostenfrei und sicher direkt vor Ort." },
  { icon: ChefHat, title: "Voll ausgestattete Küche", desc: "Ofen, Mikrowelle, Geschirrspüler, Kaffeemaschine." },
];

const attractions = [
  { icon: Mountain, name: "Kravica-Wasserfälle", distance: "14 km", note: "Smaragdgrüne Becken & rauschendes Wasser." },
  { icon: MapPin, name: "Brücke Stari Most", distance: "42 km", note: "UNESCO-Welterbe in Mostar." },
  { icon: Plane, name: "Flughafen Mostar", distance: "43 km", note: "Bequeme Anreise & Abreise." },
  { icon: Fish, name: "Wandern & Angeln", distance: "vor Ort", note: "Natur direkt vor der Haustür." },
];

function Villa() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="font-display text-lg tracking-wide">Villa Royal Resort</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#villa" className="hover:text-foreground transition">Die Villa</a>
            <a href="#ausstattung" className="hover:text-foreground transition">Ausstattung</a>
            <a href="#umgebung" className="hover:text-foreground transition">Umgebung</a>
            <a href="#kontakt" className="hover:text-foreground transition">Kontakt</a>
          </nav>
          <a href="#kontakt" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-foreground text-background text-sm hover:bg-primary transition">
            Reservieren <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img src={heroImg} alt="Villa Royal Resort bei Sonnenuntergang" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 text-cream/90 mb-6">
              <div className="w-10 h-px bg-gold" />
              <span className="text-xs tracking-[0.3em] uppercase">Lisice · Bosnien & Herzegowina</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] max-w-4xl">
              Eine stille Oase <em className="not-italic text-gold">mit Poolblick.</em>
            </h1>
            <p className="mt-6 max-w-xl text-cream/80 text-lg">
              Sonnenverwöhnte Tage am Pool, mediterrane Abende im Garten — die Villa Royal Resort ist Ihr privater Rückzugsort, nur Minuten von den Kravica-Wasserfällen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#kontakt" className="px-7 py-3.5 rounded-full bg-gold text-foreground font-medium hover:opacity-90 transition shadow-elegant">
                Aufenthalt anfragen
              </a>
              <a href="#villa" className="px-7 py-3.5 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition">
                Die Villa entdecken
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/60 text-xs tracking-widest"
        >
          ↓ SCROLLEN
        </motion.div>
      </section>

      {/* Intro */}
      <section id="villa" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-end">
          <Reveal className="md:col-span-5">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Die Villa</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Wo Ruhe auf<br /><em className="not-italic text-primary">Eleganz</em> trifft.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7 md:pl-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Die Villa Royal Resort liegt eingebettet im stillen Lisice und bietet Übernachtungs­möglichkeiten mit einem saisonalen Außenpool, einem Garten, einer Terrasse und einer Bar. WLAN und ein Privatparkplatz sind ohne Aufpreis verfügbar.
            </p>
            <div className="hairline my-10" />
            <div className="grid grid-cols-3 gap-8">
              {[
                { n: "14", u: "km zu den Wasserfällen" },
                { n: "43", u: "km zum Flughafen" },
                { n: "100%", u: "Privatsphäre" },
              ].map((s) => (
                <div key={s.u}>
                  <div className="font-display text-4xl text-primary">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.u}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery split */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
              <img src={poolImg} alt="Außenpool" loading="lazy" width={1280} height={960} className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="md:mt-24 space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm group">
                <img src={terraceImg} alt="Terrasse mit Bar" loading="lazy" width={1280} height={960} className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
              </div>
              <div className="pl-2">
                <h3 className="font-display text-3xl">Tage im Wasser. Abende unter Lichterketten.</h3>
                <p className="mt-4 text-muted-foreground">
                  Der saisonale Pool öffnet sich zum Garten. Die Terrasse und Bar laden ein, lange zu bleiben — mit einem Glas Wein in der Hand, während die Sonne hinter den Hügeln verschwindet.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Amenities */}
      <section id="ausstattung" className="bg-primary text-primary-foreground py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <span className="text-xs tracking-[0.3em] uppercase text-gold">Ausstattung</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4">Alles, was Sie brauchen.</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10">
            {amenities.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="bg-primary p-10 h-full group hover:bg-primary/70 transition-colors duration-500">
                  <a.icon className="w-7 h-7 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="font-display text-2xl mb-2">{a.title}</h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen feature */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[5/4] overflow-hidden rounded-sm shadow-elegant">
              <img src={kitchenImg} alt="Voll ausgestattete Küche" loading="lazy" width={1280} height={960} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Die Küche</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Kochen wie<br />zu Hause.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Eine voll ausgestattete Küche mit Geschirrspüler, Ofen und Mikrowelle — und einer Kaffeemaschine für den langsamen Morgen auf der Terrasse.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Geschirrspüler", "Ofen & Mikrowelle", "Kaffeemaschine", "Komplettes Geschirr"].map((i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section id="umgebung" className="py-32 px-6 bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-gold">Umgebung</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
                Eingebettet in eine Landschaft, die <em className="not-italic text-primary">erzählt.</em>
              </h2>
              <p className="mt-6 text-muted-foreground">
                Eine Autovermietung steht direkt vor Ort zur Verfügung. Die Natur — zum Wandern, Angeln, Atmen — beginnt bereits am Gartenzaun.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Reveal>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src={waterfallImg} alt="Kravica-Wasserfälle" loading="lazy" width={1280} height={960} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="text-cream text-sm tracking-widest uppercase">Kravica-Wasserfälle</div>
                  <div className="text-gold font-display text-2xl">14 km entfernt</div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-px bg-border">
              {attractions.map((a, i) => (
                <Reveal key={a.name} delay={i * 0.08}>
                  <div className="bg-background p-8 flex items-start gap-6 group hover:bg-cream transition-colors">
                    <a.icon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-2xl">{a.name}</h3>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">{a.distance}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{a.note}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" aria-hidden className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative max-w-3xl mx-auto text-center text-primary-foreground">
          <Reveal>
            <Sparkles className="w-6 h-6 text-gold mx-auto mb-6" />
            <h2 className="font-display text-5xl md:text-6xl leading-tight">
              Ihr Aufenthalt beginnt<br />mit einer Anfrage.
            </h2>
            <p className="mt-6 text-primary-foreground/80 max-w-xl mx-auto">
              Senden Sie uns eine Nachricht und wir antworten innerhalb von 24 Stunden mit Verfügbarkeiten und einem persönlichen Angebot.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a href="mailto:info@villaroyalresort.com" className="px-8 py-4 rounded-full bg-gold text-foreground font-medium hover:opacity-90 transition">
                Verfügbarkeit anfragen
              </a>
              <a href="tel:+387" className="px-8 py-4 rounded-full border border-cream/40 hover:bg-cream/10 transition">
                Anrufen
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="font-display text-base text-foreground">Villa Royal Resort</span>
            <span>· Lisice, Bosnien & Herzegowina</span>
          </div>
          <div>© {new Date().getFullYear()} Villa Royal Resort. Alle Rechte vorbehalten.</div>
        </div>
      </footer>
    </main>
  );
}
