import React from 'react';
import styles from '@/assets/styles/modules/posts.module.css';
import loadable from '@loadable/component';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { posts } from '../../utils/data/postsData';
import { categories } from '../../utils/data/categoryPostsData';
import { Helmet } from 'react-helmet';
import SearchEmpty from '../../components/common/empty/SearchEmpty';

const PopularPostItemList = loadable(
  () =>
    import('../../components/modules/articles/RelatePosts/PopularPostItemList')
);
const PostsRowItemList = loadable(
  () => import('../../components/modules/posts/PostsRowItemList')
);

const PostsCategoryPage: React.FC = () => {
  const { categoryId } = useParams();

  const categoriesData: Categories | undefined = categories.find(
    (category) => category.slug === categoryId?.toString()
  );

  const postsData: Posts[] = posts
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .filter((post) =>
      post.categories.find((cat) => cat.slug === categoriesData?.slug)
    );

  const popularPostData: Posts[] = posts
    ?.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 10);

  const heading: string = `Kategori Berita ${categoriesData?.name}`;

  return (
    <>
      <Helmet encodeSpecialCharacters={true} title="Berita" async>
        <meta
          property="og:description"
          content="Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation"
        />
        <meta property="og:type" content="article" />
      </Helmet>

      <section className={styles.sectionPostSmartnation}>
        <Container className={styles.postSmartnationContainer}>
          <Row className="justify-content-between align-items-start g-5">
            <Col lg={12} xl={8} md>
              <h1 className={styles.postsSmartnationCategoryHeading}>
                {heading}
              </h1>

              {postsData.length ? (
                <PostsRowItemList
                  posts={postsData}
                  ctaLabel={categoriesData?.name}
                />
              ) : (
                <SearchEmpty title="Belum ada postingan." />
              )}
            </Col>
            <Col lg={12} xl={4}>
              <PopularPostItemList
                posts={popularPostData}
                heading="Terpopuler"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PostsCategoryPage;
