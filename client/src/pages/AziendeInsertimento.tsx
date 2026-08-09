/* ============================================================
   AziendeInserimento — Italiano per l'inserimento in azienda
   Accogliere, orientare, integrare
   ============================================================ */
import { useTranslation } from "@/hooks/useTranslation";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function AziendeInserimento() {
  const { t } = useTranslation();

  const includes = [
    "Lessico di base per il contesto aziendale.",
    "Presentarsi, chiedere, rispondere, capire istruzioni.",
    "Regole interne e routine quotidiane.",
    "Comunicazioni con responsabilità e colleghi.",
    "Intercultura e comportamento nel luogo di lavoro.",
  ];

  const objectives = [
    "Favorisce un inserimento più rapido.",
    "Ridurre errori e incertezze iniziali.",
    "Aiuta il team ad accogliere meglio la nuova risorsa.",
    "Rafforza autonomia, fiducia e partecipazione.",
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
            Italiano per l'inserimento in azienda
          </h1>
          <p className="font-body text-lg text-foreground/75 mt-4">
            Accogliere, orientare, integrare
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
                  L'inserimento di un nuovo lavoratore è un passaggio delicato, soprattutto quando la persona arriva in azienda con una competenza linguistica ancora parziale. Un percorso di italiano L2 dedicato all'inserimento aiuta il dipendente a comprendere regole, routine, ruoli e aspettative, favorendo un avvio più sereno e più efficace.
                </p>
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  L'obiettivo non è solo "capire l'italiano", ma imparare a muoversi con sicurezza nel contesto aziendale: riconoscere le comunicazioni essenziali, interpretare istruzioni semplici, chiedere chiarimenti e interagire in modo appropriato con colleghi e responsabilità. Questo tipo di formazione sostiene la motivazione del lavoratore e riduce il rischio di fraintendimenti nelle prime fasi dell'assunzione.
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
                  Contattami per discutere come posso aiutare la tua azienda a integrare al meglio i nuovi dipendenti stranieri.
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
