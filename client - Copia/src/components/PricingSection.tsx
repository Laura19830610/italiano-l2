/* ============================================================
   PricingSection — Prezzi e Pacchetti
   3 piani: singola, pacchetto mensile, intensivo
   ============================================================ */
import { useEffect, useRef } from "react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Lezione Singola",
    price: "35",
    unit: "/ lezione",
    duration: "60 minuti",
    description: "Perfetta per chi vuole provare o ha esigenze occasionali.",
    features: [
      "1 lezione da 60 minuti",
      "Materiali didattici inclusi",
      "Feedback scritto post-lezione",
      "Registrazione della sessione",
    ],
    cta: "Prenota ora",
    featured: false,
  },
  {
    name: "Pacchetto Mensile",
    price: "120",
    unit: "/ mese",
    duration: "4 lezioni da 60 min",
    description: "Il piano più scelto. Progressi costanti con un ritmo settimanale.",
    features: [
      "4 lezioni da 60 minuti",
      "Piano di studio personalizzato",
      "Materiali e risorse digitali",
      "Supporto via WhatsApp",
      "Verifica progressi mensile",
      "Sconto 14% rispetto alla singola",
    ],
    cta: "Inizia subito",
    featured: true,
  },
  {
    name: "Corso Intensivo",
    price: "220",
    unit: "/ mese",
    duration: "8 lezioni da 60 min",
    description: "Per chi ha una scadenza ravvicinata o vuole accelerare i progressi.",
    features: [
      "8 lezioni da 60 minuti",
      "Programma intensivo su misura",
      "Preparazione esami inclusa",
      "Materiali premium e risorse extra",
      "Supporto illimitato via messaggi",
      "Sconto 21% rispetto alla singola",
    ],
    cta: "Contattami",
    featured: false,
  },
];

export default function PricingSection() {
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
      id="prezzi"
      ref={sectionRef}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23C4622D%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-100" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C4622D]" />
            <span className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#C4622D]">
              Prezzi
            </span>
            <div className="h-px w-10 bg-[#C4622D]" />
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-[#3D4A2E] mb-4">
            Investimento nella lingua
          </h2>
          <p className="reveal font-body text-[#3D4A2E]/65 text-lg max-w-2xl mx-auto">
            Prezzi trasparenti, senza costi nascosti. La prima lezione è sempre
            gratuita — per conoscerci e definire il tuo percorso.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal rounded-sm p-8 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${
                plan.featured
                  ? "bg-[#C4622D] text-white shadow-2xl scale-[1.02]"
                  : "bg-[#F5EDD6] border border-[#C4622D]/15 hover:shadow-xl"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {plan.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1">
                  <Sparkles size={14} className="text-[#F5EDD6]" />
                  <span className="font-body text-xs font-bold text-[#F5EDD6] tracking-wide">
                    CONSIGLIATO
                  </span>
                </div>
              )}

              <div className={`font-body text-xs font-bold tracking-[0.2em] uppercase mb-2 ${plan.featured ? "text-[#F5EDD6]/70" : "text-[#C4622D]"}`}>
                {plan.name}
              </div>

              <div className="flex items-baseline gap-1 mb-1">
                <span className={`font-display text-5xl font-bold ${plan.featured ? "text-white" : "text-[#3D4A2E]"}`}>
                  €{plan.price}
                </span>
                <span className={`font-body text-sm ${plan.featured ? "text-white/70" : "text-[#3D4A2E]/55"}`}>
                  {plan.unit}
                </span>
              </div>

              <div className={`font-body text-xs mb-4 ${plan.featured ? "text-white/70" : "text-[#3D4A2E]/55"}`}>
                {plan.duration}
              </div>

              <p className={`font-body text-sm leading-relaxed mb-6 ${plan.featured ? "text-white/85" : "text-[#3D4A2E]/70"}`}>
                {plan.description}
              </p>

              <ul className="space-y-2.5 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className={`flex-shrink-0 mt-0.5 ${plan.featured ? "text-[#F5EDD6]" : "text-[#C4622D]"}`}
                    />
                    <span className={`font-body text-sm ${plan.featured ? "text-white/85" : "text-[#3D4A2E]/75"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contatti"
                className={`block text-center py-3 px-6 rounded-sm font-body font-bold text-sm tracking-wide transition-all duration-200 active:scale-[0.97] ${
                  plan.featured
                    ? "bg-white text-[#C4622D] hover:bg-[#F5EDD6]"
                    : "bg-[#C4622D] text-white hover:bg-[#9E4E24]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Free trial note */}
        <div className="reveal text-center mt-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#3D4A2E]/5 rounded-full border border-[#3D4A2E]/10">
            <span className="text-[#C4622D]">✦</span>
            <span className="font-body text-sm text-[#3D4A2E]/70">
              <strong className="text-[#3D4A2E]">Prima lezione gratuita</strong> — nessun impegno, nessuna carta di credito.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
