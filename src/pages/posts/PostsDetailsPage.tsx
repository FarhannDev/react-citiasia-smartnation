import React from 'react';
import styles from '@/assets/styles/modules/posts.module.css';
import { Container } from 'react-bootstrap';
import PostsDetails from '../../components/modules/posts/details/PostsDetails';

const PostsDetailsPage: React.FC = () => {
  return (
    <>
      <section className={styles.sectionPostDetailSmartnation}>
        <Container className={styles.postSmartnationContainer}>
          <PostsDetails />
        </Container>
      </section>
    </>
  );
};

export default PostsDetailsPage;
