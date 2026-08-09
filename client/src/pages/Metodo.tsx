/* ============================================================
   Metodo — Il mio approccio all'insegnamento
   TESTO COMPLETO dal file Word
   ============================================================ */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Metodo() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="container">
          <Link href="/">
            <a className="flex items-center gap-2 text-[#C4622D] font-bold mb-4 hover:text-[#9E4E24] transition-colors">
              <ArrowLeft size={18} />
              Torna alla Home
            </a>
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Metodo
          </h1>
          <p className="font-body text-lg text-foreground/75 mt-4">
            Il mio approccio all'insegnamento dell'italiano
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="space-y-6">
            <p className="font-display text-2xl md:text-3xl font-bold text-foreground italic">
              Credo che una lingua si impari quando smette di essere un esercizio e diventa uno strumento per comunicare.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Per questo, nelle mie lezioni, l'obiettivo non è riempire pagine di regole o completare esercizi meccanici. L'obiettivo è aiutarti a usare l'italiano con naturalezza, nelle situazioni che contano davvero per te.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Ogni persona arriva con una storia diversa: c'è chi si è trasferito in Italia, chi ha un partner italiano, chi studia per lavoro, chi vuole sentirsi più sicuro durante una semplice conversazione. Non esiste un percorso uguale per tutti, ed è proprio questa diversità a rendere ogni lezione unica.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Prima ancora di essere insegnante, sono stata una studentessa di lingue. So cosa significa cercare le parole giuste, avere paura di sbagliare o capire perfettamente una regola senza riuscire a usarla quando si parla. È da questa esperienza che nasce il mio modo di insegnare: pratico, flessibile e costruito sulle persone.
            </p>
          </div>
        </div>
      </section>

      {/* Una lezione che parte da te */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Una lezione che parte da te
          </h2>
          <div className="space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Nelle mie lezioni non seguiamo un copione.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Partiamo da ciò che è reale: una conversazione, un dubbio, un episodio della tua giornata, un obiettivo che vuoi raggiungere o una situazione che ti mette in difficoltà.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Da lì costruiamo tutto il resto.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Nuove parole, espressioni, grammatica e pronuncia emergono in modo naturale durante il dialogo. Ogni spiegazione ha uno scopo preciso: aiutarti a comunicare meglio, non semplicemente a conoscere una regola.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed font-bold">
              Impari ciò che ti serve, nel momento in cui ti serve.
            </p>
          </div>
        </div>
      </section>

      {/* La grammatica come strumento */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            La grammatica come strumento, non come punto di partenza
          </h2>
          <div className="space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              La grammatica è importante, ma da sola non basta.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Per questo preferisco introdurla nel momento in cui nasce una necessità comunicativa. In questo modo le regole acquistano significato, sono più facili da ricordare e diventano subito utilizzabili.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              L'apprendimento diventa più spontaneo e, soprattutto, più vicino alla realtà.
            </p>
          </div>
        </div>
      </section>

      {/* Materiali autentici */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Materiali autentici, situazioni autentiche
          </h2>
          <div className="space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Un articolo di giornale, una serie TV, un podcast, una ricetta, una mail da scrivere, una conversazione ascoltata al bar o un messaggio ricevuto sul telefono possono trasformarsi in materiale di lavoro.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              La lingua che impariamo è quella che incontrerai ogni giorno fuori dalla lezione.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Per questo preferisco utilizzare contenuti vivi, attuali e vicini ai tuoi interessi.
            </p>
          </div>
        </div>
      </section>

      {/* Il mio ruolo */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Il mio ruolo
          </h2>
          <div className="space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Non sono soltanto la persona che spiega l'italiano.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Il mio compito è accompagnarti mentre costruisci fiducia nelle tue capacità, aiutarti a trovare strategie efficaci e creare uno spazio in cui sentirti libero di fare domande, sperimentare e anche sbagliare.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed font-bold">
              Gli errori non sono ostacoli: sono parte del percorso.
            </p>
          </div>
        </div>
      </section>

      {/* Perché questo approccio funziona */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Perché questo approccio funziona
          </h2>
          <div className="space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Il metodo a cui mi ispiro è il <strong>DOGME</strong>, un approccio che mette al centro la comunicazione e la relazione tra insegnante e studente.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              L'idea è semplice: la lingua si acquisisce meglio quando nasce da una situazione autentica e non da un esercizio isolato.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Per questo ogni lezione viene costruita intorno a ciò che succede nel momento, ai tuoi bisogni e ai tuoi obiettivi.
            </p>
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              In questo modo l'italiano non rimane qualcosa da studiare, ma diventa una lingua da vivere.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Pronto a iniziare?
          </h2>
          <p className="font-body text-lg text-foreground/75 mb-8 max-w-2xl mx-auto">
            Scopri come il mio metodo può aiutarti a imparare l'italiano in modo naturale e efficace.
          </p>
          <Link href="/#contatti">
            <a className="inline-flex items-center px-6 py-3 rounded-sm bg-[#C4622D] text-white font-body font-bold tracking-wide hover:bg-[#9E4E24] transition-all duration-200">
              Prenota la tua prima lezione gratuita
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
