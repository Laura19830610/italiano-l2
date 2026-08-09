import { ArrowDownToLine, ArrowRight, HeartHandshake, Users, BriefcaseBusiness, Home as HomeIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const proposals = [
  {
    key: "p1",
    image: "/volantini/01-italiano-l2-mediazione.jpg",
    pdf: "/volantini/01-italiano-l2-mediazione.pdf",
    icon: HeartHandshake,
  },
  {
    key: "p2",
    image: "/volantini/02-mediazione-interculturale.jpg",
    pdf: "/volantini/02-mediazione-interculturale.pdf",
    icon: Users,
  },
  {
    key: "p3",
    image: "/volantini/03-italiano-per-il-lavoro.jpg",
    pdf: "/volantini/03-italiano-per-il-lavoro.pdf",
    icon: BriefcaseBusiness,
  },
  {
    key: "p4",
    image: "/volantini/04-italiano-in-famiglia.jpg",
    pdf: "/volantini/04-italiano-in-famiglia.pdf",
    icon: HomeIcon,
  },
] as const;

export default function Proposte() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const rtl = language === "ar";

  return (
    <div className="min-h-screen bg-[#FDFAF4]" dir={rtl ? "rtl" : "ltr"}>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#3D4A2E] text-white relative overflow-hidden">
          <div className="absolute -top-28 -right-28 h-80 w-80 rounded-full bg-[#C4622D]/30 blur-3xl" />
          <div className="absolute -bottom-36 -left-20 h-96 w-96 rounded-full bg-[#B8860B]/20 blur-3xl" />
          <div className="container relative">
            <p className="font-body uppercase tracking-[0.22em] text-sm text-[#F1D7A5] mb-5">{t("proposals.eyebrow")}</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold max-w-4xl leading-[1.05]">{t("proposals.title")}</h1>
            <p className="font-body text-lg md:text-xl text-white/85 max-w-3xl mt-7 leading-relaxed">{t("proposals.intro")}</p>
            <div className="mt-10 flex flex-wrap gap-3 text-sm font-bold">
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15">{t("proposals.chip1")}</span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15">{t("proposals.chip2")}</span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15">{t("proposals.chip3")}</span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15">{t("proposals.chip4")}</span>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 text-[#C4622D] mb-4">
                <HeartHandshake size={22} />
                <span className="font-body font-bold uppercase tracking-wider text-sm">{t("proposals.socialTitle")}</span>
              </div>
              <p className="font-body text-lg md:text-xl text-[#3D4A2E]/80 leading-relaxed">{t("proposals.socialText")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {proposals.map(({ key, image, pdf, icon: Icon }) => (
                <article key={key} className="group bg-white border border-[#3D4A2E]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] bg-[#F5EDD6] overflow-hidden">
                    <img src={image} alt={t(`proposals.${key}Title`)} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-7 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 h-11 w-11 rounded-full bg-[#C4622D]/10 text-[#C4622D] flex items-center justify-center"><Icon size={21} /></div>
                      <div>
                        <h2 className="font-display text-2xl font-bold text-[#3D4A2E]">{t(`proposals.${key}Title`)}</h2>
                        <p className="font-body text-[#3D4A2E]/70 mt-3 leading-relaxed">{t(`proposals.${key}Desc`)}</p>
                      </div>
                    </div>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <a href={pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#3D4A2E] text-white font-body text-sm font-bold hover:bg-[#2D3A1E] transition-colors">
                        <ArrowDownToLine size={16} /> {t("proposals.download")}
                      </a>
                      <a href="#contatti" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#C4622D]/30 text-[#C4622D] font-body text-sm font-bold hover:bg-[#C4622D]/5 transition-colors">
                        {t("proposals.contact")} <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 p-6 md:p-8 rounded-2xl bg-[#F5EDD6] border border-[#C4622D]/10 text-center">
              <p className="font-body text-[#3D4A2E]/80 leading-relaxed max-w-3xl mx-auto">{t("proposals.note")}</p>
            </div>
          </div>
        </section>
      </main>
      <div id="contatti"><Footer /></div>
    </div>
  );
}
