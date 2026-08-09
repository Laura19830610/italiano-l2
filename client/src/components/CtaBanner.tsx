/* ============================================================
   CtaBanner — Banner CTA intermedio tra sezioni
   Sfondo terracotta con citazione e bottone
   ============================================================ */
import { useEffect, useRef } from "react";

export default function CtaBanner() {
  const ref = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#C4622D] py-16 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />

      <div className="container relative z-10 text-center">
        <p className="reveal font-display italic text-2xl md:text-3xl text-white/90 mb-2">
          "Il linguaggio è la chiave per aprire le porte della giustizia e della libertà. Chi non sa esprimersi è un cittadino a metà."
        </p>
        <p className="reveal font-body text-sm text-white/60 mb-8">— Don Lorenzo Milani</p>
        <a
          href="#contatti"
          className="reveal inline-flex items-center px-8 py-4 bg-white text-[#C4622D] font-body font-bold text-sm tracking-wide rounded-sm hover:bg-[#F5EDD6] transition-all duration-200 active:scale-[0.97] shadow-lg"
        >
          Prenota la tua prima lezione gratuita
        </a>
      </div>
    </div>
  );
}
