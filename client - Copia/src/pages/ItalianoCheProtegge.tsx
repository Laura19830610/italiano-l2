import { Shield, AlertCircle, FileText, Volume2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const protection = ["safety", "rights", "health", "dignity"] as const;

export default function ItalianoCheProtegge() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#3D4A2E] to-[#2D3A1E] text-white py-16 md:py-24"><div className="container"><h1 className="font-display text-5xl md:text-6xl font-bold mb-4">{t("protectPage.title")}</h1><p className="text-lg md:text-xl text-white/85 max-w-2xl">{t("protectPage.subtitle")}</p></div></section>
      <section className="py-16 md:py-24"><div className="container max-w-3xl space-y-12">
        <div><h2 className="font-display text-3xl font-bold text-[#3D4A2E] mb-6">{t("protectPage.introTitle")}</h2><p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-4">{t("protectPage.intro1")}</p><p className="font-body text-lg text-[#3D4A2E] leading-relaxed">{t("protectPage.intro2")}</p></div>
        <div className="p-8 bg-[#F5EDD6] rounded-lg border-l-4 border-[#C4622D] space-y-3"><p>{t("protectPage.person1")}</p><p>{t("protectPage.person2")}</p><p>{t("protectPage.person3")}</p><p>{t("protectPage.person4")}</p></div>
        <div><p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-5">{t("protectPage.protectIntro")}</p><p className="font-display text-3xl font-bold text-[#C4622D] mb-8">{t("protectPage.protectTitle")}</p><div className="grid md:grid-cols-2 gap-5">{protection.map((key, i) => { const Icon=[Shield,FileText,AlertCircle,Volume2][i]; return <div key={key} className="flex gap-3"><Icon size={24} className="text-[#C4622D] shrink-0 mt-1"/><p className="font-body text-[#3D4A2E]">{t(`protectPage.${key}`)}</p></div>; })}</div></div>
        <div className="p-8 bg-[#EEF2E8] rounded-lg"><h2 className="font-display text-2xl font-bold text-[#5A6B44] mb-5">{t("protectPage.workTitle")}</h2><p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-5">{t("protectPage.work1")}</p><p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-5">{t("protectPage.work2")}</p><p className="font-display text-xl font-bold text-[#5A6B44]">{t("protectPage.work3")}</p></div>
        <div className="p-8 bg-[#FAE8DC] rounded-lg"><h2 className="font-display text-2xl font-bold text-[#C4622D] mb-5">{t("protectPage.rightsTitle")}</h2><p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-5">{t("protectPage.rights1")}</p><p className="font-body text-lg text-[#3D4A2E] leading-relaxed">{t("protectPage.rights2")}</p></div>
        <div className="text-center pt-4"><a href="/#contatti" className="inline-flex px-8 py-4 bg-[#C4622D] text-white font-body font-bold rounded-sm hover:bg-[#9E4E24]">{t("protectPage.cta")}</a></div>
      </div></section>
    </div>
  );
}
