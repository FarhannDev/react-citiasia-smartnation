import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import PostsDetailsPage from './pages/posts/PostsDetailsPage';
import PostsCategoryPage from './pages/posts/PostsCategoryPage';
import PodcastsIndexPage from './pages/podcasts/PodcastsIndexPage';
import AboutIndexPage from './pages/about/AboutIndexPage';
import ContactIndexPage from './pages/contact/ContactIndexPage';

export default function App() {
  const publicRoutes = (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PostsDetailsPage />} />
        <Route path="/posts">
          <Route path=":categoryId" element={<PostsCategoryPage />} />
        </Route>
        <Route path="/podcasts" element={<PodcastsIndexPage />} />
        <Route path="/about" element={<AboutIndexPage />} />
        <Route path="/contact" element={<ContactIndexPage />} />
      </Routes>
    </AppLayout>
  );

  return publicRoutes;
}
