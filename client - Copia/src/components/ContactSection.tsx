/* ============================================================
   ContactSection — Modulo di contatto e info
   Sfondo paesaggio toscano, form con select livello
   Integrato con Formspree per ricevere richieste via email
   ============================================================ */
import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, MessageSquare, Send, CheckCircle, Linkedin } from "lucide-react";

const levelOptions = [
  { value: "a1", label: "A1 — Principiante assoluto" },
  { value: "a2", label: "A2 — Elementare" },
  { value: "b1", label: "B1 — Intermedio" },
  { value: "b2", label: "B2 — Intermedio superiore" },
  { value: "c1", label: "C1 — Avanzato" },
  { value: "c2", label: "C2 — Padronanza" },
  { value: "unknown", label: "Non lo so ancora" },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [state, handleSubmit] = useForm("xbdvzwbq");

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
      id="contatti"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663775518602/JeB9mAageaHKV6ReJxfunQ/italy-landscape-5E2uxkp3udYdh7uPm8LeSo.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a0f08]/75" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column — info */}
          <div className="text-white">
            <div className="reveal flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C4622D]" />
              <span className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#C4622D]">
                Contatti
              </span>
            </div>

            <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Inizia il tuo
              <br />
              <em className="text-[#D97B4A]">viaggio in italiano.</em>
            </h2>

            <p className="reveal font-body text-white/75 text-lg leading-relaxed mb-10">
              Scrivimi per prenotare la tua prima lezione gratuita. Rispondo
              entro 24 ore. Raccontami il tuo livello, i tuoi obiettivi e
              troveremo insieme il percorso migliore.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "paupinilaura.intercultura@gmail.com",
                  href: "mailto:paupinilaura.intercultura@gmail.com",
                },
                {
                  icon: MessageSquare,
                  label: "WhatsApp",
                  value: "+39 347 592 2465",
                  href: "https://wa.me/393475922465",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "Laura P.",
                  href: "https://www.linkedin.com/in/laura-p-5133b3417",
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="reveal flex items-center gap-4"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-sm bg-[#C4622D]/20 border border-[#C4622D]/30 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-[#D97B4A]" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-white/50 uppercase tracking-wide">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.label === "LinkedIn" ? "_blank" : undefined}
                        rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                        className="font-body text-white hover:text-[#D97B4A] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-body text-white">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Italy landscape quote */}
            <div className="reveal mt-10 p-5 border border-white/15 rounded-sm bg-white/5 backdrop-blur-sm">
              <p className="font-display italic text-white/80 text-lg">
                "Senza la parola si è isolati, si subiscono i soprusi, non si può partecipare alla vita civile. La lingua è la democrazia."
              </p>
              <p className="font-body text-xs text-white/50 mt-2">— Tullio De Mauro</p>
            </div>
          </div>

          {/* Right column — form */}
          <div className="reveal">
            <div className="bg-[#FDFAF4] rounded-sm p-8 shadow-2xl">
              {state.succeeded ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-[#5A6B44] mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-[#3D4A2E] mb-2">
                    Messaggio inviato!
                  </h3>
                  <p className="font-body text-[#3D4A2E]/65">
                    Ti risponderò entro 24 ore per organizzare la tua prima
                    lezione gratuita. A presto!
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-[#3D4A2E] mb-2">
                    Prima lezione gratuita
                  </h3>
                  <p className="font-body text-sm text-[#3D4A2E]/60 mb-6">
                    Compila il modulo e ti contatterò presto.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="font-body text-xs font-bold text-[#3D4A2E]/70 uppercase tracking-wide mb-1.5 block">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Il tuo nome"
                        className="w-full px-4 py-3 rounded-sm border border-[#C4622D]/20 bg-white font-body text-[#3D4A2E] placeholder:text-[#3D4A2E]/35 focus:outline-none focus:border-[#C4622D] focus:ring-2 focus:ring-[#C4622D]/10 transition-all text-sm"
                      />
                      <ValidationError field="name" errors={state.errors} />
                    </div>

                    <div>
                      <label className="font-body text-xs font-bold text-[#3D4A2E]/70 uppercase tracking-wide mb-1.5 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="tua@email.com"
                        className="w-full px-4 py-3 rounded-sm border border-[#C4622D]/20 bg-white font-body text-[#3D4A2E] placeholder:text-[#3D4A2E]/35 focus:outline-none focus:border-[#C4622D] focus:ring-2 focus:ring-[#C4622D]/10 transition-all text-sm"
                      />
                      <ValidationError field="email" errors={state.errors} />
                    </div>

                    <div>
                      <label className="font-body text-xs font-bold text-[#3D4A2E]/70 uppercase tracking-wide mb-1.5 block">
                        Livello attuale
                      </label>
                      <select
                        name="level"
                        className="w-full px-4 py-3 rounded-sm border border-[#C4622D]/20 bg-white font-body text-[#3D4A2E] focus:outline-none focus:border-[#C4622D] focus:ring-2 focus:ring-[#C4622D]/10 transition-all text-sm appearance-none"
                      >
                        <option value="">Seleziona il tuo livello...</option>
                        {levelOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="font-body text-xs font-bold text-[#3D4A2E]/70 uppercase tracking-wide mb-1.5 block">
                        Messaggio
                      </label>
                      <textarea
                        name="message"
                        required
                        placeholder="Raccontami i tuoi obiettivi, disponibilità oraria, o qualsiasi domanda..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-sm border border-[#C4622D]/20 bg-white font-body text-[#3D4A2E] placeholder:text-[#3D4A2E]/35 focus:outline-none focus:border-[#C4622D] focus:ring-2 focus:ring-[#C4622D]/10 transition-all text-sm resize-none"
                      />
                      <ValidationError field="message" errors={state.errors} />
                    </div>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-[#C4622D] text-white font-body font-bold text-sm tracking-wide rounded-sm hover:bg-[#9E4E24] disabled:bg-[#C4622D]/50 disabled:cursor-not-allowed transition-all duration-200 active:scale-[0.98] shadow-sm"
                    >
                      <Send size={16} />
                      {state.submitting ? "Invio in corso..." : "Invia richiesta"}
                    </button>

                    <p className="font-body text-xs text-[#3D4A2E]/45 text-center">
                      Rispondo entro 24 ore. Nessuno spam, promesso.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
