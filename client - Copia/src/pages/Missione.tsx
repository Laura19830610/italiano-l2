import { useTranslation } from "@/hooks/useTranslation";

const pillars = ["p1", "p2", "p3"] as const;

export default function Missione() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#3D4A2E] to-[#2D3A1E] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">{t("missionPage.title")}</h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl">{t("missionPage.subtitle")}</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl space-y-10">
          <div className="space-y-5">
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed">{t("missionPage.intro1")}</p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed">{t("missionPage.intro2")}</p>
          </div>
          <div className="p-8 bg-[#F5EDD6] rounded-lg border-l-4 border-[#C4622D] space-y-3">
            <p>{t("missionPage.ob1")}</p><p>{t("missionPage.ob2")}</p><p>{t("missionPage.ob3")}</p><p>{t("missionPage.ob4")}</p>
          </div>
          <div className="space-y-5">
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed">{t("missionPage.choice1")}</p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed">{t("missionPage.choice2")}</p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed">{t("missionPage.vision")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((key) => <div key={key} className="p-6 bg-[#EEF2E8] rounded-lg text-center"><p className="font-display text-2xl font-bold text-[#5A6B44] mb-2">{t(`missionPage.${key}Title`)}</p><p className="font-body text-sm text-[#3D4A2E]">{t(`missionPage.${key}Text`)}</p></div>)}
          </div>
          <p className="font-display text-3xl font-bold text-[#3D4A2E] italic text-center">{t("missionPage.voice")}</p>
          <div className="space-y-5">
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed">{t("missionPage.approach1")}</p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed">{t("missionPage.approach2")}</p>
            <p className="font-display text-2xl font-bold text-[#C4622D] text-center">{t("missionPage.approach3")}</p>
          </div>
          <div className="text-center pt-6"><a href="/#contatti" className="inline-flex px-8 py-4 bg-[#C4622D] text-white font-body font-bold rounded-sm hover:bg-[#9E4E24]">{t("missionPage.cta")}</a></div>
        </div>
      </section>
    </div>
  );
}
