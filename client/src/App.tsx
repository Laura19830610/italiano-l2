import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Corsi from "./pages/Corsi";
import CorsiA0A1 from "./pages/CorsiA0A1";
import Missione from "./pages/Missione";
import ItalianoCheProtegge from "./pages/ItalianoCheProtegge";

import ItalianoPeAziende from "./pages/ItalianoPeAziende";
import AziendeInserimento from "./pages/AziendeInserimento";
import AziendeProduzioni from "./pages/AziendeProduzioni";
import AziendeSecurezza from "./pages/AziendeSecurezza";
import AziendeCanteri from "./pages/AziendeCanteri";
import AziendeIntercultura from "./pages/AziendeIntercultura";
import AziendePersonalizzato from "./pages/AziendePersonalizzato";
import AziendeDidattica from "./pages/AziendeDidattica";
import Metodo from "./pages/Metodo";
import Proposte from "./pages/Proposte";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/corsi" component={Corsi} />
      <Route path="/corsi-a0-a1" component={CorsiA0A1} />
      <Route path="/missione" component={Missione} />
      <Route path="/italiano-che-protegge" component={ItalianoCheProtegge} />
      <Route path="/aziende" component={ItalianoPeAziende} />
      <Route path="/aziende/inserimento" component={AziendeInserimento} />
      <Route path="/aziende/produttive" component={AziendeProduzioni} />
      <Route path="/aziende/sicurezza" component={AziendeSecurezza} />
      <Route path="/aziende/cantieri" component={AziendeCanteri} />
      <Route path="/aziende/intercultura" component={AziendeIntercultura} />
      <Route path="/aziende/misura" component={AziendePersonalizzato} />
      <Route path="/aziende/didattica" component={AziendeDidattica} />
      <Route path="/metodo" component={Metodo} />
      <Route path="/proposte" component={Proposte} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
