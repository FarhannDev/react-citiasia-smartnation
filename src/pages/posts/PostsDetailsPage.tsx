import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { posts } from '../../utils/data/postsData';
import styles from '@/assets/styles/modules/posts.module.css';
import PostsDetails from '../../components/modules/posts/details/PostsDetails';

const PostsDetailsPage: React.FC = () => {
  const { id } = useParams();

  const postsData: Posts | undefined = posts.find(
    (post) => post.slug === id?.toString()
  );

  return (
    <>
      <section className={styles.sectionPostDetailSmartnation}>
        <Container className={styles.postSmartnationContainer}>
          <PostsDetails post={postsData} />
        </Container>
      </section>
    </>
  );
};

export default PostsDetailsPage;
