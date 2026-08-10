/* ============================================================
   Pagina Corsi — Design "Piazza Italiana"
   Comparazione 30 ore vs 60 ore con accordion per dettagli
   ============================================================ */
import { ChevronDown, Clock, BookOpen, Target } from "lucide-react";
import { useState } from "react";

interface CourseModule {
  title: string;
  duration: string;
  description: string;
  units: string[];
}

const course30Hours: CourseModule[] = [
  {
    title: "Modulo Introduttivo & Fondamenta",
    duration: "7 Ore",
    description: "Ponte linguistico A1 ↔ A2, fonetica e ripasso",
    units: [
      "Unità 0: Ponte linguistico e ripasso (2h)",
      "Unità 1: Raccontare il passato - Passato Prossimo (2h)",
      "Unità 2: Organizzare il tempo libero e lo spazio (3h)",
    ],
  },
  {
    title: "Modulo Vita Quotidiana & Azioni",
    duration: "9 Ore",
    description: "Lavoro, burocrazia, casa e servizi",
    units: [
      "Unità 3: Il mondo del lavoro e il CV (3h)",
      "Unità 4: Burocrazia, documenti e permessi (3h)",
      "Unità 5: La casa in affitto e le utenze (3h)",
    ],
  },
  {
    title: "Modulo Autonomia & Consumi",
    duration: "4 Ore",
    description: "Viaggi, ricordi e biografie",
    units: [
      "Unità 6: Viaggiare e muoversi in Italia (2h)",
      "Unità 7: Ricordi e biografie - L'Imperfetto (2h)",
    ],
  },
  {
    title: "Modulo Servizi, Salute & Cittadinanza",
    duration: "4 Ore",
    description: "Scuola, salute e servizi territoriali",
    units: [
      "Unità 8: Relazioni con la scuola e i figli (2h)",
      "Unità 9: Salute, corpo umano e farmacia (2h)",
    ],
  },
  {
    title: "Modulo Consolidamento, Pratica & Verifica",
    duration: "6 Ore",
    description: "Ripasso, laboratorio e verifica finale",
    units: [
      "Unità 10: Maxi-ripasso grammaticale A2 (2h)",
      "Unità 11: Laboratorio pratico e scrittura formale (2h)",
      "Unità 12: Simulazioni reali e verifica finale A2 (2h)",
    ],
  },
];

const course60Hours: CourseModule[] = [
  {
    title: "Modulo 1: Transizione & Strutture Complesse",
    duration: "14 Ore",
    description: "Consolidamento ponte linguistico A1 ↔ A2",
    units: [
      "Unità 0: Consolidamento e ponte linguistico (4h)",
      "Unità 1: Raccontare il passato - Passato Prossimo (6h)",
      "Unità 2: Organizzare il tempo libero e lo spazio (4h)",
    ],
  },
  {
    title: "Modulo 2: Società, Lavoro & Immigrazione",
    duration: "16 Ore",
    description: "Lavoro, burocrazia, casa e territorio",
    units: [
      "Unità 3: Il mondo del lavoro e il CV (6h)",
      "Unità 4: Burocrazia, documenti e permessi (6h)",
      "Unità 5: La casa in affitto e le utenze (4h)",
    ],
  },
  {
    title: "Modulo 3: Spostamenti, Viaggi & Territorio",
    duration: "10 Ore",
    description: "Mobilità e ricordi personali",
    units: [
      "Unità 6: Viaggiare e muoversi in Italia (4h)",
      "Unità 7: Ricordi e biografie - L'Imperfetto (6h)",
    ],
  },
  {
    title: "Modulo 4: Benessere, Scuola & Servizi Avanzati",
    duration: "10 Ore",
    description: "Scuola, salute e servizi specializzati",
    units: [
      "Unità 8: Relazioni con la scuola e i figli (4h)",
      "Unità 9: Corpo umano, salute e urgenze (6h)",
    ],
  },
  {
    title: "Modulo 5: Sintesi, Task Reali & Valutazione",
    duration: "10 Ore",
    description: "Consolidamento, laboratorio e verifica finale",
    units: [
      "Unità 10: Consolidamento grammaticale A2 (4h)",
      "Unità 11: Laboratorio di scrittura e fonetica avanzata (4h)",
      "Unità 12: Compiti di realtà e verifica finale A2 (2h)",
    ],
  },
];

function AccordionModule({ module, isOpen, onToggle }: { module: CourseModule; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-[#C4622D]/20 rounded-lg overflow-hidden mb-3">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-[#F5EDD6] hover:bg-[#EEE5CC] transition-colors"
      >
        <div className="text-left">
          <h4 className="font-display text-lg font-bold text-[#3D4A2E]">{module.title}</h4>
          <p className="text-sm text-[#3D4A2E]/70">{module.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-[#C4622D]">{module.duration}</span>
          <ChevronDown
            size={20}
            className={`text-[#C4622D] transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-t border-[#C4622D]/20">
          <ul className="space-y-2">
            {module.units.map((unit, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#3D4A2E]">
                <span className="text-[#C4622D] font-bold mt-0.5">•</span>
                <span>{unit}</span>
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
  modules,
}: {
  title: string;
  hours: number;
  lessons: number;
  duration: string;
  frequency: string;
  level: string;
  modules: CourseModule[];
}) {
  const [expandedModules, setExpandedModules] = useState<number[]>([]);

  const toggleModule = (idx: number) => {
    setExpandedModules((prev) =>
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

      {/* Modules */}
      <div className="p-6">
        <h4 className="font-display text-xl font-bold text-[#3D4A2E] mb-4 flex items-center gap-2">
          <Target size={20} className="text-[#C4622D]" />
          Moduli del corso
        </h4>
        <div className="space-y-2">
          {modules.map((module, idx) => (
            <AccordionModule
              key={idx}
              module={module}
              isOpen={expandedModules.includes(idx)}
              onToggle={() => toggleModule(idx)}
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

export default function Corsi() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#3D4A2E] to-[#2D3A1E] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">I Nostri Corsi</h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl">
            Due opzioni flessibili per raggiungere il tuo livello A2. Scegli quella che si adatta meglio ai tuoi tempi e ai tuoi obiettivi.
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
              level="A1 → A2"
              modules={course30Hours}
            />
            <CourseCard
              title="Corso 60 Ore"
              hours={60}
              lessons={30}
              duration="2 ore"
              frequency="1-2 incontri/settimana"
              level="A1 → A2"
              modules={course60Hours}
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
                  <td className="p-4 text-[#3D4A2E]">Intenso e concentrato</td>
                  <td className="p-4 text-[#3D4A2E]">Graduale e approfondito</td>
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
                  <td className="p-4 font-bold text-[#3D4A2E]">Certificazione</td>
                  <td className="p-4 text-[#3D4A2E]">A2 base</td>
                  <td className="p-4 text-[#3D4A2E]">A2 solido e certificabile</td>
                </tr>
              </tbody>
            </table>
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
