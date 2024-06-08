import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { posts } from '../../utils/data/postsData';
import styles from '@/assets/styles/modules/app.module.css';
import MyComponent from '../../components/MyComponent';
import ContentLayout from '../../layouts/ContentLayout';

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
    <ContentLayout>
      <section className={styles.searchPostSection}>
        <Row className="justify-content-between align-items-start g-5">
          <Col lg={12} xl={8} md>
            <Heading />

            {postsData.length ? (
              <MyComponent.PostsRowItemList
                posts={postsData}
                ctaLabel="Berita"
              />
            ) : (
              <MyComponent.SearchEmpty title="Pencarian tidak ditemukan." />
            )}
          </Col>
          <Col lg={12} xl={4}>
            <MyComponent.PopularPostItemList
              posts={popularPostData}
              heading="Terpopuler"
            />
          </Col>
        </Row>
      </section>
    </ContentLayout>
  );
};

export default SearchTermIndexPage;
