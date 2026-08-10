/* ============================================================
   MethodSection — Il Metodo Didattico
   Sfondo crema con immagine online lesson, 5 pilastri multilingue
   ============================================================ */
import { useEffect, useRef } from "react";
import { Zap, Heart, Target, RefreshCw, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export default function MethodSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      icon: Target,
      title: t("methodSection.pillar1Title"),
      desc: t("methodSection.pillar1Desc"),
    },
    {
      icon: Heart,
      title: t("methodSection.pillar2Title"),
      desc: t("methodSection.pillar2Desc"),
    },
    {
      icon: Zap,
      title: t("methodSection.pillar3Title"),
      desc: t("methodSection.pillar3Desc"),
    },
    {
      icon: RefreshCw,
      title: t("methodSection.pillar4Title"),
      desc: t("methodSection.pillar4Desc"),
    },
    {
      icon: Globe,
      title: t("methodSection.pillar5Title"),
      desc: t("methodSection.pillar5Desc"),
    },
  ];

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
      id="metodo"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#F5EDD6] relative overflow-hidden"
    >
      {/* Decorative element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-[#C4622D]/5" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C4622D]" />
              <span className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#C4622D]">
                {t("methodSection.label")}
              </span>
            </div>

            <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-[#3D4A2E] mb-6 leading-tight">
              {t("methodSection.title1")}
              <br />
              <em className="text-[#C4622D]">{t("methodSection.title2")}</em>
            </h2>

            <p className="reveal font-body text-[#3D4A2E]/75 text-lg leading-relaxed mb-10">
              {t("methodSection.intro")}
            </p>

            {/* Pillars */}
            <div className="space-y-6">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="reveal flex gap-4"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-[#C4622D] flex items-center justify-center shadow-sm">
                    <pillar.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-[#3D4A2E] mb-1">
                      {pillar.title}
                    </div>
                    <div className="font-body text-sm text-[#3D4A2E]/65 leading-relaxed">
                      {pillar.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="reveal">
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663775518602/JeB9mAageaHKV6ReJxfunQ/online-lesson-FED86btkq4PSsA62EqFs7V.webp"
                alt="Lezione di italiano online"
                className="w-full rounded-sm shadow-2xl object-cover relative z-10 lg:opacity-90"
                style={{ aspectRatio: "4/3" }}
              />
              {/* Floating info card */}
              <div className="absolute -bottom-6 -left-6 bg-[#3D4A2E] text-white rounded-sm p-5 shadow-xl max-w-[200px]">
                <div className="font-display text-2xl font-bold text-[#D97B4A] mb-1">100%</div>
                <div className="font-body text-xs leading-snug text-white/80">
                  Lezioni personalizzate in base ai tuoi obiettivi
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#C4622D]/30 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
