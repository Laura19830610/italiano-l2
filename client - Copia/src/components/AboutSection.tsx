/* ============================================================
   AboutSection — "Chi Sono"
   Titolo: "Non insegno solo una lingua. Insegno dignità, sicurezza e appartenenza."
   Contenuto rielaborato: storia personale + credenziali + missione
   ============================================================ */
import { useEffect, useRef } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function AboutSection() {
  const { t } = useTranslation();
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const credentials = [
    t("about.credentialFull"),
    t("about.cred2"),
    t("about.cred3"),
    t("about.cred4"),
  ];

  return (
    <section
      id="chi-sono"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#F5EDD6] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#C4622D]/5 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#3D4A2E]/5 translate-y-1/2 -translate-x-1/3" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <div className="reveal relative">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C4622D]/30 rounded-sm" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663775518602/JeB9mAageaHKV6ReJxfunQ/culture-italian-bAnbjTAAhyoAWeF4fM3X6P.webp"
                alt="Materiali didattici italiani"
                className="relative z-10 w-full rounded-sm object-cover shadow-xl"
                style={{ aspectRatio: "4/3" }}
              />
              {/* Floating badge */}
              <div className="absolute z-20 -bottom-5 -right-5 bg-[#C4622D] text-white rounded-sm p-4 shadow-lg">
                <div className="font-display text-3xl font-bold">{t("about.credential")}</div>
                <div className="font-body text-xs tracking-wide">DITALS Base</div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div>
            {/* Section label */}
            <div className="reveal flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C4622D]" />
              <span className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#C4622D]">
                {t("nav.chiSono")}
              </span>
            </div>

            {/* Main title */}
            <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-[#3D4A2E] mb-4 leading-tight">
              {t("about.title")}
              <br />
              <em className="text-[#C4622D]">{t("about.subtitle")}</em>
            </h2>

            {/* Intro */}
            <p className="reveal font-body text-[#3D4A2E]/75 text-lg leading-relaxed mb-8">
              {t("about.description")}
            </p>

            {/* Story section */}
            <div className="reveal font-body text-[#3D4A2E]/80 text-base leading-relaxed mb-8 space-y-4">
              <p>
                <strong>{t("about.storyTitle")}</strong>
              </p>

              <p>{t("about.story1")}</p>

              <p>{t("about.story2")}</p>

              <p>{t("about.story3")}</p>

              <p>{t("about.story4")}</p>

              <p className="font-display italic text-[#C4622D] text-lg pt-2">
                {t("about.storyMission")}
              </p>
            </div>

            {/* Credentials */}
            <div className="reveal space-y-3">
              {credentials.map((cred, i) => (
                <div
                  key={i}
                  className="font-body text-sm text-[#3D4A2E]/70 leading-relaxed"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {cred}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
