import { bedroomImg, bedroom2Img, gardenImg, poolImg } from "@/assets/images";
import { Reveal } from "@/components/villa/Reveal";

export function Gallery() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold">Galerie</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4">Einblicke in die Villa.</h2>
            </div>
            <p className="max-w-sm text-muted-foreground">
              Helle Zimmer, ein üppiger Garten und ein Pool, der den ganzen Tag in der Sonne liegt.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[560px]">
          <Reveal className="col-span-2 row-span-2">
            <div className="relative w-full h-full overflow-hidden rounded-sm group">
              <img
                src={bedroomImg}
                alt="Schlafzimmer mit Wohnbereich"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative w-full h-full overflow-hidden rounded-sm group">
              <img
                src={gardenImg}
                alt="Garten"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative w-full h-full overflow-hidden rounded-sm group">
              <img
                src={bedroom2Img}
                alt="Schlafzimmer mit Fenster"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2} className="col-span-2">
            <div className="relative w-full h-full overflow-hidden rounded-sm group">
              <img
                src={poolImg}
                alt="Pool mit Sonnenschirmen"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
