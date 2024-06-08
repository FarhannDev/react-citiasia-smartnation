import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { HiOutlineClock } from 'react-icons/hi2';
import { postedAt } from '../../../../utils/common/generateFormattedDate';
import styles from '@/assets/styles/modules/PostsArticleRowItem.module.css';
import loadable from '@loadable/component';

const ArticleButtonCategory = loadable(
  () => import('../../../common/button/ArticleButtonCategory')
);

type PostsArticleRowItemProps = Posts;

const PostsArticleRowItem: React.FC<PostsArticleRowItemProps> = ({
  slug,
  title,
  sourceImageUrl,
  publishDate,
}) => {
  return (
    <div className={`${styles.postsArticleRowitems} mb-3`}>
      <div className="d-flex flex-column ">
        <div>
          <div className="d-flex flex-row align-items-center">
            <span className={styles.postsArticleRowitemsDate}>
              <HiOutlineClock className="me-1" fontSize={14} />
              {postedAt(publishDate)}
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center g-3">
          <div className="d-flex-flex-column">
            <Link
              className={`${styles.postsArticleRowitemsTitle}`}
              aria-label="Baca selengkapnya"
              to={`/${slug}`}
            >
              {parse(title)}
            </Link>

            <div className="pt-3">
              <ArticleButtonCategory />
            </div>
          </div>

          <div>
            <Link to={`/${slug}`} aria-label="Baca selengkapnya">
              <LazyLoadImage
                className={`${styles.postsArticleRowitemsThumbnail}`}
                alt={title}
                effect="blur"
                src={sourceImageUrl}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsArticleRowItem;
