/* ============================================================
   ItalianoPeAziende — Pagina principale per le aziende
   TESTO COMPLETO dal file Word
   ============================================================ */
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ItalianoPeAziende() {
  const services = [
    {
      id: "inserimento",
      title: "Italiano per l'inserimento in azienda",
      href: "/aziende/inserimento",
      icon: "👥",
    },
    {
      id: "produttive",
      title: "Italiano per ripartizioni produttive",
      href: "/aziende/produttive",
      icon: "🏭",
    },
    {
      id: "sicurezza",
      title: "Italiano per la sicurezza sul lavoro",
      href: "/aziende/sicurezza",
      icon: "🛡️",
    },
    {
      id: "cantieri",
      title: "Italiano nella gestione dei cantieri",
      href: "/aziende/cantieri",
      icon: "🏗️",
    },
    {
      id: "intercultura",
      title: "Italiano per lavoratori stranieri e intercultura",
      href: "/aziende/intercultura",
      icon: "🌍",
    },
    {
      id: "misura",
      title: "Italiano per aziende su misura",
      href: "/aziende/misura",
      icon: "⚙️",
    },
  ];

  const benefitsAzienda = [
    "Riduzione degli errori dovuti a incomprensioni linguistiche.",
    "Maggiore autonomia operativa del personale.",
    "Più attenzione alle procedure e alla sicurezza.",
    "Migliore collaborazione tra colleghi e reparti.",
    "Clima aziendale più sereno, ordinato e produttivo.",
  ];

  const benefitsDipendente = [
    "Maggiore sicurezza nel lavoro quotidiano.",
    "Più fiducia nella comunicazione con colleghi e superiori.",
    "Migliore comprensione delle regole aziendali.",
    "Opportunità di crescita professionale.",
    "Più integrazione nel gruppo di lavoro.",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#C4622D] to-[#D97B4A]">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Meno errori, più sicurezza
            </h1>
            <p className="font-body text-lg text-white/90">
              Italiano L2 e Intercultura per dipendenti stranieri
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <p className="font-body text-lg text-foreground/80 mb-8 leading-relaxed">
              Un lavoratore che comprende bene l'italiano lavora con maggiore autonomia, si integra più facilmente nel team e contribuisce in modo concreto alla sicurezza, all'efficienza e alla qualità del lavoro. Investire nella formazione linguistica significa ridurre i rischi di incomprensione, migliorare la collaborazione interna e rafforzare la capacità dell'azienda di gestire persone, processi e responsabilità con più serenità.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Perché scegliere un percorso di italiano per il lavoro
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="font-body text-lg text-foreground/80 mb-6 leading-relaxed">
                Nelle aziende, nei reparti produttivi e nei cantieri, la lingua è uno strumento operativo essenziale. Quando le istruzioni non sono chiare, aumentano il rischio di errori, rallentamenti, sprechi, incomprensioni sulle procedure e difficoltà nella gestione quotidiana delle attività. Un percorso di italiano L2 costruito sul contesto reale di lavoro aiuta i dipendenti stranieri a comprendere, agire e comunicare con maggiore sicurezza.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                La formazione linguistica diventa quindi una leva strategica per:
              </p>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground/75">migliorare la comunicazione interna</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground/75">favorire l'autonomia operativa</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground/75">ridurre il margine di errore</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground/75">sostenere l'inserimento e la permanenza del personale</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground/75">rafforzare la cultura della prevenzione e della collaborazione</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Riferimenti Normativi */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Riferimenti normativi
          </h2>
          <div className="max-w-4xl space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Il percorso si colloca nel quadro della normativa italiana in materia di salute e sicurezza sul lavoro e di lavoro dei cittadini stranieri. Il riferimento centrale è il Decreto Legislativo 9 aprile 2008, n. 81, in particolare l'art. 37, che disciplina la formazione dei lavoratori e richiede che i contenuti siano facilmente comprensibili. Per i lavoratori immigrati, la norma inoltre la verifica della comprensione e conoscenza della lingua veicolare utilizzata nel percorso formativo.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              L'Accordo Stato-Regioni del 17 aprile 2025 ha rafforzato l'impianto della formazione in materia di salute e sicurezza, definendo contenuti e modalità che devono garantire una reale comprensione da parte dei destinatari.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              A questo quadro si affianca anche la ISO 45001, lo standard internazionale per i sistemi di gestione della salute e sicurezza sul lavoro. ISO 45001 aiuta le organizzazioni a strutturare prevenzione, controllo dei rischi, coinvolgimento dei lavoratori e miglioramento continuo delle condizioni di salute e sicurezza; in questo senso valorizza anche la chiarezza della comunicazione, la consapevolezza dei ruoli e la partecipazione attiva delle persone.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Per la gestione dei dipendenti migranti e stranieri, il riferimento generale è il quadro normativo sull'ingresso, il soggiorno e il lavoro in Italia, che comprende il Testo Unico sull'Immigrazione e le relative procedure per l'assunzione di cittadini extra UE e per il loro inserimento regolare nel contesto lavorativo. In ambito aziendale, ciò significa prestare attenzione non solo agli adempimenti formali, ma anche alla reale possibilità del lavoratore di comprendere istruzioni, regole, ruoli e responsabilità.
            </p>
          </div>
        </div>
      </section>

      {/* Lezioni Concrete */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Lezioni concrete, non scolastiche
          </h2>
          <div className="max-w-4xl space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              No ai percorsi generici e lontani dalla realtà dell'impresa. Sì a una formazione utile, pratica e immediatamente spendibile nel lavoro quotidiano.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed font-bold">
              Il programma può essere conforme a:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                <span className="font-body text-foreground/75">lessico tecnico e settoriale</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                <span className="font-body text-foreground/75">italiano per istruzioni, ordini e procedure</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                <span className="font-body text-foreground/75">comunicazione con colleghi, responsabili e clienti</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                <span className="font-body text-foreground/75">lessico della sicurezza sul lavoro</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                <span className="font-body text-foreground/75">comprensione di cartelli, avvisi, norme e DPI</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                <span className="font-body text-foreground/75">simulazioni pratiche basate su situazioni reali del reparto o del cantiere</span>
              </li>
            </ul>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Ogni percorso viene costruito in base al livello linguistico dei partecipanti, alle esigenze del settore e agli obiettivi dell'azienda. L'impostazione è modulare, concreta e orientata ai risultati.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Servizi su misura
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <Link key={service.id} href={service.href}>
                <a className="group h-full bg-card rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-[#C4622D]/50 cursor-pointer">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-[#C4622D] transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#C4622D] font-bold text-sm">
                    Scopri di più
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </Link>
            ))}
          </div>

          {/* Servizi Description */}
          <div className="max-w-4xl mx-auto space-y-8 mt-16">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Italiano per l'inserimento in azienda</h3>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-3">
                Percorsi pensati per i nuovi assunti e per i lavoratori che devono ambientarsi rapidamente nel contesto aziendale. L'obiettivo è facilitare la comprensione delle regole interne, routine operativa, ruoli, comunicazioni di base e dinamiche relazionali del luogo di lavoro.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                Questo tipo di intervento è particolarmente utile quando l'azienda accoglie personale con competenze professionali già presenti ma con una conoscenza dell'italiano ancora iniziale o intermedia. Il percorso aiuta a costruire fiducia, autonomia e partecipazione attiva sin dai primi giorni.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Italiano per ripartizioni produttive</h3>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-3">
                Percorsi mirati per fabbriche, magazzini, linee produttive, logistica e contesti industriali. Il focus è sul lessico tecnico necessario a comprendere istruzioni operative, turni, controlli qualità, segnalazioni e comunicazioni tra reparti.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                In questi contesti la lingua deve essere funzionale, rapida e precisa: un fraintendimento può generare rallentamenti, errori e criticità organizzative. La formazione linguistica supporta quindi efficienza, sicurezza e collaborazione.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Italiano per la sicurezza sul lavoro</h3>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-3">
                Percorsi dedicati alla comprensione della segnaletica, delle procedure di prevenzione, dei dispositivi di protezione individuale, delle istruzioni di emergenza e della documentazione di sicurezza. La finalità è rendere il lavoratore più consapevole e più autonomo rispetto ai comportamenti corretti da tenere sul posto di lavoro.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                Questa area è particolarmente importante perché la normativa richiede che la formazione sia realmente comprensibile e, per i lavoratori stranieri, verificata nella lingua veicolare utilizzata. Un italiano funzionale alla sicurezza non è solo una competenza linguistica: è uno strumento di tutela per persone e impresa.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Italiano nella gestione dei cantieri</h3>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-3">
                Percorsi specifici per il settore edile e per i contesti di cantiere, dove la comunicazione deve essere chiara, rapida e coerente con le regole di sicurezza. Il lavoro in cantiere richiede comprensione di istruzioni operative, segnaletica, procedura di accesso, uso dei DPI, scambi con capi squadra e coordinamento tra più figure professionali.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                Nei cantieri multietnici la dimensione linguistica e interculturale è decisiva: una comunicazione poco chiara può compromettere la prevenzione e la qualità del lavoro. Per questo il percorso integra lessico tecnico, comunicazione pratica e consapevolezza interculturale.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Italiano per lavoratori stranieri e intercultura</h3>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-3">
                L'inserimento di lavoratori stranieri in azienda richiede attenzione non solo agli aspetti amministrativi, ma anche alla dimensione relazionale e comunicativa. Le norme sull'assunzione dei cittadini stranieri e la gestione del rapporto di lavoro richiedono procedura corretta, mentre la quotidianità aziendale richiede comprensione reciproca, chiarezza e capacità di interazione.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                Un percorso di italiano L2 con taglio interculturale sostiene il lavoratore nello sviluppo di competenze linguistiche utili per orientarsi, chiedere, rispondere, collaborare e inserirsi nel team. Allo stesso tempo, aiuta l'azienda a creare un ambiente più accogliente, efficiente e consapevole delle differenze culturali.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Italiano per aziende su misura</h3>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-3">
                Ogni azienda ha bisogni diversi. Cambiano il settore, la struttura dei reparti, il livello linguistico dei lavoratori e il tipo di comunicazione richiesta. Per questo propongo percorsi di italiano L2 realizzati su misura, dopo un'analisi iniziale delle necessità e degli obiettivi formativi.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
                La formazione può essere pensata per singoli lavoratori, piccoli gruppi o interi reparti, con contenuti mirati alla produzione, alla sicurezza, all'inserimento e alla comunicazione interna. L'intervento può essere calibrato in presenza o online, in orari compatibili con i turni e con l'organizzazione aziendale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Un vantaggio per tutti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Per l'azienda</h3>
              <ul className="space-y-3">
                {benefitsAzienda.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground/75">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Per il dipendente</h3>
              <ul className="space-y-3">
                {benefitsDipendente.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C4622D] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground/75">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Come si svolge */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Come si svolge il percorso
          </h2>
          <div className="space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Ogni intervento parte da un'analisi dei bisogni dell'azienda e del profilo dei partecipanti. In base ai risultati, costruisco un programma personalizzato con obiettivi chiari, contenuti mirati e materiali realmente utili al contesto professionale.
            </p>
            <div>
              <p className="font-body text-lg font-bold text-foreground mb-4">Le lezioni possono svolgersi:</p>
              <ul className="space-y-2 mb-6">
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
            </div>
            <div>
              <p className="font-body text-lg font-bold text-foreground mb-4">Su richiesta, il percorso può includere anche:</p>
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
        </div>
      </section>

      {/* Perché è strategico */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Perché è una scelta strategica
          </h2>
          <p className="font-body text-lg text-foreground/80 leading-relaxed">
            La formazione linguistica in azienda non è solo un servizio educativo: è un investimento in sicurezza, inclusione e organizzazione. Un dipendente che capisce meglio ciò che deve fare lavora con maggiore efficacia, commette meno errori e si sente parte attiva dell'impresa. Allo stesso tempo, l'azienda migliora la propria capacità di accogliere, formare e valorizzare il personale, in coerenza con gli obblighi e gli obiettivi del quadro normativo vigente.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#F5EDD6]">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#3D4A2E] mb-4">
            Incontrami
          </h2>
          <p className="font-body text-lg text-[#3D4A2E]/75 mb-8 max-w-2xl mx-auto">
            Se desideri un percorso di italiano L2 pensato per la tua azienda, posso aiutarti a progettare una soluzione su misura, efficace e coerente con gli obiettivi del tuo reparto.
          </p>
          <div className="mb-8">
            <p className="font-body font-bold text-[#3D4A2E] mb-2">Laura Paupini</p>
            <p className="font-body text-[#3D4A2E]/75">Italiano L2 per aziende e lavoratori stranieri</p>
            <p className="font-body text-[#3D4A2E]/75">WhatsApp / Tel: +39 347 592 2465</p>
          </div>
          <a
            href="#contatti"
            className="inline-flex items-center px-6 py-3 rounded-sm bg-[#C4622D] text-white font-body font-bold tracking-wide hover:bg-[#9E4E24] transition-all duration-200 active:scale-[0.97]"
          >
            Contattami
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </section>

      {/* Link to Didattica */}
      <section className="py-8 text-center border-t border-border">
        <div className="container">
          <Link href="/aziende/didattica">
            <a className="inline-flex items-center gap-2 text-[#C4622D] font-bold hover:text-[#9E4E24] transition-colors">
              Leggi anche: Dalle lingue madri all'italiano (Pagina didattica + FAQ)
              <ArrowRight size={18} />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
