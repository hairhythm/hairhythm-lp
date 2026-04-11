import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Router as WouterRouter, Route, Switch } from "wouter";
import { useBrowserLocation } from "wouter/use-browser-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import LegalPage from "./pages/LegalPage";
import PrivacyPage from "./pages/PrivacyPage";

// GitHub Pages のbaseパス対応
const BASE_PATH = import.meta.env.BASE_URL?.replace(/\/$/, '') || '';

function useBasedLocation() {
  const [location, setLocation] = useBrowserLocation();
  const basedLocation = location.startsWith(BASE_PATH)
    ? location.slice(BASE_PATH.length) || '/'
    : location;
  const navigate = (to: string) => setLocation(BASE_PATH + to);
  return [basedLocation, navigate] as const;
}

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
  // SEO: document.titleをReact側でも設定（SEOパネル対応）
  if (typeof document !== "undefined") {
    document.title = "育毛専門美容室ヘアリズム｜40代からの薄毛・抜け毛専門サロン｜兵庫県加東市";
  }

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <WouterRouter hook={useBasedLocation}>
            <Routes />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
