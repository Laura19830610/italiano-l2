/* ============================================================
   AziendeSecurezza — Italiano per la sicurezza sul lavoro
   Capire per proteggersi
   ============================================================ */
import { Link } from "wouter";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function AziendeSecurezza() {
  const includes = [
    "Lessico della sicurezza.",
    "Cartelli, avvisi e simboli.",
    "Dispositivi di protezione individuale.",
    "Procedure di emergenza.",
    "Comportamenti corretti e divieti.",
    "Comprensione delle istruzioni e indicazioni operative.",
  ];

  const objectives = [
    "Rafforza la priorità della sicurezza.",
    "Migliorare la comprensione delle regole.",
    "Ridurre i rischi di incidente e incomprensione.",
    "Sostiene l'adempimento formativo in modo efficace.",
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
            Italiano per la sicurezza sul lavoro
          </h1>
          <p className="font-body text-lg text-foreground/75 mt-4">
            Capire per proteggersi
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
                  La sicurezza sul lavoro richiede comprensione reale, non solo presenza formale in aula. Il D.Lgs. 81/2008, in particolare l'art. 37, pone al centro la formazione comprensibile e, per i lavoratori immigrati, la verifica della conoscenza della lingua veicolare utilizzata nel percorso formativo. L'Accordo Stato-Regioni del 17 aprile 2025 rafforza ulteriormente l'importanza di contenuti chiari, coerenti e adeguati ai destinatari.
                </p>
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  Un percorso di italiano L2 dedicato alla sicurezza aiuta i lavoratori stranieri a comprendere cartelli, avvisi, procedure, DPI, norme interne ed eventuali istruzioni di emergenza. Questo non è solo un obiettivo linguistico: è un presidio concreto di prevenzione, tutela e responsabilità aziendale.
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
                  Contattami per discutere come posso aiutare la tua azienda a garantire una formazione sulla sicurezza realmente comprensibile per i lavoratori stranieri.
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
