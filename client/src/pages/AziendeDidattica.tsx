/* ============================================================
   AziendeDidattica — Dalle lingue madri all'italiano
   TESTO COMPLETO dal file Word + FAQ COMPLETE
   ============================================================ */
import { Link } from "wouter";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function AziendeDidattica() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const faqArabofoni = [
    {
      id: "arabo-1",
      q: "Perché gli studenti arabofoni fanno fatica con l'ordine delle parole in italiano?",
      a: "Perché italiano e arabo organizzano la frase in modo diverso. Gli studenti possono capire il significato, ma costruire frasi poco naturali. Schemi fissi e riordino delle frasi aiutano molto.",
    },
    {
      id: "arabo-2",
      q: "Qual è la difficoltà più comune con gli articoli italiani?",
      a: "Molti studenti tendono a ometterli o a usarli in modo incerto. In italiano gli articoli sono obbligatori e devono concordare con il nome.",
    },
    {
      id: "arabo-3",
      q: "Perché il genere grammaticale è difficile?",
      a: "Perché non sempre è facile riconoscere se un nome è maschile o femminile. Presentare il nome insieme all'articolo facilita l'apprendimento.",
    },
    {
      id: "arabo-4",
      q: "Perché il plurale crea problemi?",
      a: "Perché in italiano cambiano spesso nome, articolo e aggettivo insieme. Lavorare su esempi brevi e ripetuti renderà la regola più chiara.",
    },
    {
      id: "arabo-5",
      q: "Come insegnare bene i tempi verbali?",
      a: "È utile partire dalle forme più frequenti e funzionali, come il presente indicativo, e introdurre il resto in modo graduale.",
    },
    {
      id: "arabo-6",
      q: "Come aiutare con le preposizioni?",
      a: "Meglio insegnarle in espressioni fisse e in situazioni concrete, non come liste da memorizzare.",
    },
    {
      id: "arabo-7",
      q: "Quali attività funzionano meglio?",
      a: "Completamento, riordino, trasformazione, abbinamento, dialoghi brevi e simulazioni.",
    },
    {
      id: "arabo-8",
      q: "Come rendere la grammatica meno astratta?",
      a: "Collegandola sempre a una funzione reale: presentarsi, chiedere, descrivere, raccontare, interagire.",
    },
  ];

  const faqAfricane = [
    {
      id: "afr-1",
      q: "In che cosa il sistema del nome nelle lingue africane può differire dall'italiano?",
      a: "In molte lingue africane il nome non si organizza secondo genere maschile/femminile, ma attraverso classi nominali o altri sistemi di classificazione. Questo cambia la concordanza nella frase.",
    },
    {
      id: "afr-2",
      q: "Perché il genere grammaticale italiano è poco immediato per alcuni studenti?",
      a: "Perché l'italiano si basa sull'accordo su genere e numero, mentre altre lingue usano criteri diversi. Serve adattarsi a una nuova logica morfosintattica.",
    },
    {
      id: "afr-3",
      q: "In che modo le classi nominali incidono sulla concordanza?",
      a: "L'accordo può coinvolgere nome, aggettivo, verbo e altri elementi. In italiano la concordanza segue soprattutto maschile/femminile e singolare/plurale.",
    },
    {
      id: "afr-4",
      q: "Perché la struttura della frase può creare difficoltà?",
      a: "Perché l'ordine degli elementi non è lo stesso nelle due lingue; alcune lingue africane usano marcatori grammaticali diversi dall'italiano.",
    },
    {
      id: "afr-5",
      q: "Qual è la differenza più rilevante tra un sistema tonale e l'italiano?",
      a: "In molte lingue africane il tono distingue parole diverse; in italiano no. Questo influisce sulla percezione della pronuncia e dell'intonazione.",
    },
    {
      id: "afr-6",
      q: "Perché lessico e morfologia vengono spesso appresi in modo diverso?",
      a: "Perché il lessico può essere fortemente collegato a categorie semantiche o a strutture interne, mentre l'italiano separa maggiormente lessico, genere e numero.",
    },
    {
      id: "afr-7",
      q: "Come cambiare l'apprendimento del plurale?",
      a: "In italiano il plurale è spesso segnato morfologicamente in modo visibile; altrove il numero può essere espresso con meccanismi diversi o integrati nei sistemi di classificazione.",
    },
    {
      id: "afr-8",
      q: "Perché l'articolo è un punto critico?",
      a: "Perché l'italiano richiede l'uso sistematico dell'articolo; in molte lingue africane il determinante funziona diversamente o ha un ruolo meno simile.",
    },
    {
      id: "afr-9",
      q: "Che rapporto c'è tra oralità e scrittura?",
      a: "In molti contesti africani l'oralità ha un peso forte; la scrittura può essere meno standardizzata nel primo apprendimento. L'italiano integra strettamente oralità e letto-scrittura.",
    },
    {
      id: "afr-10",
      q: "Perché i confronti tra L1 e italiano sono utili?",
      a: "Per individuare dove la distanza è maggiore e progettare attività mirate che aiutino lo studente a consapevolizzare le differenze e a costruire strategie di apprendimento.",
    },
  ];

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

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
            Dalle lingue madri all'italiano
          </h1>
          <p className="font-body text-lg text-foreground/75 mt-4">
            Difficoltà e strategie nell'insegnamento dell'italiano L2 agli adulti
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Insegnare l'italiano ad adulti con lingue madri diverse significa confrontarsi con sistemi linguistici, culturali e alfabetici eterogenei. Nei livelli iniziali, da A0 ad A2, l'obiettivo non è solo trasmettere regole, ma orientare, offrire strumenti concreti e costruire fiducia: capire, parlare, leggere e scrivere in contesti reali.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Differenze sintattiche, morfologiche e fonologiche possono rendere complessi articoli, genere, plurale, ordine delle parole, preposizioni e sistema verbale. Per questo servono un percorso chiaro, graduale e fortemente ancorato alla comunicazione quotidiana.
            </p>
          </div>
        </div>
      </section>

      {/* Adulti Arabofoni */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Adulti arabofoni
          </h2>
          <div className="space-y-8">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Lavorare con apprendenti arabofoni è un percorso delicato e ricco: non si tratta solo di regole, ma di accompagnare persone reali in un apprendimento che intreccia lingua, cultura e relazioni. Nei livelli A0–A2 è prioritario farli sentire progressivamente più sicuri.
            </p>

            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Difficoltà comuni</h3>
              <ul className="space-y-3">
                <li className="font-body text-foreground/80">
                  <strong>Ordine delle parole:</strong> L'italiano e l'arabo organizzano la frase in modo diverso. Gli studenti possono produrre frasi comprensibili ma poco naturali.
                </li>
                <li className="font-body text-foreground/80">
                  <strong>Articoli:</strong> In italiano sono obbligatori e concordano con il nome. All'inizio molti arabofoni li omettono o li usano in modo incerto.
                </li>
                <li className="font-body text-foreground/80">
                  <strong>Genere e plurale:</strong> Non è sempre immediato riconoscere maschile e femminile e applicare le concordanze simultanee tra nome, articolo e aggettivo.
                </li>
                <li className="font-body text-foreground/80">
                  <strong>Verbi:</strong> È utile partire dalle forme più frequenti e funzionali, come il presente indicativo, e introdurre gradualmente il resto.
                </li>
                <li className="font-body text-foreground/80">
                  <strong>Preposizioni:</strong> La corrispondenza con l'arabo non è diretta.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Strategie efficaci</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Utilizzare schemi semplici e frasi modello</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Introdurre gli articoli insieme ai sostantivi ad alta frequenza</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Presentare blocchi lessicali completi dentro frasi brevi, significative e ripetute</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Insegnare le preposizioni in espressioni fisse e contesti concreti</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Proporre attività come completamento, riordino, trasformazione, abbinamento, riscrittura guidata</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Favorire dialoghi brevi e simulazioni per sostenere l'oralità</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Curare il clima di classe con un approccio accogliente e non giudicante</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Adulti Lingue Africane */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Adulti con lingue madri africane
          </h2>
          <div className="space-y-8">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Con gli apprendenti provenienti dalle lingue africane ci si confronta con una grande varietà tipologica. Riconoscere queste differenze consente percorsi più chiari e funzionali.
            </p>

            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Difficoltà comuni</h3>
              <ul className="space-y-3">
                <li className="font-body text-foreground/80">
                  <strong>Sistema nominale:</strong> Molte lingue non si basano su maschile e femminile, ma su classi nominali o altri criteri.
                </li>
                <li className="font-body text-foreground/80">
                  <strong>Lessico e organizzazione semantica:</strong> Il lessico può essere appreso meglio per campi di significato.
                </li>
                <li className="font-body text-foreground/80">
                  <strong>Struttura della frase:</strong> Se l'ordine sintattico della L1 differisce, possono emergere frasi comprensibili ma poco naturali.
                </li>
                <li className="font-body text-foreground/80">
                  <strong>Oralità e scrittura:</strong> In molti contesti l'oralità è forte e la letto-scrittura meno centrale.
                </li>
                <li className="font-body text-foreground/80">
                  <strong>Pronuncia e prosodia:</strong> Nelle lingue tonali il tono distingue significati; in italiano la prosodia ha una funzione diversa.
                </li>
                <li className="font-body text-foreground/80">
                  <strong>Numero e concordanza:</strong> In italiano il plurale è visibile in nome, articolo e aggettivo.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Strategie efficaci</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Presentare parole per campi semantici: famiglia, casa, mercato, salute, trasporti</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Utilizzare mappe lessicali, immagini e attività di classificazione</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Lavorare con frasi modello, schemi e riordini</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Partire da ascolto, ripetizione, dialoghi brevi e formule fisse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Curare ritmo, intonazione e scansione della frase</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Proporre esempi brevi, concreti e ben contestualizzati</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold">•</span>
                  <span className="font-body text-foreground/75">Mantenere come principi guida: competenza, gradualità, concretezza, ascolto dei bisogni individuali e attenzione alla comunicazione reale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Altri Profili */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Altri profili linguistici
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Adulti rumenofoni e albanofoni</h3>
              <ul className="space-y-2">
                <li className="font-body text-foreground/80">
                  <strong>Punti critici:</strong> Articoli, concordanze, preposizioni e sintassi. Per i rumenofoni la vicinanza lessicale aiuta ma comporta falsi amici; l'albanese presenta distanza tipologica maggiore.
                </li>
                <li className="font-body text-foreground/80">
                  <strong>Strategie:</strong> Frasi modello, confronti minimi, esercizi di trasformazione mirati su articolo, plurale, preposizioni.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Adulti bengalesi e pakistani</h3>
              <ul className="space-y-2">
                <li className="font-body text-foreground/80">
                  <strong>Punti critici:</strong> Ordine della frase, plurale, articoli, rapporto tra oralità e scrittura; la pronuncia richiede attenzione al ritmo e all'intonazione.
                </li>
                <li className="font-body text-foreground/80">
                  <strong>Strategia:</strong> Attività brevi e concrete, lessico per temi, immagini, scambi domanda-risposta, piccoli dialoghi.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategie Trasversali */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Strategie didattiche trasversali
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#C4622D] font-bold">•</span>
              <span className="font-body text-foreground/75">Partire da funzioni comunicative reali: presentarsi, chiedere informazioni, fare acquisti, parlare del lavoro, prendere un appuntamento, comprendere cartelli o moduli</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C4622D] font-bold">•</span>
              <span className="font-body text-foreground/75">Una struttura alla volta: dosare input e pratica, evitando di introdurre più variabili grammaticali contemporaneamente</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C4622D] font-bold">•</span>
              <span className="font-body text-foreground/75">Lessico per campi semantici: cluster lessicali e blocchi nome-articolo-aggettivo dentro frasi significative</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C4622D] font-bold">•</span>
              <span className="font-body text-foreground/75">Valorizzare l'oralità: ascolto, ripetizione, dialoghi brevi, simulazioni, giochi di ruolo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C4622D] font-bold">•</span>
              <span className="font-body text-foreground/75">Esercizi guidati e graduati: completamento, riordino, abbinamento, trasformazione, riscrittura; dalla guida alla produzione autonoma</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C4622D] font-bold">•</span>
              <span className="font-body text-foreground/75">Ripetizione distribuita: la ripetizione non è ridondante; consolidare e rendere disponibile la lingua nella comunicazione quotidiana</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C4622D] font-bold">•</span>
              <span className="font-body text-foreground/75">Differenziazione: in classi eterogenee, proponendo la stessa attività con due livelli di difficoltà</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Un insegnamento attento */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Un insegnamento attento alla persona
          </h2>
          <div className="space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Insegnare bene l'italiano non significa solo spiegare strutture, ma costruire fiducia, offrire strumenti concreti e accompagnare ogni studente in un percorso di crescita. La distanza tra sistemi linguistici e culturali non è un ostacolo insuperabile: può diventare una risorsa, se gestita con sensibilità, competenza e cura.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              La qualità del lavoro didattico si misura nell'equilibrio tra competenza linguistica e attenzione alla persona.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Arabofoni */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            FAQ – Adulti arabofoni
          </h2>
          <div className="space-y-3">
            {faqArabofoni.map((item) => (
              <div key={item.id} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted/50 transition-colors text-left"
                >
                  <span className="font-body font-bold text-foreground">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#C4622D] flex-shrink-0 transition-transform ${
                      expandedFaq === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === item.id && (
                  <div className="px-6 py-4 bg-muted/30 border-t border-border">
                    <p className="font-body text-foreground/75">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Africane */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            FAQ – Adulti con lingue madri africane
          </h2>
          <div className="space-y-3">
            {faqAfricane.map((item) => (
              <div key={item.id} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted/50 transition-colors text-left"
                >
                  <span className="font-body font-bold text-foreground">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#C4622D] flex-shrink-0 transition-transform ${
                      expandedFaq === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === item.id && (
                  <div className="px-6 py-4 bg-muted/30 border-t border-border">
                    <p className="font-body text-foreground/75">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
