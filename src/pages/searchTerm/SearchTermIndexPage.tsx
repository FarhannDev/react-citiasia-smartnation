import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { posts } from '../../utils/data/postsData';
import styles from '@/assets/styles/modules/app.module.css';
import PostsRowItemList from '../../components/modules/posts/PostsRowItemList';
import PopularPostItemList from '../../components/modules/articles/RelatePosts/PopularPostItemList';
import MyComponent from '../../components/MyComponent';

const SearchTermIndexPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword: string | undefined | null = searchParams.get('keyword');
  const postsData: Posts[] = posts?.filter((post) => {
    return post.title
      .toLowerCase()
      .includes(keyword ? keyword.toLowerCase() : 'null');
  });

  const popularPostData: Posts[] = posts
    ?.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 10);

  const resultText: string = postsData.length
    ? `Ditemukan dalam ${postsData.length} berita`
    : `Tidak ditemukan dalam berita`;

  const Heading = () => (
    <h1 className={styles.searchPostHeading}>
      Hasil pencarian {keyword}, {resultText}
    </h1>
  );

  return (
    <section className={styles.searchPostSection}>
      <Container className={styles.searchPostContainer}>
        <Row className="justify-content-between align-items-start g-5">
          <Col lg={12} xl={8} md>
            <Heading />

            {postsData.length ? (
              <PostsRowItemList posts={postsData} ctaLabel="Berita" />
            ) : (
              <MyComponent.SearchEmpty title="Pencarian tidak ditemukan." />
            )}
          </Col>
          <Col lg={12} xl={4}>
            <PopularPostItemList posts={popularPostData} heading="Terpopuler" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SearchTermIndexPage;
