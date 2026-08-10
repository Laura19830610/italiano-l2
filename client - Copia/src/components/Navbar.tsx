/* ============================================================
   Navbar — Design "Piazza Italiana"
   Terracotta primary, Playfair Display logo, Lato nav links
   Sticky with glass effect on scroll
   Language selector in top right
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";

const languages: { code: Language; name: string; flag: string }[] = [
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
];

export default function Navbar() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  const navLinks = [
    { label: t("nav.chiSono"), href: "#chi-sono" },
    { label: t("nav.miaMissione"), href: "/missione" },
    { label: t("nav.italianoProtegge"), href: "/italiano-che-protegge" },
    { label: t("nav.aziende"), href: "/aziende" },
    { label: t("nav.proposte"), href: "/proposte" },
    { label: t("nav.corsiA1A2"), href: "/corsi" },
    { label: t("nav.corsiA0A1"), href: "/corsi-a0-a1" },
    { label: t("nav.metodo"), href: "/metodo" },
    { label: t("nav.contatti"), href: "#contatti" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FDFAF4]/95 backdrop-blur-md shadow-sm border-b border-[#C4622D]/10"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663775518602/JeB9mAageaHKV6ReJxfunQ/logo-il2-3vfAVNuMihffgbme3USyW9.webp"
              alt="IL2 Logo"
              className="h-10 w-10 object-contain"
            />
            <span
              className={`font-display font-bold text-xl tracking-tight transition-colors ${
                scrolled ? "text-[#3D4A2E]" : "text-white"
              }`}
            >
              Italiano<span className="text-[#C4622D]"> L2</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-body text-sm font-700 tracking-wide transition-colors duration-200 relative group ${
                    scrolled
                      ? "text-[#3D4A2E] hover:text-[#C4622D]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C4622D] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right side: Language selector + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-sm transition-all ${
                  scrolled
                    ? "text-[#3D4A2E] hover:bg-[#C4622D]/10"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Select language"
              >
                <Globe size={18} />
                <span className="text-sm font-bold">
                  {languages.find((l) => l.code === language)?.flag}
                </span>
              </button>

              {/* Language Dropdown */}
              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-sm shadow-lg border border-[#C4622D]/20 overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left font-body text-sm transition-colors flex items-center gap-2 ${
                        language === lang.code
                          ? "bg-[#C4622D]/10 text-[#C4622D] font-bold"
                          : "text-[#3D4A2E] hover:bg-[#FDFAF4]"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <a
              href="#contatti"
              className="inline-flex items-center px-5 py-2.5 rounded-sm bg-[#C4622D] text-white font-body text-sm font-bold tracking-wide hover:bg-[#9E4E24] transition-all duration-200 active:scale-[0.97] shadow-sm"
            >
              {t("nav.primaLezioneGratuita")}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-[#3D4A2E]" : "text-white"
            }`}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-[#FDFAF4] border-b border-[#C4622D]/20`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="font-body text-[#3D4A2E] hover:text-[#C4622D] py-2.5 px-2 text-base font-bold border-b border-[#C4622D]/10 last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Language Selector Dropdown */}
          <div className="border-t border-[#C4622D]/20 my-2 pt-2 relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="w-full px-3 py-2.5 rounded-sm bg-[#C4622D]/10 text-[#3D4A2E] font-bold text-sm flex items-center justify-between hover:bg-[#C4622D]/20 transition-all"
            >
              <span>
                {languages.find((l) => l.code === language)?.flag} {languages.find((l) => l.code === language)?.name}
              </span>
              <span className="text-xs">▼</span>
            </button>
            {langMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-sm shadow-lg border border-[#C4622D]/20 overflow-hidden z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangMenuOpen(false);
                      setMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left font-body text-sm transition-colors flex items-center gap-2 ${
                      language === lang.code
                        ? "bg-[#C4622D]/10 text-[#C4622D] font-bold"
                        : "text-[#3D4A2E] hover:bg-[#FDFAF4]"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-[#C4622D]/20 my-2" />
          <a
            href="#contatti"
            onClick={handleLinkClick}
            className="mt-4 text-center px-5 py-3 rounded-sm bg-[#C4622D] text-white font-body font-bold tracking-wide hover:bg-[#9E4E24] transition-colors"
          >
            {t("nav.primaLezioneGratuita")}
          </a>
        </div>
      </div>
    </header>
  );
}
