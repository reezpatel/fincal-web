import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouteContainer } from "./pages/routes.tsx";
import { ThemeProvider } from "./components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="fincal-theme">
      <RouteContainer />
    </ThemeProvider>
  </StrictMode>
);
