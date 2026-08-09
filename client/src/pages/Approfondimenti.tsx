/* ============================================================
   Pagina Approfondimenti didattici
   Design "Piazza Italiana" con sezioni tematiche
   ============================================================ */
import { useEffect, useRef } from "react";

export default function Approfondimenti() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3D4A2E] to-[#2D3A1E] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Approfondimenti didattici</h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl">
            Dalle lingue madri all'italiano: difficoltà, strategie e metodologie per un insegnamento efficace.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section ref={sectionRef} className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          {/* Introduction */}
          <div className="reveal mb-16">
            <h2 className="font-display text-3xl font-bold text-[#3D4A2E] mb-6">Dalle lingue madri all'italiano: difficoltà e strategie</h2>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed">
              Insegnare l'italiano ad adulti con lingue madri diverse significa confrontarsi con sistemi linguistici, culturali e alfabetici eterogenei. Nei livelli iniziali (A0–A2) l'obiettivo è orientare, dare strumenti concreti e costruire fiducia: capire, parlare, leggere e scrivere in contesti reali. Differenze sintattiche, morfologiche e fonologiche possono rendere complessi articoli, genere, plurale, ordine delle parole, preposizioni e sistema verbale. Per questo servono un percorso chiaro, graduale e fortemente ancorato alla comunicazione quotidiana.
            </p>
          </div>

          {/* Section 1: Arabofoni */}
          <div className="reveal mb-16 p-8 bg-[#F5EDD6] rounded-lg">
            <h3 className="font-display text-2xl font-bold text-[#C4622D] mb-6">Adulti arabofoni: difficoltà grammaticali e strategie efficaci</h3>
            <p className="font-body text-[#3D4A2E] mb-6">
              Lavorare con apprendenti arabofoni è un percorso delicato e ricco: non si tratta solo di regole, ma di accompagnare persone reali in un apprendimento che intreccia lingua, cultura e relazioni. Nei livelli A0–A2 è prioritario farli sentire progressivamente più sicuri.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Ordine delle parole</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">L'italiano e l'arabo organizzano la frase in modo diverso. Gli studenti possono produrre frasi comprensibili ma poco naturali. Funzionano schemi semplici, frasi modello e attività di riordino.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Articoli</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">In italiano sono obbligatori e concordano con il nome. All'inizio molti arabofoni li omettono o li usano in modo incerto. Introdurli fin da subito insieme ai sostantivi ad alta frequenza, in modo stabile e ricorrente, favorisce l'automatismo.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Genere e plurale</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">Non è sempre immediato riconoscere maschile/femminile e applicare concordanze simultanee (nome–articolo–aggettivo). Presentare blocchi lessicali completi dentro frasi brevi, significative e ripetute rende l'apprendimento più solido.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Verbi</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">Conviene partire dalle forme più frequenti e funzionali (presente indicativo), poi introdurre gradualmente il resto, evitando sovraccarico.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Preposizioni</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">La corrispondenza con l'arabo non è diretta. Meglio insegnarle in espressioni fisse e contesti concreti (vado a scuola; sono in casa; parlo con un amico).</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Clima di classe</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">Un ambiente accogliente e non giudicante, che valorizza i bisogni reali, rende l'apprendimento più efficace e umano.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Attività efficaci</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">Completamento, riordino, trasformazione, abbinamento, riscrittura guidata; dialoghi brevi e simulazioni per favorire l'oralità e l'uso immediato.</p>
              </div>
            </div>
          </div>

          {/* Section 2: Lingue africane */}
          <div className="reveal mb-16 p-8 bg-[#EEF2E8] rounded-lg">
            <h3 className="font-display text-2xl font-bold text-[#5A6B44] mb-6">Adulti con lingue madri africane: differenze linguistiche e strategie efficaci</h3>
            <p className="font-body text-[#3D4A2E] mb-6">
              Con apprendenti provenienti da lingue africane ci si confronta con grande varietà tipologica. Riconoscere queste differenze consente percorsi più chiari e funzionali.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border-l-4 border-[#5A6B44]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Sistema nominale</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">Molte lingue non si basano su maschile/femminile ma su classi nominali o altri criteri. Questo incide sulla concordanza e rende meno immediato l'uso di articoli, aggettivi e accordi in italiano.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#5A6B44]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Lessico e organizzazione semantica</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">Funziona bene presentare parole per campi di significato (famiglia, casa, mercato, salute, trasporti). Utili mappe lessicali, immagini e attività di classificazione.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#5A6B44]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Struttura della frase</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">Se l'ordine sintattico della L1 differisce o dipende da marcatori interni, possono emergere frasi comprensibili ma poco naturali. Aiutano frasi modello, schemi e riordini.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#5A6B44]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Oralità e scrittura</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">In molti contesti l'oralità è forte e la letto-scrittura meno centrale o meno uniforme. Conviene partire da ascolto, ripetizione, dialoghi brevi e formule fisse (Mi chiamo…, Ho bisogno di…, Può ripetere?).</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#5A6B44]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Pronuncia e prosodia</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">In lingue tonali il tono distingue significati; in italiano la prosodia ha funzione diversa. Serve lavorare su ritmo, intonazione e scansione della frase, oltre che sui singoli suoni.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#5A6B44]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Numero e concordanza</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">In italiano il plurale è visibile in nome, articolo e aggettivo; altrove il numero può essere espresso in modi differenti. Proporre esempi brevi, concreti e ben contestualizzati facilita il trasferimento.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#5A6B44]">
                <p className="font-display font-bold text-[#3D4A2E] mb-2">Principi guida</p>
                <p className="font-body text-sm text-[#3D4A2E]/75">Competenza, gradualità, concretezza, ascolto dei bisogni individuali e attenzione alla comunicazione reale.</p>
              </div>
            </div>
          </div>

          {/* Section 3: Strategie trasversali */}
          <div className="reveal mb-16 p-8 bg-[#FAE8DC] rounded-lg">
            <h3 className="font-display text-2xl font-bold text-[#C4622D] mb-6">Strategie didattiche trasversali</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-body text-sm text-[#3D4A2E]">✓ Partire da funzioni comunicative reali: presentarsi, chiedere informazioni, fare acquisti, parlare del lavoro, prendere un appuntamento, comprendere cartelli o moduli.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-body text-sm text-[#3D4A2E]">✓ Una struttura alla volta: dosare input e pratica, evitando di introdurre più variabili grammaticali contemporaneamente.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-body text-sm text-[#3D4A2E]">✓ Lessico per campi semantici: cluster lessicali e blocchi nome–articolo–aggettivo dentro frasi significative.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-body text-sm text-[#3D4A2E]">✓ Valorizzare l'oralità: ascolto, ripetizione, dialoghi brevi, simulazioni, giochi di ruolo.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-body text-sm text-[#3D4A2E]">✓ Esercizi guidati e graduati: completamento, riordino, abbinamento, trasformazione, riscrittura; dalla guida alla produzione autonoma.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-body text-sm text-[#3D4A2E]">✓ Ripetizione distribuita: la ripetizione non è ridondante; consolida e rende disponibile la lingua nella comunicazione quotidiana.</p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-[#C4622D]">
                <p className="font-body text-sm text-[#3D4A2E]">✓ Differenziazione: in classi eterogenee, proporre la stessa attività con due livelli di difficoltà.</p>
              </div>
            </div>
          </div>

          {/* Section 4: Conclusione */}
          <div className="reveal mb-16 p-8 bg-[#F5EDD6] rounded-lg">
            <h2 className="font-display text-2xl font-bold text-[#3D4A2E] mb-4">Un insegnamento attento alla persona</h2>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed">
              Insegnare bene l'italiano non significa solo spiegare strutture, ma costruire fiducia, offrire strumenti concreti e accompagnare ogni studente in un percorso di crescita. La distanza tra sistemi linguistici e culturali non è un ostacolo insuperabile: può diventare una risorsa, se gestita con sensibilità, competenza e cura. La qualità del lavoro didattico si misura nell'equilibrio tra competenza linguistica e attenzione alla persona.
            </p>
          </div>

          {/* CTA */}
          <div className="reveal text-center mt-16">
            <a
              href="#contatti"
              className="inline-flex px-8 py-4 bg-[#C4622D] text-white font-body font-bold text-base tracking-wide rounded-sm hover:bg-[#9E4E24] transition-all duration-200 active:scale-[0.97] shadow-lg"
            >
              Scopri i miei corsi specializzati
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
