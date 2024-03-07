import React from 'react';
import styles from '@/assets/styles/modules/posts.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { postedAt } from '../../../utils/common/generateFormattedDate';

type PostsPopulerFigureColumnItemProps = Posts;

const PostsPopulerFigureColumnItem: React.FC<
  PostsPopulerFigureColumnItemProps
> = ({ slug, title, sourceImageUrl, publishDate }) => {
  return (
    <div className={styles.postsPopulerFigureColumnItem}>
      <Link to="/" aria-label="Baca selengkapnya">
        <LazyLoadImage
          className={`${styles.postsPopulerFigureColumnItemImage} img-fluid`}
          alt=""
          effect="blur"
          src={sourceImageUrl}
        />
      </Link>

      <div className={styles.postsPopulerFigureColumnItemContent}>
        <div className="d-flex justify-content-between align-items-center g-3 mb-2">
          <div className={styles.postsPopulerFigureColumnItemContentLabel}>
            Berita
          </div>
          <div className={styles.postsPopulerFigureColumnItemContentDate}>
            {postedAt(publishDate)}
          </div>
        </div>

        <Link
          to={`/${slug}`}
          aria-label="Baca selengkapnya"
          className={styles.postsPopulerFigureColumntemContentTitle}
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default PostsPopulerFigureColumnItem;
