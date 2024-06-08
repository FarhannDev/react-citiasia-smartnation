import { Suspense, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { categories } from '../utils/data/categoryPostsData';
import { posts } from '../utils/data/postsData';
import styles from '@/assets/styles/modules/app.module.css';
import MyComponent from '../components/MyComponent';
import ArticleFigureColumnItemList from '../components/modules/articles/LatestArticle/ArticleFigureColumnItemList';

export default function Home() {
  const [postsLatest] = useState<Posts[]>(() => {
    return posts.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  });

  const [postsPopuler] = useState(() => {
    return posts
      .filter((post) => post.views >= 100)
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  });

  return (
    <>
      <Suspense>
        <MyComponent.HeroBackgroundSwipe posts={postsLatest.slice(0, 6)} />
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
                  <MyComponent.PostsArticleColumnItemList
                    posts={postsLatest.slice(1, 2)}
                  />
                </Col>

                <Col xl={4} lg={6} md={12}>
                  <MyComponent.PostsArticleRowItemList
                    posts={postsLatest.slice(1, 5)}
                  />
                </Col>

                <Col xl={4} lg={6} md={12}>
                  <MyComponent.PopularPostItemList
                    heading="Terpopuler"
                    posts={postsPopuler.slice(1, 6)}
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
                  <MyComponent.ArticleColumnItemList
                    posts={postsLatest.slice(0, 1)}
                  />
                </Col>
                <Col xl={7} lg={12} md={12}>
                  <ArticleFigureColumnItemList
                    posts={postsLatest.slice(2, 6)}
                  />
                </Col>
              </Row>
            </Container>
          </section>
          {/* Section Events Article Lists */}
          <section className={styles.sectionEventsArticle}>
            <Container className={styles.eventsArticleContainer}>
              <h1 className={styles.eventsArticleHeading}>Acara</h1>
              <MyComponent.EventFigureColumnItemList
                posts={postsLatest.slice(0, 3)}
              />
            </Container>
          </section>
          {/* Section Category Article Lists */}
          <section className={styles.sectionCategoryArticle}>
            <Container className={styles.categoryArticleContainer}>
              <h1 className={styles.eventsArticleHeading}>Artikel</h1>
              <MyComponent.ArticleCategoryFigureColumnItemList
                posts={postsLatest}
              />
              <MyComponent.ArticleCategoryRowItemList
                posts={postsLatest}
                categories={categories}
              />
            </Container>
          </section>
        </section>
        {/* Section Article End  */}
        {/* Section Newsletter Subscribe  */}
        <section className={styles.sectionNewsletterSubscribe}>
          <Container className={styles.sectionNewsletterSubscribeContainer}>
            <MyComponent.NewsLetterItem />
          </Container>
        </section>
      </Suspense>
    </>
  );
}
