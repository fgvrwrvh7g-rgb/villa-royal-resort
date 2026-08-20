import { Reveal } from "@/components/villa/Reveal";
import { amenities } from "@/content/villa";

export function Amenities() {
  return (
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
  );
}
