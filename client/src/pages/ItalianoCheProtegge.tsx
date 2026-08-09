/* ============================================================
   Pagina L'Italiano che protegge
   Design "Piazza Italiana" con sezioni tematiche
   ============================================================ */
import { useEffect, useRef } from "react";
import { Shield, AlertCircle, FileText, Volume2 } from "lucide-react";

export default function ItalianoCheProtegge() {
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
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">L'Italiano che protegge</h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl">
            La lingua non è solo grammatica. È uno strumento di protezione, sicurezza e dignità.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section ref={sectionRef} className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl">
          {/* Introduction */}
          <div className="reveal mb-16">
            <h2 className="font-display text-3xl font-bold text-[#3D4A2E] mb-8">Introduzione</h2>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Quando si parla di lingua italiana, molti pensano alla grammatica.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Io penso a qualcosa di diverso.
            </p>
          </div>

          {/* What I think about */}
          <div className="reveal mb-12 p-8 bg-[#F5EDD6] rounded-lg border-l-4 border-[#C4622D]">
            <p className="font-body text-[#3D4A2E] mb-4">Penso al lavoratore che deve comprendere una procedura di emergenza.</p>
            <p className="font-body text-[#3D4A2E] mb-4">Penso alla mamma che deve parlare con il pediatra.</p>
            <p className="font-body text-[#3D4A2E] mb-4">Penso alla persona che deve leggere un contratto di lavoro o una comunicazione importante.</p>
            <p className="font-body text-[#3D4A2E]">Penso a chi arriva in Italia e cerca semplicemente di capire e di essere capito.</p>
          </div>

          {/* Language protects */}
          <div className="reveal mb-16">
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Per questo credo che la lingua non sia soltanto uno strumento di comunicazione.
            </p>
            <p className="font-display text-3xl font-bold text-[#C4622D] mb-8">
              La lingua protegge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <Shield size={24} className="text-[#C4622D] flex-shrink-0 mt-1" />
                <p className="font-body text-[#3D4A2E]">Protegge la sicurezza sul lavoro.</p>
              </div>
              <div className="flex gap-3">
                <FileText size={24} className="text-[#C4622D] flex-shrink-0 mt-1" />
                <p className="font-body text-[#3D4A2E]">Protegge i diritti.</p>
              </div>
              <div className="flex gap-3">
                <AlertCircle size={24} className="text-[#C4622D] flex-shrink-0 mt-1" />
                <p className="font-body text-[#3D4A2E]">Protegge la salute.</p>
              </div>
              <div className="flex gap-3">
                <Volume2 size={24} className="text-[#C4622D] flex-shrink-0 mt-1" />
                <p className="font-body text-[#3D4A2E]">Protegge la dignità delle persone.</p>
              </div>
            </div>
          </div>

          {/* Section 1: Pericolo */}
          <div className="reveal mb-16 p-8 bg-[#EEF2E8] rounded-lg">
            <h3 className="font-display text-2xl font-bold text-[#5A6B44] mb-6">Pericolo</h3>
            <p className="font-body text-[#3D4A2E] mb-4 italic text-lg">
              "Pericolo".
            </p>
            <p className="font-body text-[#3D4A2E] mb-6">
              Una parola semplice. Otto lettere.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Ma se non viene compresa, le conseguenze possono essere enormi.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              In azienda spesso diamo per scontato che tutti comprendano cartelli, istruzioni e procedure.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Non è sempre così.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Per chi sta imparando l'italiano, alcune parole fondamentali possono essere sconosciute o avere un significato poco chiaro.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Ecco perché la formazione linguistica non è un dettaglio.
            </p>
            <p className="font-display text-xl font-bold text-[#5A6B44] mb-6">
              È uno strumento di prevenzione.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Quando insegno italiano ai lavoratori stranieri non insegno soltanto vocaboli.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Insegno parole che possono contribuire a lavorare in modo più sicuro.
            </p>
            <p className="font-display text-xl font-bold text-[#C4622D]">
              Perché la sicurezza inizia dalla comprensione.
            </p>
          </div>

          {/* Section 2: Diritti */}
          <div className="reveal mb-16 p-8 bg-[#FAE8DC] rounded-lg">
            <h3 className="font-display text-2xl font-bold text-[#C4622D] mb-6">I diritti e la comprensione</h3>
            <p className="font-body text-[#3D4A2E] mb-6 italic text-lg">
              "Ho firmato, ma non avevo capito."
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              È una frase che nessun lavoratore dovrebbe essere costretto a dire.
            </p>
            <div className="mb-6 p-4 bg-white rounded border-l-4 border-[#C4622D]">
              <p className="font-body text-[#3D4A2E] mb-2">Un contratto.</p>
              <p className="font-body text-[#3D4A2E] mb-2">Una comunicazione aziendale.</p>
              <p className="font-body text-[#3D4A2E] mb-2">Una procedura.</p>
              <p className="font-body text-[#3D4A2E]">Un regolamento.</p>
            </div>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              La conoscenza della lingua non serve soltanto a comunicare meglio.
            </p>
            <p className="font-display text-xl font-bold text-[#C4622D] mb-6">
              Serve a comprendere i propri diritti e i propri doveri.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              L'inclusione non è soltanto accoglienza.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              È mettere ogni persona nelle condizioni di capire ciò che la riguarda.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed">
              Per questo l'italiano è molto più di una materia scolastica.
            </p>
            <p className="font-display text-xl font-bold text-[#C4622D] mt-4">
              È uno strumento di cittadinanza.
            </p>
          </div>

          {/* Section 3: Silenzio */}
          <div className="reveal mb-16 p-8 bg-[#F5EDD6] rounded-lg">
            <h3 className="font-display text-2xl font-bold text-[#B8860B] mb-6">Silenzio</h3>
            <p className="font-body text-[#3D4A2E] mb-6 italic text-lg">
              "Non parlo bene italiano."
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              È probabilmente la frase che sento più spesso.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Ogni volta rispondo con una domanda:
            </p>
            <p className="font-display text-xl font-bold text-[#B8860B] mb-6 italic">
              "Riesci a farti capire?"
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Perché la perfezione non è l'obiettivo.
            </p>
            <p className="font-display text-xl font-bold text-[#C4622D] mb-6">
              La comunicazione sì.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Troppo spesso le persone straniere hanno paura di sbagliare e per questo smettono di parlare.
            </p>
            <div className="mb-6 p-4 bg-white rounded border-l-4 border-[#C4622D]">
              <p className="font-body text-[#3D4A2E] mb-2">Restano in silenzio durante una visita medica.</p>
              <p className="font-body text-[#3D4A2E] mb-2">Non fanno domande durante un corso sulla sicurezza.</p>
              <p className="font-body text-[#3D4A2E]">Non chiedono spiegazioni quando non capiscono.</p>
            </div>
            <p className="font-display text-xl font-bold text-[#C4622D] mb-6">
              Ma il silenzio può costare caro.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Sbagliare un verbo non è un problema.
            </p>
            <p className="font-display text-xl font-bold text-[#C4622D] mb-6">
              Rinunciare a parlare, invece, può diventarlo.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-4">
              La lingua si impara usando la lingua.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-4">
              Parola dopo parola.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-4">
              Errore dopo errore.
            </p>
            <p className="font-body text-lg text-[#3D4A2E] leading-relaxed mb-6">
              Conversazione dopo conversazione.
            </p>
            <p className="font-display text-xl font-bold text-[#C4622D]">
              Perché ogni frase pronunciata è già un passo avanti.
            </p>
          </div>

          {/* CTA */}
          <div className="reveal text-center mt-16">
            <a
              href="#contatti"
              className="inline-flex px-8 py-4 bg-[#C4622D] text-white font-body font-bold text-base tracking-wide rounded-sm hover:bg-[#9E4E24] transition-all duration-200 active:scale-[0.97] shadow-lg"
            >
              Scopri i miei corsi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
