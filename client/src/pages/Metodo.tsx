import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const sections = ["s1", "s2", "s3", "s4", "s5"] as const;

export default function Metodo() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <section className="py-8 md:py-12 border-b border-border">
        <div className="container">
          <Link href="/"><a className="inline-flex items-center gap-2 text-[#C4622D] font-bold mb-4 hover:text-[#9E4E24] transition-colors"><ArrowLeft size={18} />{t("methodPage.back")}</a></Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">{t("methodPage.title")}</h1>
          <p className="font-body text-lg text-foreground/75 mt-4">{t("methodPage.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl space-y-6">
          <p className="font-display text-2xl md:text-3xl font-bold text-foreground italic">{t("methodPage.introLead")}</p>
          <p className="font-body text-lg text-foreground/80 leading-relaxed">{t("methodPage.intro1")}</p>
          <p className="font-body text-lg text-foreground/80 leading-relaxed">{t("methodPage.intro2")}</p>
        </div>
      </section>

      {sections.map((key, i) => (
        <section key={key} className={`py-16 md:py-24 ${i % 2 ? "bg-muted/50" : ""}`}>
          <div className="container max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">{t(`methodPage.${key}Title`)}</h2>
            <div className="space-y-5">
              <p className="font-body text-lg text-foreground/80 leading-relaxed">{t(`methodPage.${key}1`)}</p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">{t(`methodPage.${key}2`)}</p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed font-bold">{t(`methodPage.${key}3`)}</p>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">{t("methodPage.ctaTitle")}</h2>
          <p className="font-body text-lg text-foreground/75 mb-8 max-w-2xl mx-auto">{t("methodPage.ctaText")}</p>
          <Link href="/#contatti"><a className="inline-flex items-center px-6 py-3 rounded-sm bg-[#C4622D] text-white font-body font-bold tracking-wide hover:bg-[#9E4E24] transition-all">{t("methodPage.ctaButton")}</a></Link>
        </div>
      </section>
    </div>
  );
}
