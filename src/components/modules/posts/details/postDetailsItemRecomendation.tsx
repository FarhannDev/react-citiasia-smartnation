import styles from '@/assets/styles/modules/posts.module.css';
import ArticleCategoryRowItem from '../../articles/categoryArticle/ArticleCategoryRowItem';
import PostsPopulerFigureColumnItem from '../PostsPopulerFigureColumnItem';

const PostDetailsItemRecomendation = () => {
  return (
    <>
      <div className={styles.postDetailsItemRecomendation}>
        <article className="d-flex flex-column">
          <h3 className={styles.postDetailsItemRecomendationHeading}>
            Rekomendasi untuk anda
          </h3>
          <div className="row justify-content-start g-3 pt-4">
            <div className="col-lg-6 col-xl-6 col-md-12">
              <ArticleCategoryRowItem />
              <ArticleCategoryRowItem />
              <ArticleCategoryRowItem />
              <ArticleCategoryRowItem />
            </div>
            <div className="col-lg-6 col-xl-6 col-md-12">
              <ArticleCategoryRowItem />
              <ArticleCategoryRowItem />
              <ArticleCategoryRowItem />
              <ArticleCategoryRowItem />
            </div>
          </div>
        </article>

        <article className="d-flex flex-column">
          <h3 className={styles.postDetailsItemRecomendationHeading}>
            Berita smart nation lainnya
          </h3>
          <div className="row justify-content-start g-3 align-content-start pt-4">
            <div className="col-lg-4 col-xl-4 col-md-6">
              <PostsPopulerFigureColumnItem />
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6">
              <PostsPopulerFigureColumnItem />
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6">
              <PostsPopulerFigureColumnItem />
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6">
              <PostsPopulerFigureColumnItem />
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6">
              <PostsPopulerFigureColumnItem />
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6">
              <PostsPopulerFigureColumnItem />
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default PostDetailsItemRecomendation;
