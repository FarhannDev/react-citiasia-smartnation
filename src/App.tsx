import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import AboutIndexPage from './pages/about/AboutIndexPage';
import PodcastsIndexPage from './pages/podcasts/PodcastsIndexPage';
import ContactIndexPage from './pages/contact/ContactIndexPage';
import PostsParentCategoryPage from './pages/posts/PostsParentCategoryPage';

export default function App() {
  const publicRoutes = (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/:parentCategory" element={<PostsParentCategoryPage />} />
        <Route path=":/beritaId" element={<div>Berita ID</div>} />

        <Route path="/podcasts" element={<PodcastsIndexPage />} />
        <Route path="/about" element={<AboutIndexPage />} />
        <Route path="/contact" element={<ContactIndexPage />} />
      </Routes>
    </AppLayout>
  );

  return publicRoutes;
}
