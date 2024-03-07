import { Col, Container, Row } from 'react-bootstrap';
import loadable from '@loadable/component';
import styles from '@/assets/styles/modules/app.module.css';
import { categories } from '../utils/data/categoryPostsData';
import { posts } from '../utils/data/postsData';

const HeroBackgroundSwiper = loadable(
  () => import('../components/common/heroBackground/HeroBackgroundSwiper')
);
const PopularPostItemList = loadable(
  () => import('../components/modules/articles/RelatePosts/PopularPostItemList')
);
const PostsArticleColumnItemList = loadable(
  () =>
    import(
      '../components/modules/articles/LatestPosts/PostsArticleColumnItemList'
    )
);
const ArticleColumnItemList = loadable(
  () =>
    import('../components/modules/articles/LatestArticle/ArticleColumItemList')
);
const ArticleCategoryRowItemList = loadable(
  () =>
    import(
      '../components/modules/articles/categoryArticle/ArticleCategoryRowItemList'
    )
);
const NewsLetterItem = loadable(
  () => import('../components/modules/Newsletter/NewsLetterItem')
);
const PostsArticleRowItemList = loadable(
  () =>
    import('../components/modules/articles/LatestPosts/PostsArticleRowItemList')
);
const ArticleFigureColumnItemList = loadable(
  () =>
    import(
      '../components/modules/articles/LatestArticle/ArticleFigureColumnItemList'
    )
);
const EventFigureColumnItemList = loadable(
  () =>
    import(
      '../components/modules/articles/LatestEvents/EventFigureColumnItemList'
    )
);
const ArticleCategoryFigureColumnItemList = loadable(
  () =>
    import(
      '../components/modules/articles/categoryArticle/ArticleCategoryFigureColumnItemList'
    )
);

export default function Home() {
  const postsData = posts.sort(
    (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
  );
  return (
    <>
      <HeroBackgroundSwiper posts={postsData.slice(0, 6)} />
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
                <PostsArticleColumnItemList posts={postsData.slice(1, 2)} />
              </Col>

              <Col xl={4} lg={6} md={12}>
                <PostsArticleRowItemList posts={postsData.slice(1, 5)} />
              </Col>

              <Col xl={4} lg={6} md={12}>
                <PopularPostItemList
                  heading="Terpopuler"
                  posts={postsData.slice(1, 6)}
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
                <ArticleColumnItemList posts={postsData.slice(0, 1)} />
              </Col>
              <Col xl={7} lg={12} md={12}>
                <ArticleFigureColumnItemList posts={postsData.slice(2, 6)} />
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section Events Article Lists */}
        <section className={styles.sectionEventsArticle}>
          <Container className={styles.eventsArticleContainer}>
            <h1 className={styles.eventsArticleHeading}>Acara</h1>
            <EventFigureColumnItemList posts={postsData.slice(0, 3)} />
          </Container>
        </section>
        {/* Section Category Article Lists */}
        <section className={styles.sectionCategoryArticle}>
          <Container className={styles.categoryArticleContainer}>
            <h1 className={styles.eventsArticleHeading}>Artikel</h1>
            <ArticleCategoryFigureColumnItemList posts={postsData} />
            <ArticleCategoryRowItemList
              posts={postsData}
              categories={categories}
            />
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
