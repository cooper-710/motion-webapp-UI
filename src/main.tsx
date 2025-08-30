import "./styles/tokens.css";
import "./styles/base.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import "./light-charts.css";

import "./styles/light-overrides.css";

import "./styles/final-light.css";

import "./styles/final-light-text.css";

import "./styles/text-black.css";

import "./styles/fix-light-blocks.css";
