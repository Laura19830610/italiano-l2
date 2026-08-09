/* ============================================================
   AziendePersonalizzato — Italiano per aziende su misura
   Formazione flessibile, concreta, personalizzata
   ============================================================ */
import { Link } from "wouter";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function AziendePersonalizzato() {
  const includes = [
    "Analisi del bisogno linguistico.",
    "Programma personalizzato.",
    "Materiali caratteristici.",
    "Moduli brevi e operativi.",
    "Verifica dei progressi e obiettivi concreti.",
  ];

  const objectives = [
    "Rispondere ai bisogni reali dell'impresa.",
    "Ottimizza tempi e risorse.",
    "Migliora l'efficacia della formazione.",
    "Rendere il percorso coerente con il contesto di lavoro.",
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
            Italiano per aziende su misura
          </h1>
          <p className="font-body text-lg text-foreground/75 mt-4">
            Formazione flessibile, concreta, personalizzata
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
                  Ogni azienda ha bisogni diversi. Cambiano il settore, la struttura dei reparti, il livello linguistico dei lavoratori e il tipo di comunicazione richiesta. Per questo propongo percorsi di italiano L2 realizzati su misura, dopo un'analisi iniziale delle necessità e degli obiettivi formativi.
                </p>
                <p className="font-body text-lg text-foreground/80 leading-relaxed">
                  La formazione può essere pensata per singoli lavoratori, piccoli gruppi o interi reparti, con contenuti mirati alla produzione, alla sicurezza, all'inserimento e alla comunicazione interna. L'intervento può essere calibrato in presenza o online, in orari compatibili con i turni e con l'organizzazione aziendale.
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

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Come si svolge il percorso
                </h2>
                <p className="font-body text-lg text-foreground/80 leading-relaxed mb-4">
                  Ogni intervento parte da un'analisi dei bisogni dell'azienda e del profilo dei partecipanti. In base ai risultati, costruisco un programma personalizzato con obiettivi chiari, contenuti mirati e materiali realmente utili al contesto professionale.
                </p>
                <p className="font-body font-bold text-foreground mb-3">Le lezioni possono svolgersi:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground/75">in presenza, direttamente presso la tua azienda o sede</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground/75">online, per sedi distaccate o personale distribuito su più turni</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground/75">in orari flessibili, concordati in base alle esigenze produttive</span>
                  </li>
                </ul>
                <p className="font-body font-bold text-foreground mb-3">Su richiesta, il percorso può includere anche:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground/75">moduli di intercultura</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground/75">supporto linguistico per l'inserimento iniziale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground/75">lessico per reparti specifici</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground/75">italiano per comunicazioni interne e operative</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground/75">approfondimenti su sicurezza e comportamento in azienda</span>
                  </li>
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
                  Contattami per discutere come posso personalizzare un percorso di italiano L2 per la tua azienda.
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
