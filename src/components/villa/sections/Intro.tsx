import { Reveal } from "@/components/villa/Reveal";
import { stats } from "@/content/villa";

export function Intro() {
  return (
    <section id="villa" className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-end">
        <Reveal className="md:col-span-5">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Die Villa</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
            Wo Ruhe auf
            <br />
            <em className="not-italic text-primary">Eleganz</em> trifft.
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-7 md:pl-12">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Die Villa Royal Resort liegt eingebettet im stillen Lisice und bietet
            Übernachtungs­möglichkeiten mit einem saisonalen Außenpool, einem Garten, einer Terrasse
            und einer Bar. WLAN und ein Privatparkplatz sind ohne Aufpreis verfügbar.
          </p>
          <div className="hairline my-10" />
          <div className="grid grid-cols-3 gap-8">
            {stats.map((s) => (
              <div key={s.u}>
                <div className="font-display text-4xl text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                  {s.u}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
