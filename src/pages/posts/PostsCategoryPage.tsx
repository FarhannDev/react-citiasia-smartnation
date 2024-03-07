import React from 'react';
import styles from '@/assets/styles/modules/posts.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import PopularPostItemList from '../../components/modules/articles/RelatePosts/PopularPostItemList';
import { useParams } from 'react-router-dom';
import PostsRowItemList from '../../components/modules/posts/PostsRowItemList';
import { posts } from '../../utils/data/postsData';
import { categories } from '../../utils/data/categoryPostsData';

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
      <section className={styles.sectionPostSmartnation}>
        <Container className={styles.postSmartnationContainer}>
          <Row className="justify-content-between align-items-start g-5">
            <Col lg={12} xl={8} md>
              <h1 className={styles.postsSmartnationCategoryHeading}>
                {heading}
              </h1>
              <PostsRowItemList
                posts={postsData}
                ctaLabel={categoriesData?.name}
              />
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
