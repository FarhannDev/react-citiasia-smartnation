import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppLayout from './layouts/AppLayout';
import Home from './pages/Home';
import PostsDetailsPage from './pages/posts/PostsDetailsPage';
import PostsCategoryPage from './pages/posts/PostsCategoryPage';
import PodcastsIndexPage from './pages/podcasts/PodcastsIndexPage';
import AboutIndexPage from './pages/about/AboutIndexPage';
import ContactIndexPage from './pages/contact/ContactIndexPage';
import ProgramIndexPage from './pages/programs/ProgramIndexPage';
import ProgramDetailPage from './pages/programs/ProgramDetailPage';
import SearchTermIndexPage from './pages/searchTerm/SearchTermIndexPage';
import PodcastDetailPage from './pages/podcasts/PodcastDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

export default function App() {
  const publicRoutes = (
    <AppLayout>
      <Helmet encodeSpecialCharacters={true} title="Beranda" async>
        <meta
          property="og:description"
          content="Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation"
        />
        <meta property="og:type" content="article" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PostsDetailsPage />} />
        <Route path="/program/:categoryId" element={<ProgramIndexPage />} />
        <Route path="/program/r/:programId/" element={<ProgramDetailPage />} />

        <Route path="/search" element={<SearchTermIndexPage />} />
        <Route path="/posts">
          <Route path=":categoryId" element={<PostsCategoryPage />} />
        </Route>
        <Route path="/podcast" element={<PodcastsIndexPage />} />
        <Route path="/podcast/:id" element={<PodcastDetailPage />} />

        <Route path="/about" element={<AboutIndexPage />} />
        <Route path="/contact" element={<ContactIndexPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppLayout>
  );

  return publicRoutes;
}
