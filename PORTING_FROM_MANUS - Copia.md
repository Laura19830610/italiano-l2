# Stato del porting da Manus

Il sito non usa più il runtime Manus e viene pubblicato come normale progetto React/Vite.

## Cosa è già indipendente

- build Vite statica;
- configurazione Vercel;
- quattro volantini A4 locali in `client/public/volantini/`;
- traduzioni del sistema di navigazione e delle sezioni principali in italiano, inglese, francese e arabo standard;
- gestione automatica RTL per l'arabo;
- nessun riferimento operativo a `manus-storage`.

## Media personali

Le due fotografie personali usate nella versione originale non erano incluse nell'esportazione ricevuta da Manus. La hero ora usa un fondo grafico locale e la sezione Metodo non dipende più da quelle fotografie.

L'immagine della lezione e alcuni elementi grafici possono ancora essere caricati da una CDN esterna; non sono necessari per il funzionamento del sito.
