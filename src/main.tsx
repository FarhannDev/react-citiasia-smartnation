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
import { Provider } from 'react-redux';
import store from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
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
  </Provider>
);
