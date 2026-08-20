import { kitchenImg } from "@/assets/images";
import { Reveal } from "@/components/villa/Reveal";
import { kitchenFeatures } from "@/content/villa";

export function Kitchen() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative aspect-[5/4] overflow-hidden rounded-sm shadow-elegant">
            <img
              src={kitchenImg}
              alt="Voll ausgestattete Küche"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Die Küche</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            Kochen wie
            <br />
            zu Hause.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Eine voll ausgestattete Küche mit Geschirrspüler, Ofen und Mikrowelle — und einer
            Kaffeemaschine für den langsamen Morgen auf der Terrasse.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {kitchenFeatures.map((i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                {i}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
