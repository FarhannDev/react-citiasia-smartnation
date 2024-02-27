import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from './App.tsx';

// import assets
import 'react-lazy-load-image-component/src/effects/blur.css';
import '@/assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
