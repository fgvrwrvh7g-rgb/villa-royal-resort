import { poolImg, terraceImg } from "@/assets/images";
import { Reveal } from "@/components/villa/Reveal";

export function PoolSplit() {
  return (
    <section className="px-6 pb-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
            <img
              src={poolImg}
              alt="Außenpool"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="md:mt-24 space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm group">
              <img
                src={terraceImg}
                alt="Terrasse mit Bar"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
              />
            </div>
            <div className="pl-2">
              <h3 className="font-display text-3xl">
                Tage im Wasser. Abende unter Lichterketten.
              </h3>
              <p className="mt-4 text-muted-foreground">
                Der saisonale Pool öffnet sich zum Garten. Die Terrasse und Bar laden ein, lange zu
                bleiben — mit einem Glas Wein in der Hand, während die Sonne hinter den Hügeln
                verschwindet.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
