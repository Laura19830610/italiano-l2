/* ============================================================
   CoursesSection — Livelli e Tipologie di Corso
   Cards con livelli QCER, obiettivi, icone
   ============================================================ */
import { useEffect, useRef } from "react";


const levels = [
  {
    code: "Pre-A0 → A0",
    name: "Base",
    color: "#5A6B44",
    bg: "#EEF2E8",
    description:
      "Inizia da zero! Impara i fondamenti, presentati, parla della famiglia e della casa. Perfetto per chi non ha mai studiato italiano.",
    goals: ["Saluti e presentazione", "Famiglia e casa", "Verbi fondamentali", "Orientamento nel quartiere"],
    link: "/corsi-a0-a1",
  },
  {
    code: "A1–A2",
    name: "Principiante",
    color: "#C4622D",
    bg: "#FAE8DC",
    description:
      "Consolida le basi, amplia il vocabolario e inizia a comunicare con sicurezza in situazioni quotidiane.",
    goals: ["Passato prossimo", "Burocrazia e servizi", "Lavoro e CV", "Autonomia comunicativa"],
    featured: true,
    link: "/corsi",
  },

];

const targetAudience = [
  "Aziende che desiderano migliorare sicurezza e integrazione",
  "Cooperative sociali e centri di accoglienza",
  "Agenzie formative",
  "Enti pubblici e associazioni",
  "Lavoratori stranieri",
  "Famiglie immigrate",
  "Persone che vogliono costruire il proprio futuro in Italia",
];

export default function CoursesSection() {
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
    <section
      id="corsi"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white relative"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C4622D]" />
            <span className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#C4622D]">
              I corsi
            </span>
            <div className="h-px w-10 bg-[#C4622D]" />
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-[#3D4A2E] mb-4">
            Un percorso per ogni livello
          </h2>
          <p className="reveal font-body text-[#3D4A2E]/70 text-lg max-w-2xl mx-auto">
            Che tu stia iniziando da zero o voglia perfezionare la tua
            padronanza, ho il programma giusto per te.
          </p>
        </div>

        {/* Level cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {levels.map((level: any, i) => (
            <a
              key={level.code}
              href={level.link || "#"}
              className={`reveal rounded-sm p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden block ${
                level.featured
                  ? "border-[#C4622D] shadow-lg"
                  : "border-[#C4622D]/15"
              } ${level.link ? "cursor-pointer" : ""}`}
              style={{
                backgroundColor: level.bg,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {level.featured && (
                <div className="absolute top-0 right-0 bg-[#C4622D] text-white text-xs font-bold px-3 py-1 rounded-bl-sm font-body tracking-wide">
                  PIÙ SCELTO
                </div>
              )}
              <div
                className="inline-block font-display text-3xl font-bold mb-1"
                style={{ color: level.color }}
              >
                {level.code}
              </div>
              <div
                className="font-body text-sm font-bold tracking-widest uppercase mb-4"
                style={{ color: level.color }}
              >
                {level.name}
              </div>
              <p className="font-body text-[#3D4A2E]/75 text-sm leading-relaxed mb-6">
                {level.description}
              </p>
              <ul className="space-y-2">
                {level.goals.map((goal: string) => (
                  <li key={goal} className="flex items-center gap-2 text-sm font-body text-[#3D4A2E]/80">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: level.color }}
                    />
                    {goal}
                  </li>
                ))}
              </ul>
              {level.link && (
                <div className="mt-6 pt-6 border-t border-[#C4622D]/20 flex items-center gap-2 text-sm font-bold" style={{ color: level.color }}>
                  <span>Scopri il corso</span>
                  <span>→</span>
                </div>
              )}
            </a>
          ))}
        </div>

        {/* Target Audience */}
        <div className="text-center mb-10">
          <h3 className="reveal font-display text-3xl font-bold text-[#3D4A2E] mb-2">
            A chi mi rivolgo
          </h3>
          <p className="reveal font-body text-[#3D4A2E]/65 text-base">
            Lavoro con diverse realtà e persone per costruire inclusione e sicurezza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {targetAudience.map((item, i) => (
            <div
              key={item}
              className="reveal flex gap-3 p-4 rounded-sm bg-[#F5EDD6] border border-[#C4622D]/20 hover:border-[#C4622D]/40 transition-all duration-200"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#C4622D] flex items-center justify-center mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div className="font-body text-sm text-[#3D4A2E] leading-relaxed">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
