import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Router, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import LegalPage from "./pages/LegalPage";
import PrivacyPage from "./pages/PrivacyPage";

// GitHub Pages のbaseパス対応
// Viteのimport.meta.env.BASE_URLは本番では'/hairhythm-lp/'、開発では'/'
const BASE_PATH = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';

function Routes() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/legal"} component={LegalPage} />
      <Route path={"/privacy"} component={PrivacyPage} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  if (typeof document !== "undefined") {
    document.title = "育毛専門美容室ヘアリズム｜40代からの薄毛・抜け毛専門サロン｜兵庫県加東市";
  }

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router base={BASE_PATH}>
            <Routes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
