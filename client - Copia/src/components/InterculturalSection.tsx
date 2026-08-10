import { HeartHandshake, MessageCircleHeart, UsersRound, Globe2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const cards = [
  ["c1", HeartHandshake, "/intercultura/dialogo-culture.svg"],
  ["c2", UsersRound, "/intercultura/team-multiculturale.svg"],
  ["c3", MessageCircleHeart, "/intercultura/comunita-famiglia.svg"],
  ["c4", Globe2, "/intercultura/dialogo-culture.svg"],
] as const;

export default function InterculturalSection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 bg-[#F5EDD6]">
      <div className="container">
        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-center">
          <div>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-[#C4622D] font-bold mb-3">{t("intercultural.eyebrow")}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#3D4A2E] mb-6">{t("intercultural.title")}</h2>
            <p className="font-body text-lg text-[#3D4A2E]/75 leading-relaxed">{t("intercultural.text")}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {cards.map(([key, Icon, image], i) => (
              <article key={key} className="bg-white rounded-2xl overflow-hidden border border-[#3D4A2E]/10 shadow-sm">
                <div className="h-36 bg-[#FDFAF4] flex items-center justify-center p-4"><img src={image} alt="" className="h-full w-full object-contain" loading="lazy" /></div>
                <div className="p-5 flex items-center gap-3"><Icon size={20} className="text-[#C4622D]" /><span className="font-display text-xl font-bold text-[#3D4A2E]">{t(`intercultural.${key}`)}</span></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
