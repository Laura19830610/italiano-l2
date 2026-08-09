/* ============================================================
   HeroSection — Design "Piazza Italiana"
   Full-bleed image con overlay scuro, testo bianco
   Layout asimmetrico con badge livelli e stats
   ============================================================ */
import { useEffect, useRef } from "react";
import { ArrowDown, Star } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function HeroSection() {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Parallax leggero
    const handleScroll = () => {
      const y = window.scrollY;
      el.style.backgroundPositionY = `${40 + y * 0.1}%`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(circle at 78% 30%, rgba(217,123,74,.35), transparent 32%), linear-gradient(135deg, #21150f 0%, #3D4A2E 58%, #7c4b32 100%)",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f08]/80 via-[#3D4A2E]/60 to-[#C4622D]/30" />
      {/* Texture grain */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 container">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-[#B8860B] text-[#B8860B]" />
              ))}
            </span>
            <span className="text-white/90 text-xs font-body font-bold tracking-widest uppercase">
              {t("hero.badge")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            {t("hero.title1")}
            <br />
            <em className="text-[#D97B4A] not-italic">{t("hero.title2")}</em>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl text-white/85 max-w-xl mb-8 leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contatti"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C4622D] text-white font-body font-bold text-base tracking-wide rounded-sm hover:bg-[#9E4E24] transition-all duration-200 active:scale-[0.97] shadow-lg"
            >
              {t("hero.cta1")}
            </a>
            <a
              href="#corsi"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/60 text-white font-body font-bold text-base tracking-wide rounded-sm hover:bg-white/10 transition-all duration-200"
            >
              {t("hero.cta2")}
            </a>
          </div>


        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#chi-sono"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <span className="font-body text-xs tracking-widest uppercase">{t("nav.home")}</span>
        <ArrowDown size={16} />
      </a>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path d="M0,80 C360,20 1080,60 1440,10 L1440,80 Z" fill="#F5EDD6" />
        </svg>
      </div>
    </section>
  );
}
