import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import AboutIndexPage from './pages/about/AboutIndexPage';
import PodcastsIndexPage from './pages/podcasts/PodcastsIndexPage';
import ContactIndexPage from './pages/contact/ContactIndexPage';
import PostsParentCategoryPage from './pages/posts/PostsParentCategoryPage';
import PostsCategoryPage from './pages/posts/PostsCategoryPage';
import PostsDetailsPage from './pages/posts/PostsDetailsPage';

export default function App() {
  const publicRoutes = (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<PostsDetailsPage />} />
        <Route path="/headline/:id" element={<PostsParentCategoryPage />} />
        <Route path="/posts/:categoryId" element={<PostsCategoryPage />} />

        <Route path="/podcasts" element={<PodcastsIndexPage />} />
        <Route path="/about" element={<AboutIndexPage />} />
        <Route path="/contact" element={<ContactIndexPage />} />
      </Routes>
    </AppLayout>
  );

  return publicRoutes;
}
