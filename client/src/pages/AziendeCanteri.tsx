/* ============================================================
   AziendeCanteri — Italiano nella gestione dei cantieri
   Linguaggio chiaro, prevenzione concreta
   ============================================================ */
import { Link } from "wouter";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function AziendeCanteri() {
  const includes = [
    "Lessico tecnico del cantiere.",
    "Indicazioni operative e istruzioni di lavoro.",
    "Sicurezza, DPI e diagnostica.",
    "Comunicazione con capisquadra e colleghi.",
    "Intercultura e prevenzione delle incomprensioni.",
  ];

  const objectives = [
    "Migliora la sicurezza sul campo.",
    "Favorisce coordinamento e rapidità.",
    "Ridurre il rischio di errori operativi.",
    "Sostiene la gestione di squadre multietniche.",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="container">
          <Link href="/aziende">
            <a className="flex items-center gap-2 text-[#C4622D] font-bold mb-4 hover:text-[#9E4E24] transition-colors">
              <ArrowLeft size={18} />
              Torna a Italiano per Aziende
            </a>
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Italiano nella gestione dei cantieri
          </h1>
          <p className="font-body text-lg text-foreground/75 mt-4">
            Linguaggio chiaro, prevenzione concreta
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Text */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
                  Nel cantiere la comunicazione deve essere rapida, precisa e assolutamente comprensibile. La presenza di lavoratori con background linguistici e culturali diversi rende ancora più importante una formazione orientata alla realtà operativa e alla sicurezza quotidiana.
                </p>
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  Un percorso di italiano L2 per il cantiere aiuta a interpretare istruzioni, ordini di servizio, segnaletica, movimenti di squadra, accessi, procedure di sicurezza e uso dei DPI. L'obiettivo è sostenere l'autonomia operativa e favorire una collaborazione più fluida tra capisquadra, addetti e coordinatori.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Cosa include il percorso
                </h2>
                <ul className="space-y-3">
                  {includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                      <span className="font-body text-foreground/75">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Obiettivi
                </h2>
                <ul className="space-y-3">
                  {objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                      <span className="font-body text-foreground/75">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-[#F5EDD6] rounded-lg p-6">
                <h3 className="font-display text-xl font-bold text-[#3D4A2E] mb-4">
                  Interessato?
                </h3>
                <p className="font-body text-sm text-[#3D4A2E]/75 mb-6">
                  Contattami per discutere come posso aiutare i tuoi cantieri a comunicare meglio e lavorare in sicurezza.
                </p>
                <a
                  href="#contatti"
                  className="block text-center px-4 py-3 rounded-sm bg-[#C4622D] text-white font-body font-bold tracking-wide hover:bg-[#9E4E24] transition-all duration-200"
                >
                  Contattami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
