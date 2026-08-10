import { useTranslation } from "@/hooks/useTranslation";
/* ============================================================
   Footer — Design "Piazza Italiana"
   Sfondo oliva scuro, logo, link, social, copyright
   ============================================================ */

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2A3320] text-[#F5EDD6]/70 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-full bg-[#C4622D] text-white flex items-center justify-center font-display font-bold text-sm">L2</div>
              <span className="font-display font-bold text-lg text-[#F5EDD6]">
                Italiano <span className="text-[#C4622D]">L2</span>
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-[#F5EDD6]/55 max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#C4622D] mb-4">
              {t("footer.navigation")}
            </div>
            <ul className="space-y-2">
              {[
                [t("nav.chiSono"), "#chi-sono"],
                [t("nav.corsiA1A2"), "/corsi"],
                [t("nav.corsiA0A1"), "/corsi-a0-a1"],
                [t("nav.metodo"), "/metodo"],
                [t("nav.proposte"), "/proposte"],
                [t("nav.contatti"), "#contatti"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-body text-sm text-[#F5EDD6]/60 hover:text-[#C4622D] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-body text-xs font-bold tracking-[0.2em] uppercase text-[#C4622D] mb-4">
              {t("footer.contactsFooter")}
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:paupinilaura.intercultura@gmail.com"
                  className="font-body text-sm text-[#F5EDD6]/60 hover:text-[#C4622D] transition-colors"
                >
                  paupinilaura.intercultura@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393475922465"
                  className="font-body text-sm text-[#F5EDD6]/60 hover:text-[#C4622D] transition-colors"
                >
                  WhatsApp: +39 347 592 2465
                </a>
              </li>
              <li>
                <a
                  href="https://it.linkedin.com/in/laura-p-0052a6417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-[#F5EDD6]/60 hover:text-[#C4622D] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>

            {/* LinkedIn Badge */}
            <div className="mt-4 flex justify-center">
              <div
                className="badge-base LI-profile-badge"
                data-locale="it_IT"
                data-size="medium"
                data-theme="light"
                data-type="HORIZONTAL"
                data-vanity="laura-p-0052a6417"
                data-version="v1"
              >
                <a
                  className="badge-base__link LI-simple-link"
                  href="https://it.linkedin.com/in/laura-p-0052a6417?trk=profile-badge"
                >
                  Laura P.
                </a>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contatti"
              className="inline-block mt-5 px-5 py-2.5 bg-[#C4622D] text-white font-body font-bold text-xs tracking-wide rounded-sm hover:bg-[#9E4E24] transition-colors"
            >
              {t("nav.primaLezioneGratuita")} →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F5EDD6]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-[#F5EDD6]/35">
            © {year} Italiano L2. {t("footer.copyright")}
          </p>
          <p className="font-body text-xs text-[#F5EDD6]/35 italic font-display">
            “{t("footer.quote")}” — {t("footer.author")}
          </p>
        </div>
      </div>
    </footer>
  );
}
