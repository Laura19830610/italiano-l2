/* ============================================================
   Pagina Missione — La mia missione
   Design "Piazza Italiana" con testo narrativo
   ============================================================ */
import { useEffect, useRef } from "react";

export default function Missione() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
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
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3D4A2E] to-[#2D3A1E] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">La mia missione</h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl">
            Accompagnare le persone verso l'autonomia, la sicurezza e la libertà attraverso la lingua italiana.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section ref={sectionRef} className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl">
          {/* Opening */}
          <div className="reveal mb-12">
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Ci sono persone che arrivano nel nostro Paese con sogni, competenze e tanta voglia di costruirsi un futuro.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Spesso, però, incontrano un ostacolo invisibile: <span className="font-bold text-[#C4622D]">la lingua</span>.
            </p>
          </div>

          {/* Obstacles */}
          <div className="reveal mb-12 p-8 bg-[#F5EDD6] rounded-lg border-l-4 border-[#C4622D]">
            <p className="font-body text-[#3D4A2E] mb-4">Non riuscire a parlare con un medico.</p>
            <p className="font-body text-[#3D4A2E] mb-4">Non capire una comunicazione sul lavoro.</p>
            <p className="font-body text-[#3D4A2E] mb-4">Non sapere come compilare un documento.</p>
            <p className="font-body text-[#3D4A2E]">Non riuscire a esprimere ciò che si pensa.</p>
          </div>

          {/* Choice */}
          <div className="reveal mb-12">
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Per questo ho scelto di dedicare il mio tempo e le mie energie all'insegnamento dell'Italiano L2 e alla mediazione interculturale.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed">
              La mia storia mi ha portata a vivere per anni in Africa, a studiare la lingua araba e a conoscere da vicino cosa significa sentirsi stranieri.
            </p>
          </div>

          {/* Vision */}
          <div className="reveal mb-12">
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Voglio accompagnare lavoratori, famiglie e persone provenienti da tutto il mondo in un percorso che va oltre la grammatica.
            </p>
          </div>

          {/* Three pillars */}
          <div className="reveal mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#EEF2E8] rounded-lg text-center">
              <p className="font-display text-2xl font-bold text-[#5A6B44] mb-2">Sicurezza</p>
              <p className="font-body text-sm text-[#3D4A2E]">Imparare l'italiano significa sentirsi più sicuri.</p>
            </div>
            <div className="p-6 bg-[#FAE8DC] rounded-lg text-center">
              <p className="font-display text-2xl font-bold text-[#C4622D] mb-2">Autonomia</p>
              <p className="font-body text-sm text-[#3D4A2E]">Significa essere più autonomi.</p>
            </div>
            <div className="p-6 bg-[#F5EDD6] rounded-lg text-center">
              <p className="font-display text-2xl font-bold text-[#B8860B] mb-2">Libertà</p>
              <p className="font-body text-sm text-[#3D4A2E]">Significa essere più liberi.</p>
            </div>
          </div>

          {/* Voice */}
          <div className="reveal mb-12 text-center">
            <p className="font-display text-3xl font-bold text-[#3D4A2E] italic">
              Significa trovare la propria voce.
            </p>
          </div>

          {/* Approach */}
          <div className="reveal mb-12">
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Credo in un insegnamento pratico, basato sulla vita reale, sulle simulazioni e sull'incontro tra culture.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Perché comprendere una procedura di sicurezza, parlare con un medico o partecipare a un colloquio non è soltanto imparare una lingua.
            </p>
            <p className="font-display text-2xl font-bold text-[#C4622D]">
              È conquistare autonomia.
            </p>
          </div>

          {/* CTA */}
          <div className="reveal text-center mt-16">
            <a
              href="#contatti"
              className="inline-flex px-8 py-4 bg-[#C4622D] text-white font-body font-bold text-base tracking-wide rounded-sm hover:bg-[#9E4E24] transition-all duration-200 active:scale-[0.97] shadow-lg"
            >
              Inizia il tuo percorso
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
