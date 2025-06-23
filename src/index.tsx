import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components';
import './styles/globals.scss';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();