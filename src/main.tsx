import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.scss";
import "@fontsource/poppins";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import App from './App.tsx'
import './index.css'

library.add(fas, fab);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
