import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../../utils/data/postsData';
import styles from '@/assets/styles/modules/posts.module.css';
import ContentLayout from '../../layouts/ContentLayout';
import MyComponent from '../../components/MyComponent';

const PostsDetailsPage: React.FC = () => {
  const { id } = useParams();

  const postsData: Posts | undefined = posts.find(
    (post) => post.slug === id?.toString()
  );

  return (
    <>
      <ContentLayout>
        <section className={styles.sectionPostDetailSmartnation}>
          {!postsData ? (
            <MyComponent.SearchEmpty title="Berita tidak ditemukan." />
          ) : (
            <MyComponent.PostsDetails post={postsData} />
          )}
        </section>
      </ContentLayout>
    </>
  );
};

export default PostsDetailsPage;
