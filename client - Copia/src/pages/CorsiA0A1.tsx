/* ============================================================
   Pagina Corsi A0→A1 — Design "Piazza Italiana"
   Comparazione 30 ore vs 60 ore con accordion per dettagli
   ============================================================ */
import { ChevronDown, Clock, BookOpen, Target } from "lucide-react";
import { useState } from "react";

interface CourseUnit {
  title: string;
  duration: string;
  description: string;
  topics: string[];
}

const course30Hours: CourseUnit[] = [
  {
    title: "Unità 0",
    duration: "2 Ore",
    description: "Ponte linguistico arabo ↔ italiano",
    topics: [
      "Struttura della frase",
      "Articoli",
      "Possesso",
      "Stato costrutto",
      "Differenze tra arabo e italiano",
    ],
  },
  {
    title: "Unità 1",
    duration: "3 Ore",
    description: "Mi presento",
    topics: [
      "Saluti",
      "Pronomi personali",
      "Verbo essere",
      "Nazionalità",
      "Emozioni e stati d'animo",
    ],
  },
  {
    title: "Unità 2",
    duration: "3 Ore",
    description: "Casa e oggetti quotidiani",
    topics: [
      "Articoli determinativi e indeterminativi",
      "Oggetti della casa",
      "Mobili",
      "Aggettivi base",
      "C'è / Ci sono",
    ],
  },
  {
    title: "Unità 3",
    duration: "3 Ore",
    description: "La famiglia e il verbo avere",
    topics: [
      "Famiglia",
      "Figli",
      "Numeri",
      "Possessivi",
      "Verbo avere",
    ],
  },
  {
    title: "Unità 4",
    duration: "3 Ore",
    description: "Dove abito?",
    topics: [
      "Verbo abitare",
      "Città e quartiere",
      "Luoghi pubblici",
      "Preposizioni",
      "Orientamento",
    ],
  },
  {
    title: "Unità 5",
    duration: "3 Ore",
    description: "Le azioni quotidiane",
    topics: [
      "Lavorare",
      "Studiare",
      "Parlare",
      "Andare",
      "Mangiare",
      "Dormire",
      "Avverbi di tempo",
    ],
  },
  {
    title: "Unità 5 BIS",
    duration: "2 Ore",
    description: "Grande ripasso grammaticale",
    topics: [
      "Essere",
      "Avere",
      "Abitare",
      "Articoli",
      "Singolare e plurale",
      "Maschile e femminile",
      "Domande e negazione",
    ],
  },
  {
    title: "Unità 5.1",
    duration: "2 Ore",
    description: "Esercitazioni guidate",
    topics: [
      "Completamento",
      "Scelta multipla",
      "Riordino frasi",
      "Traduzioni guidate",
      "Produzione orale",
    ],
  },
  {
    title: "Unità 5.2",
    duration: "2 Ore",
    description: "Consolidamento comunicativo",
    topics: [
      "Dialoghi",
      "Simulazioni",
      "Scuola",
      "Servizi",
      "Famiglia",
      "Vita quotidiana",
    ],
  },
  {
    title: "Unità 6",
    duration: "2 Ore",
    description: "Cibo e bevande",
    topics: [
      "Alimenti",
      "Pasti",
      "Preferenze",
      "Comprare e chiedere",
    ],
  },
  {
    title: "Unità 7",
    duration: "2 Ore",
    description: "Fare la spesa",
    topics: [
      "Supermercato",
      "Prezzi",
      "Quantità",
      "Numeri",
      "Richieste semplici",
    ],
  },
  {
    title: "Unità 8",
    duration: "2 Ore",
    description: "Tempo e appuntamenti",
    topics: [
      "Giorni",
      "Mesi",
      "Ore",
      "Date",
      "Appuntamenti",
    ],
  },
  {
    title: "Unità 9",
    duration: "2 Ore",
    description: "Salute e farmacia",
    topics: [
      "Sintomi",
      "Parti del corpo",
      "Medico",
      "Farmacia",
      "Appuntamenti sanitari",
    ],
  },
  {
    title: "Unità 10",
    duration: "2 Ore",
    description: "Ripasso finale e verifica",
    topics: [
      "Simulazioni reali",
      "Verifica finale",
      "Autovalutazione",
    ],
  },
];

const course60Hours: CourseUnit[] = [
  {
    title: "Unità 0",
    duration: "4 Ore",
    description: "Ponte linguistico arabo ↔ italiano",
    topics: [
      "Struttura della frase",
      "Articoli",
      "Possesso",
      "Stato costrutto",
      "Differenze tra arabo e italiano",
    ],
  },
  {
    title: "Unità 1",
    duration: "6 Ore",
    description: "Mi presento",
    topics: [
      "Saluti",
      "Pronomi personali",
      "Verbo essere",
      "Nazionalità",
      "Emozioni e stati d'animo",
    ],
  },
  {
    title: "Unità 2",
    duration: "6 Ore",
    description: "Casa e oggetti quotidiani",
    topics: [
      "Articoli determinativi e indeterminativi",
      "Oggetti della casa",
      "Mobili",
      "Aggettivi base",
      "C'è / Ci sono",
    ],
  },
  {
    title: "Unità 3",
    duration: "6 Ore",
    description: "La famiglia e il verbo avere",
    topics: [
      "Famiglia",
      "Figli",
      "Numeri",
      "Possessivi",
      "Verbo avere",
    ],
  },
  {
    title: "Unità 4",
    duration: "6 Ore",
    description: "Dove abito?",
    topics: [
      "Verbo abitare",
      "Città e quartiere",
      "Luoghi pubblici",
      "Preposizioni",
      "Orientamento",
    ],
  },
  {
    title: "Unità 5",
    duration: "6 Ore",
    description: "Le azioni quotidiane",
    topics: [
      "Lavorare",
      "Studiare",
      "Parlare",
      "Andare",
      "Mangiare",
      "Dormire",
      "Avverbi di tempo",
    ],
  },
  {
    title: "Unità 5 BIS",
    duration: "4 Ore",
    description: "Grande ripasso grammaticale",
    topics: [
      "Essere",
      "Avere",
      "Abitare",
      "Articoli",
      "Singolare e plurale",
      "Maschile e femminile",
      "Domande e negazione",
    ],
  },
  {
    title: "Unità 5.1",
    duration: "4 Ore",
    description: "Esercitazioni guidate",
    topics: [
      "Completamento",
      "Scelta multipla",
      "Riordino frasi",
      "Traduzioni guidate",
      "Produzione orale",
    ],
  },
  {
    title: "Unità 5.2",
    duration: "4 Ore",
    description: "Consolidamento comunicativo",
    topics: [
      "Dialoghi",
      "Simulazioni",
      "Scuola",
      "Servizi",
      "Famiglia",
      "Vita quotidiana",
    ],
  },
  {
    title: "Unità 6",
    duration: "4 Ore",
    description: "Cibo e bevande",
    topics: [
      "Alimenti",
      "Pasti",
      "Preferenze",
      "Comprare e chiedere",
    ],
  },
  {
    title: "Unità 7",
    duration: "4 Ore",
    description: "Fare la spesa",
    topics: [
      "Supermercato",
      "Prezzi",
      "Quantità",
      "Numeri",
      "Richieste semplici",
    ],
  },
  {
    title: "Unità 8",
    duration: "4 Ore",
    description: "Tempo e appuntamenti",
    topics: [
      "Giorni",
      "Mesi",
      "Ore",
      "Date",
      "Appuntamenti",
    ],
  },
  {
    title: "Unità 9",
    duration: "4 Ore",
    description: "Salute e farmacia",
    topics: [
      "Sintomi",
      "Parti del corpo",
      "Medico",
      "Farmacia",
      "Appuntamenti sanitari",
    ],
  },
  {
    title: "Unità 10",
    duration: "4 Ore",
    description: "Ripasso finale e verifica",
    topics: [
      "Simulazioni reali",
      "Verifica finale",
      "Autovalutazione",
    ],
  },
];

function AccordionUnit({ unit, isOpen, onToggle }: { unit: CourseUnit; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-[#C4622D]/20 rounded-lg overflow-hidden mb-3">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-[#F5EDD6] hover:bg-[#EEE5CC] transition-colors"
      >
        <div className="text-left">
          <h4 className="font-display text-lg font-bold text-[#3D4A2E]">{unit.title}</h4>
          <p className="text-sm text-[#3D4A2E]/70">{unit.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-[#C4622D]">{unit.duration}</span>
          <ChevronDown
            size={20}
            className={`text-[#C4622D] transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-t border-[#C4622D]/20">
          <ul className="space-y-2">
            {unit.topics.map((topic, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#3D4A2E]">
                <span className="text-[#C4622D] font-bold mt-0.5">•</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function CourseCard({
  title,
  hours,
  lessons,
  duration,
  frequency,
  level,
  units,
}: {
  title: string;
  hours: number;
  lessons: number;
  duration: string;
  frequency: string;
  level: string;
  units: CourseUnit[];
}) {
  const [expandedUnits, setExpandedUnits] = useState<number[]>([]);

  const toggleUnit = (idx: number) => {
    setExpandedUnits((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="bg-white rounded-lg border-2 border-[#C4622D]/30 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#C4622D] to-[#9E4E24] p-6 text-white">
        <h3 className="font-display text-3xl font-bold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{hours} ore totali</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen size={16} />
            <span>{lessons} lezioni</span>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-4 p-6 bg-[#F5EDD6]">
        <div>
          <p className="text-xs font-bold text-[#3D4A2E] uppercase tracking-widest mb-1">Durata lezione</p>
          <p className="text-lg font-bold text-[#C4622D]">{duration}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-[#3D4A2E] uppercase tracking-widest mb-1">Frequenza</p>
          <p className="text-lg font-bold text-[#C4622D]">{frequency}</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs font-bold text-[#3D4A2E] uppercase tracking-widest mb-1">Livello</p>
          <p className="text-lg font-bold text-[#C4622D]">{level}</p>
        </div>
      </div>

      {/* Units */}
      <div className="p-6">
        <h4 className="font-display text-xl font-bold text-[#3D4A2E] mb-4 flex items-center gap-2">
          <Target size={20} className="text-[#C4622D]" />
          Unità del corso
        </h4>
        <div className="space-y-2">
          {units.map((unit, idx) => (
            <AccordionUnit
              key={idx}
              unit={unit}
              isOpen={expandedUnits.includes(idx)}
              onToggle={() => toggleUnit(idx)}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 bg-[#F5EDD6] border-t border-[#C4622D]/20">
        <a
          href="#contatti"
          className="block w-full text-center px-6 py-3 bg-[#C4622D] text-white font-body font-bold rounded-sm hover:bg-[#9E4E24] transition-all duration-200 active:scale-[0.97]"
        >
          Prenota una lezione gratuita
        </a>
      </div>
    </div>
  );
}

export default function CorsiA0A1() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3D4A2E] to-[#2D3A1E] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">Corso Base: A0 → A1</h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl">
            Inizia da zero! Due opzioni flessibili per imparare l'italiano dalle fondamenta. Scegli quella che si adatta meglio ai tuoi tempi.
          </p>
        </div>
      </section>

      {/* Courses Comparison */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <CourseCard
              title="Corso 30 Ore"
              hours={30}
              lessons={30}
              duration="1 ora"
              frequency="1-2 incontri/settimana"
              level="Pre-A0 → A0 avanzato"
              units={course30Hours}
            />
            <CourseCard
              title="Corso 60 Ore"
              hours={60}
              lessons={30}
              duration="2 ore"
              frequency="1 incontro/settimana"
              level="Pre-A0 → A0 avanzato"
              units={course60Hours}
            />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-[#F5EDD6]">
        <div className="container">
          <h2 className="font-display text-4xl font-bold text-[#3D4A2E] mb-12 text-center">
            Quale corso scegliere?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="bg-[#C4622D] text-white">
                  <th className="p-4 text-left font-bold">Aspetto</th>
                  <th className="p-4 text-left font-bold">30 Ore</th>
                  <th className="p-4 text-left font-bold">60 Ore</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#C4622D]/20">
                  <td className="p-4 font-bold text-[#3D4A2E]">Ritmo di apprendimento</td>
                  <td className="p-4 text-[#3D4A2E]">Veloce e intenso</td>
                  <td className="p-4 text-[#3D4A2E]">Graduale e solido</td>
                </tr>
                <tr className="border-b border-[#C4622D]/20 bg-white/50">
                  <td className="p-4 font-bold text-[#3D4A2E]">Pratica e esercizi</td>
                  <td className="p-4 text-[#3D4A2E]">Essenziale</td>
                  <td className="p-4 text-[#3D4A2E]">Molto approfondita</td>
                </tr>
                <tr className="border-b border-[#C4622D]/20">
                  <td className="p-4 font-bold text-[#3D4A2E]">Tempo per assimilare</td>
                  <td className="p-4 text-[#3D4A2E]">Meno tempo tra lezioni</td>
                  <td className="p-4 text-[#3D4A2E]">Più tempo per consolidare</td>
                </tr>
                <tr className="border-b border-[#C4622D]/20 bg-white/50">
                  <td className="p-4 font-bold text-[#3D4A2E]">Ideale per</td>
                  <td className="p-4 text-[#3D4A2E]">Chi ha poco tempo</td>
                  <td className="p-4 text-[#3D4A2E]">Chi vuole solidità</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#3D4A2E]">Frequenza</td>
                  <td className="p-4 text-[#3D4A2E]">1-2 volte/settimana</td>
                  <td className="p-4 text-[#3D4A2E]">1 volta/settimana</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="font-display text-4xl font-bold text-[#3D4A2E] mb-12 text-center">
            Cosa imparerai
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5EDD6] p-8 rounded-lg border-l-4 border-[#C4622D]">
              <h3 className="font-display text-2xl font-bold text-[#3D4A2E] mb-6">Competenze Linguistiche</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold mt-1">✓</span>
                  <span className="text-[#3D4A2E]">Presentarsi e salutare</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold mt-1">✓</span>
                  <span className="text-[#3D4A2E]">Parlare della famiglia e della casa</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold mt-1">✓</span>
                  <span className="text-[#3D4A2E]">Descrivere azioni quotidiane</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold mt-1">✓</span>
                  <span className="text-[#3D4A2E]">Orientarsi nel quartiere</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#F5EDD6] p-8 rounded-lg border-l-4 border-[#C4622D]">
              <h3 className="font-display text-2xl font-bold text-[#3D4A2E] mb-6">Competenze Pratiche</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold mt-1">✓</span>
                  <span className="text-[#3D4A2E]">Fare la spesa al supermercato</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold mt-1">✓</span>
                  <span className="text-[#3D4A2E]">Interagire con scuola e farmacia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold mt-1">✓</span>
                  <span className="text-[#3D4A2E]">Comprendere le differenze arabo-italiano</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C4622D] font-bold mt-1">✓</span>
                  <span className="text-[#3D4A2E]">Comunicare in situazioni quotidiane</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-bold text-[#3D4A2E] mb-6">
            Pronto a iniziare il tuo percorso?
          </h2>
          <p className="text-lg text-[#3D4A2E]/70 mb-8 max-w-2xl mx-auto">
            Prenota una lezione gratuita di 30 minuti per discutere i tuoi obiettivi e scegliere il corso più adatto a te.
          </p>
          <a
            href="#contatti"
            className="inline-flex px-8 py-4 bg-[#C4622D] text-white font-body font-bold text-base tracking-wide rounded-sm hover:bg-[#9E4E24] transition-all duration-200 active:scale-[0.97] shadow-lg"
          >
            Prenota la tua lezione gratuita
          </a>
        </div>
      </section>
    </div>
  );
}
