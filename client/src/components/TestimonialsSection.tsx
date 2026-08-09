/* ============================================================
   TestimonialsSection — Testimonianze studenti
   Sfondo oliva scuro con cards crema, stelle, bandiere
   ============================================================ */
import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    country: "🇬🇧 Regno Unito",
    level: "B2",
    text: "Ho iniziato da zero e in un anno sono riuscita a sostenere un colloquio di lavoro in italiano. Il metodo è straordinariamente efficace: si parla dall'inizio, senza paura.",
    stars: 5,
  },
  {
    name: "Hiroshi Tanaka",
    country: "🇯🇵 Giappone",
    level: "B1",
    text: "Stavo studiando italiano da solo per anni senza progressi reali. Dopo sei mesi di lezioni ho finalmente capito come funziona la lingua. La pazienza e la chiarezza dell'insegnante sono eccezionali.",
    stars: 5,
  },
  {
    name: "María García",
    country: "🇪🇸 Spagna",
    level: "C1",
    text: "Ho superato l'esame CILS C1 al primo tentativo. La preparazione è stata meticolosa e mirata. Ogni sessione era perfettamente calibrata sui miei punti deboli.",
    stars: 5,
  },
  {
    name: "Thomas Bauer",
    country: "🇩🇪 Germania",
    level: "A2",
    text: "Mi sono trasferito a Milano per lavoro e avevo bisogno di imparare l'italiano in fretta. Le lezioni online mi hanno permesso di iniziare prima ancora di arrivare in Italia.",
    stars: 5,
  },
  {
    name: "Amina Diallo",
    country: "🇫🇷 Francia",
    level: "B1",
    text: "Adoro il modo in cui vengono usati film e musica italiana nelle lezioni. Non sembra studiare, sembra scoprire una cultura. L'italiano ora fa parte della mia vita quotidiana.",
    stars: 5,
  },
  {
    name: "James O'Brien",
    country: "🇺🇸 Stati Uniti",
    level: "A1→B1",
    text: "In 18 mesi sono passato da 'ciao' a conversazioni complete. L'insegnante ha sempre trovato il modo di rendere ogni argomento interessante e rilevante per me.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonianze"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#3D4A2E] relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#C4622D]/10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#C4622D]/5 translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C4622D]" />
            <span className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#C4622D]">
              Testimonianze
            </span>
            <div className="h-px w-10 bg-[#C4622D]" />
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-[#F5EDD6] mb-4">
            Le parole dei miei studenti
          </h2>
          <p className="reveal font-body text-[#F5EDD6]/65 text-lg max-w-xl mx-auto">
            Studenti da tutto il mondo che hanno scelto di imparare l'italiano con me.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal bg-[#F5EDD6] rounded-sm p-6 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="text-[#C4622D]/30 absolute top-4 right-4"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.stars)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[#B8860B] text-[#B8860B]" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-[#3D4A2E]/80 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-[#C4622D]/15">
                <div>
                  <div className="font-display font-bold text-[#3D4A2E] text-sm">
                    {t.name}
                  </div>
                  <div className="font-body text-xs text-[#3D4A2E]/55 mt-0.5">
                    {t.country}
                  </div>
                </div>
                <div className="px-2.5 py-1 bg-[#C4622D]/10 rounded-full">
                  <span className="font-body text-xs font-bold text-[#C4622D] tracking-wide">
                    Livello {t.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
