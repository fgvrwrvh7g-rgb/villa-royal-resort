import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { heroImg } from "@/assets/images";
import { site } from "@/config/site";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[640px] overflow-hidden">
      <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Villa Royal Resort bei Sonnenuntergang"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </motion.div>

      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 text-cream/90 mb-6">
            <div className="w-10 h-px bg-gold" />
            <span className="text-xs tracking-[0.3em] uppercase">
              Lisice · Bosnien & Herzegowina
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[0.95] max-w-4xl">
            Eine stille Oase <em className="not-italic text-gold">mit Poolblick.</em>
          </h1>
          <p className="mt-6 max-w-xl text-cream/80 text-lg">
            Sonnenverwöhnte Tage am Pool, mediterrane Abende im Garten — die Villa Royal Resort ist
            Ihr privater Rückzugsort, nur Minuten von den Kravica-Wasserfällen.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-gold text-foreground font-medium hover:opacity-90 transition shadow-elegant"
            >
              Aufenthalt anfragen
            </a>
            <a
              href="#villa"
              className="px-7 py-3.5 rounded-full border border-cream/40 text-cream hover:bg-cream/10 transition"
            >
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
  );
}
