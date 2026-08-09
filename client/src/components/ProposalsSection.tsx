import { ArrowRight, BriefcaseBusiness, HeartHandshake, Home, Users } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "@/hooks/useTranslation";

const items = [
  { key: "p1", icon: HeartHandshake },
  { key: "p2", icon: Users },
  { key: "p3", icon: BriefcaseBusiness },
  { key: "p4", icon: Home },
] as const;

export default function ProposalsSection() {
  const { t } = useTranslation();
  return (
    <section className="py-16 md:py-24 bg-[#FDFAF4]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="font-body text-sm uppercase tracking-[0.2em] text-[#C4622D] font-bold mb-3">{t("proposals.eyebrow")}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#3D4A2E]">{t("proposals.title")}</h2>
          </div>
          <Link href="/proposte" className="inline-flex items-center gap-2 font-body font-bold text-[#C4622D] hover:gap-3 transition-all">
            {t("proposals.view")} <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ key, icon: Icon }) => (
            <Link key={key} href="/proposte" className="group p-6 rounded-2xl bg-white border border-[#3D4A2E]/10 hover:border-[#C4622D]/30 hover:-translate-y-1 transition-all shadow-sm">
              <div className="h-11 w-11 rounded-full bg-[#3D4A2E]/10 text-[#3D4A2E] flex items-center justify-center mb-5 group-hover:bg-[#C4622D]/10 group-hover:text-[#C4622D] transition-colors"><Icon size={20} /></div>
              <h3 className="font-display text-xl font-bold text-[#3D4A2E] mb-3">{t(`proposals.${key}Title`)}</h3>
              <p className="font-body text-sm text-[#3D4A2E]/65 leading-relaxed">{t(`proposals.${key}Desc`)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
