import React from 'react';
import styles from '@/assets/styles/modules/posts.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import PopularPostItemList from '../../components/modules/articles/RelatePosts/PopularPostItemList';
import PostsRowItem from '../../components/modules/posts/PostsRowItem';

const PostsCategoryPage: React.FC = () => {
  return (
    <>
      <section className={styles.sectionPostSmartnation}>
        <Container className={styles.postSmartnationContainer}>
          <Row className="justify-content-between align-items-start g-5">
            <Col lg={12} xl={8} md>
              <h1 className={styles.postsSmartnationCategoryHeading}>
                Kategori Berita
              </h1>
              <div className="d-flex flex-column py-4">
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
                <PostsRowItem />
              </div>
            </Col>
            <Col lg={12} xl={4}>
              <PopularPostItemList />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PostsCategoryPage;
