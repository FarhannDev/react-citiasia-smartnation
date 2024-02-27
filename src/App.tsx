import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import AboutIndexPage from './pages/about/AboutIndexPage';
import PodcastsIndexPage from './pages/podcasts/PodcastsIndexPage';

export default function App() {
  const publicRoutes = (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element={<PodcastsIndexPage />} />
        <Route path="/about" element={<AboutIndexPage />} />
      </Routes>
    </AppLayout>
  );

  return publicRoutes;
}
