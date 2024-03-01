import { Col, Container, Row } from 'react-bootstrap';
import HeroBackgroundSwiper from '../components/common/heroBackground/HeroBackgroundSwiper';
import PopularPostItemList from '../components/modules/articles/RelatePosts/PopularPostItemList';
import PostsArticleColumnItemList from '../components/modules/articles/LatestPosts/PostsArticleColumnItemList';
import PostsArticleRowItem from '../components/modules/articles/LatestPosts/PostsArticleRowItem';
import ArticleColumnItemList from '../components/modules/articles/LatestArticle/ArticleColumItemList';
import ArticleFigureColumnItem from '../components/modules/articles/LatestArticle/ArticleFigureColumnItem';
import EventFigureColumnItem from '../components/modules/articles/LatestEvents/EventFigureColumnItem';
import ArticleCategoryFigureColumnItem from '../components/modules/articles/categoryArticle/ArticleCategoryFigureColumnItem';
import ArticleCategoryRowItemList from '../components/modules/articles/categoryArticle/ArticleCategoryRowItemList';

import styles from '@/assets/styles/modules/app.module.css';
import NewsLetterItem from '../components/modules/Newsletter/NewsLetterItem';

export default function Home() {
  const samplePosts = [
    {
      id: 1,
      title: 'Smart City: Standar Nasional Indonesia (SNI) untuk Kota Cerdas',
      content: ` Pembangunan dan pengembangan smart city sedang menjadi
    hal yang banyak dilakukan oleh daerah-daerah di
    Indonesia. Apalagi, pemerintah Indonesia memiliki
    program Gerakan Menuju 100 smart city yang merupakan
    program bersama Kementerian Komunikasi dan Informatika,
    Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan
    Kantor Staf Kepresidenan.`,
      images:
        'https://s3-alpha-sig.figma.com/img/9022/96b6/23e15b37bd84a6cb1710400d98ccbdeb?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wrm7nmDP9AkrXqWZICYxgMbrAkWXyB5zjyCI3oU5XiIL9Ny80xVxeAyOXiDSCb6sm9n2xYnlIwLa8f5RntIAOxDNgSkojtxoS2KrnFtRK~lpm~ON~6gNrKcObUAfxW9oNw36CH-EYXwy3oP291uqlyRHLGWBP0B1EWjCPShda1F3lFy~59U79YzeYQ42jsRk6Cj53WuaHnH4KKEv2t0usG8j6mPidRGY8o5rRwP5QJ8VrbHmCh9qpFBMcIJLtDSQpR7iyKI4DQaYGGYIyMDGPsvkfCZMruqvwySPTgO0v2u8L-n1uwHlGAuroFnlokT4T7Nv27sYgB01dV5nyS2b~Q__',
      date: '16 Desember 2022',
    },
  ];

  return (
    <>
      <HeroBackgroundSwiper />
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
                <PostsArticleColumnItemList posts={samplePosts} />
              </Col>

              <Col xl={4} lg={6} md={12}>
                <PostsArticleRowItem />
                <PostsArticleRowItem />
                <PostsArticleRowItem />
                <PostsArticleRowItem />
              </Col>

              <Col xl={4} lg={6} md={12}>
                <PopularPostItemList />
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
                <ArticleColumnItemList posts={samplePosts} />
              </Col>
              <Col xl={7} lg={12} md={12}>
                <Row className="justify-content-start g-4">
                  <Col xl={6} lg={6} md={6}>
                    <ArticleFigureColumnItem />
                  </Col>
                  <Col xl={6} lg={6} md={6}>
                    <ArticleFigureColumnItem />
                  </Col>
                  <Col xl={6} lg={6} md={6}>
                    <ArticleFigureColumnItem />
                  </Col>
                  <Col xl={6} lg={6} md={6}>
                    <ArticleFigureColumnItem />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section Events Article Lists */}
        <section className={styles.sectionEventsArticle}>
          <Container className={styles.eventsArticleContainer}>
            <h1 className={styles.eventsArticleHeading}>Acara</h1>

            <Row className="justify-content-start g-4 pt-4">
              <Col xl={4} lg={4} md={12}>
                <EventFigureColumnItem />
              </Col>
              <Col xl={4} lg={4} md={12}>
                <EventFigureColumnItem />
              </Col>
              <Col xl={4} lg={4} md={12}>
                <EventFigureColumnItem />
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section Category Article Lists */}
        <section className={styles.sectionCategoryArticle}>
          <Container className={styles.categoryArticleContainer}>
            <h1 className={styles.eventsArticleHeading}>Artikel</h1>

            <Row className="justify-content-start g-5 py-5">
              <Col xl={8} lg={12} md={12}>
                <ArticleCategoryFigureColumnItem />
                <ArticleCategoryFigureColumnItem />
                <ArticleCategoryFigureColumnItem />
                <ArticleCategoryFigureColumnItem />
                <ArticleCategoryFigureColumnItem />
              </Col>
              <Col xl={4} lg={12} md={12}>
                <PopularPostItemList />
              </Col>
            </Row>

            <ArticleCategoryRowItemList />
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
