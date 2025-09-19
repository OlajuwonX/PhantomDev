import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./components/theme-provider";
import ScrollToTop from "./components/ui/scrolltotop";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <ScrollToTop />
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <App />
          </ThemeProvider>
      </BrowserRouter>
  </StrictMode>,
)
