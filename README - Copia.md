# Italiano L2 — sito indipendente da Manus

Questo è un progetto React + Vite pronto per essere pubblicato come sito statico.

## Pubblicazione gratuita

1. Crea un repository GitHub e carica tutto il progetto.
2. Importa il repository in Vercel.
3. Vercel userà `npm run build` e pubblicherà `dist/public`.
4. In Vercel > Settings > Domains aggiungi il tuo dominio.
5. Nel pannello del tuo registrar inserisci i record DNS indicati da Vercel.

## Sviluppo locale

```bash
npm install
npm run dev
```

## Modifiche da completare

Le foto personali originariamente ospitate nello storage Manus non sono incluse nel pacchetto esportato. Se vuoi recuperarle, copiale in `client/public/images/` e sostituisci i relativi riferimenti indicati in `PORTING_FROM_MANUS.md`.

I quattro volantini A4 sono già inclusi in `client/public/volantini/`.
