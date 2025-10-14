import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpeedInsights />
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <App />
    </ThemeProvider>
  </StrictMode>
);
