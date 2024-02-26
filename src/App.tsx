import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import AboutIndexPage from './pages/about/AboutIndexPage';

export default function App() {
  const publicRoutes = (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutIndexPage />} />
      </Routes>
    </AppLayout>
  );

  return publicRoutes;
}
