import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import AboutIndexPage from './pages/about/AboutIndexPage';
import PodcastsIndexPage from './pages/podcasts/PodcastsIndexPage';
import ContactIndexPage from './pages/contact/ContactIndexPage';
import PostsParentCategoryPage from './pages/posts/PostsParentCategoryPage';
import PostsCategoryPage from './pages/posts/PostsCategoryPage';
import PostsDetailsPage from './pages/posts/PostsDetailsPage';
import DashboardIndexPage from './pages/dashboard/DashboardIndexPage';

export default function App() {
  const publicRoutes = (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PostsDetailsPage />} />

        <Route path="/posts">
          <Route index element={<PostsParentCategoryPage />} />
          <Route path=":categoryId" element={<PostsCategoryPage />} />
        </Route>

        <Route path="/podcasts" element={<PodcastsIndexPage />} />
        <Route path="/about" element={<AboutIndexPage />} />
        <Route path="/contact" element={<ContactIndexPage />} />

        <Route path="/dashboard" element={<DashboardIndexPage />} />
      </Routes>
    </AppLayout>
  );

  return publicRoutes;
}
