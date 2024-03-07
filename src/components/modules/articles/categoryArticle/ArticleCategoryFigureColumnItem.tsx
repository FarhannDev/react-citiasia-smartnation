import React from 'react';
import parse from 'html-react-parser';
import loadable from '@loadable/component';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Figure } from 'react-bootstrap';
import { HiOutlineClock } from 'react-icons/hi2';
import { postedAt } from '../../../../utils/common/generateFormattedDate';
import styles from '@/assets/styles/modules/ArticleCategoryFigureColumnItem.module.css';

const ArticleButtonCategory = loadable(
  () => import('../../../common/button/ArticleButtonCategory')
);

type ArticleCategoryFigureColumnItemProps = Posts;

const ArticleCategoryFigureColumnItem: React.FC<
  ArticleCategoryFigureColumnItemProps
> = ({ slug, title, sourceImageUrl, publishDate, excerpt }) => {
  return (
    <div className={styles.articleCategoryFigureColumnItem}>
      <div className="row justify-content-start g-lg-4 g-0">
        <div className="col-xl-6 col-lg-6 col-md-auto">
          <Figure className={styles.articleCategoryFigureColumnItemContainer}>
            <Link to={`/${slug}`} aria-label="Baca selengkapnya">
              <LazyLoadImage
                className={`${styles.articleCategoryFigureColumnItemImage}  img-fluid `}
                alt="171x180"
                effect="blur"
                src={sourceImageUrl}
              />
            </Link>
          </Figure>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-auto">
          <div className={styles.articleCategoryFigureColumnItemBody}>
            <Link
              to={`/${slug}`}
              aria-label="Baca selengkapnya"
              className={styles.articleCategoryFigureColumnItemBodyTitle}
            >
              {parse(title)}
            </Link>

            <div className="d-flex flex-row align-items-center">
              <span
                className={
                  styles.articleCategoryFigureColumnItemBodyContentDate
                }
              >
                <HiOutlineClock className="me-1" fontSize={14} />
                {postedAt(publishDate)}
              </span>
            </div>

            <div className={styles.articleCategoryFigureColumnItemBodyContent}>
              {parse(excerpt)}
            </div>

            <ArticleButtonCategory />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-start g-3" />
    </div>
  );
};

export default ArticleCategoryFigureColumnItem;
