import { Col, Container, Row } from 'react-bootstrap';
import HeroBackgroundSwiper from '../components/common/heroBackground/HeroBackgroundSwiper';
import PopularPostItemList from '../components/modules/articles/RelatePosts/PopularPostItemList';
import PostsArticleColumnItemList from '../components/modules/articles/LatestPosts/PostsArticleColumnItemList';
import ArticleColumnItemList from '../components/modules/articles/LatestArticle/ArticleColumItemList';
import ArticleCategoryRowItemList from '../components/modules/articles/categoryArticle/ArticleCategoryRowItemList';

import styles from '@/assets/styles/modules/app.module.css';
import NewsLetterItem from '../components/modules/Newsletter/NewsLetterItem';
import PostsArticleRowItemList from '../components/modules/articles/LatestPosts/PostsArticleRowItemList';
import ArticleFigureColumnItemList from '../components/modules/articles/LatestArticle/ArticleFigureColumnItemList';
import { categories } from '../utils/data/categoryPostsData';
import { posts } from '../utils/data/postsData';
import EventFigureColumnItemList from '../components/modules/articles/LatestEvents/EventFigureColumnItemList';
import ArticleCategoryFigureColumnItemList from '../components/modules/articles/categoryArticle/ArticleCategoryFigureColumnItemList';

export default function Home() {
  return (
    <>
      <HeroBackgroundSwiper posts={posts.slice(0, 6)} />
      {/* Section Article Start  */}
      <section className={styles.appArticleSection}>
        {/* Section Latest Posts Article Lists  */}
        <section className={styles.sectionPostsArticlelists}>
          <Container className={styles.postsArticleListsContainer}>
            <h1 className={styles.postsArticleListsHeading}>
              Postingan Terbaru
            </h1>

            <Row className="justify-content-start g-4 pt-4">
              <Col xl={4} lg={12} md={12}>
                <PostsArticleColumnItemList posts={posts.slice(0, 1)} />
              </Col>

              <Col xl={4} lg={6} md={12}>
                <PostsArticleRowItemList posts={posts.slice(1, 5)} />
              </Col>

              <Col xl={4} lg={6} md={12}>
                <PopularPostItemList
                  heading="Terpopuler"
                  posts={posts.slice(0, 5)}
                />
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section Latest Article Lists */}
        <section className={styles.sectionArticleLists}>
          <Container className={styles.sectionArticleListsContainer}>
            <h1 className={styles.sectionArticleListsHeading}>
              Berita Terkini
            </h1>
            <Row className="justify-content-start g-4 pt-4">
              <Col xl={5} lg={12} md={12}>
                <ArticleColumnItemList posts={posts.slice(0, 1)} />
              </Col>
              <Col xl={7} lg={12} md={12}>
                <ArticleFigureColumnItemList posts={posts.slice(0, 4)} />
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section Events Article Lists */}
        <section className={styles.sectionEventsArticle}>
          <Container className={styles.eventsArticleContainer}>
            <h1 className={styles.eventsArticleHeading}>Acara</h1>
            <EventFigureColumnItemList posts={posts.slice(0, 3)} />
          </Container>
        </section>
        {/* Section Category Article Lists */}
        <section className={styles.sectionCategoryArticle}>
          <Container className={styles.categoryArticleContainer}>
            <h1 className={styles.eventsArticleHeading}>Artikel</h1>
            <ArticleCategoryFigureColumnItemList posts={posts} />
            <ArticleCategoryRowItemList posts={posts} categories={categories} />
          </Container>
        </section>
      </section>
      {/* Section Article End  */}
      {/* Section Newsletter Subscribe  */}
      <section className={styles.sectionNewsletterSubscribe}>
        <Container className={styles.sectionNewsletterSubscribeContainer}>
          <NewsLetterItem />
        </Container>
      </section>
    </>
  );
}
