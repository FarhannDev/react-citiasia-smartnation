import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/common/button/ScrollToTop.tsx';
import App from './App.tsx';

// import assets
import '@/assets/themes/dark-mode.theme.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '@/assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ThemeProvider from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ThemeProvider>
        <ScrollToTop />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
