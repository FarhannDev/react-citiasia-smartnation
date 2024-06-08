import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '@/assets/styles/modules/ArticleCategoryRowItem.module.css';

type ArticleCategoryRowItemProps = Posts;
type IncrementProps = { index: number };

const ArticleCategoryRowItem: React.FC<
  ArticleCategoryRowItemProps & IncrementProps
> = ({ slug, title, sourceImageUrl, index }) => {
  return (
    <div className={styles.articleCategoryRowItem}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-row">
          <div className={styles.articleCategoryRowItemStart}>0{index}</div>
          <Link
            className={styles.articleCategoryRowItemTitle}
            to={`/${slug}`}
            aria-label="Baca selengkapnya"
          >
            {title}
          </Link>
        </div>
        <div>
          <LazyLoadImage
            alt=""
            effect="blur"
            className={styles.articleCategoryRowItemImage}
            src={sourceImageUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCategoryRowItem;
