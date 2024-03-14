import styles from '@/assets/styles/modules/posts.module.css';
import { posts } from '../../../../utils/data/postsData';
import MyComponent from '../../../MyComponent';

const PostDetailsItemRecomendation = () => {
  const popularPostData: Posts[] = posts
    ?.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 8);

  const postsData = posts
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 6);

  return (
    <>
      <div className={styles.postDetailsItemRecomendation}>
        <article className="d-flex flex-column">
          <h3 className={styles.postDetailsItemRecomendationHeading}>
            Rekomendasi untuk anda
          </h3>
          <div className="row justify-content-start g-3 pt-4">
            {popularPostData.map((post, index) => (
              <div key={post.id} className="col-lg-6 col-xl-6 col-md-12">
                <MyComponent.ArticleCategoryRowItem
                  index={index + 1}
                  {...post}
                />
              </div>
            ))}
          </div>
        </article>

        <article className="d-flex flex-column">
          <h3 className={styles.postDetailsItemRecomendationHeading}>
            Berita smart nation lainnya
          </h3>
          <div className="row justify-content-start g-3 align-content-start pt-4">
            {postsData.map((post) => (
              <div key={post.id} className="col-lg-4 col-xl-4 col-md-6">
                <MyComponent.PostsPopulerFigureColumnItem {...post} />
              </div>
            ))}
          </div>
        </article>
      </div>
    </>
  );
};

export default PostDetailsItemRecomendation;
