import { waterfallImg } from "@/assets/images";
import { Reveal } from "@/components/villa/Reveal";
import { attractions } from "@/content/villa";

export function Location() {
  return (
    <section id="umgebung" className="py-32 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Umgebung</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Eingebettet in eine Landschaft, die{" "}
              <em className="not-italic text-primary">erzählt.</em>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Eine Autovermietung steht direkt vor Ort zur Verfügung. Die Natur — zum Wandern,
              Angeln, Atmen — beginnt bereits am Gartenzaun.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={waterfallImg}
                alt="Kravica-Wasserfälle"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <div className="text-cream text-sm tracking-widest uppercase">
                  Kravica-Wasserfälle
                </div>
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
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {a.distance}
                      </span>
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
  );
}
