/* ============================================================
   AziendeIntercultura — Italiano per lavoratori stranieri e intercultura
   Integrazione linguistica e professionale
   ============================================================ */
import { Link } from "wouter";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function AziendeIntercultura() {
  const includes = [
    "Italiano per la vita lavorativa quotidiana.",
    "Comunicazione interculturale.",
    "Lessico per relazioni interne e pratiche operative.",
    "Strategie per chiedere chiarimenti e segnalare difficoltà.",
    "Consapevolezza delle regole e dei ruoli in azienda.",
  ];

  const objectives = [
    "Favorisce integrazione e stabilità.",
    "Ridurre ulteriormente il margine comunicativo.",
    "Migliora il clima aziendale.",
    "Sostiene il benessere e la fidelizzazione del personale.",
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
            Italiano per lavoratori stranieri e intercultura
          </h1>
          <p className="font-body text-lg text-foreground/75 mt-4">
            Integrazione linguistica e professionale
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
                  L'inserimento di lavoratori stranieri in azienda richiede attenzione non solo agli aspetti amministrativi, ma anche alla dimensione relazionale e comunicativa. Le norme sull'assunzione dei cittadini stranieri e la gestione del rapporto di lavoro richiedono procedura corretta, mentre la quotidianità aziendale richiede comprensione reciproca, chiarezza e capacità di interazione.
                </p>
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  Un percorso di italiano L2 con taglio interculturale sostiene il lavoratore nello sviluppo di competenze linguistiche utili per orientarsi, chiedere, rispondere, collaborare e inserirsi nel team. Allo stesso tempo, aiuta l'azienda a creare un ambiente più accogliente, efficiente e consapevole delle differenze culturali.
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
                  Contattami per discutere come posso aiutare la tua azienda a creare un ambiente inclusivo e efficiente.
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
