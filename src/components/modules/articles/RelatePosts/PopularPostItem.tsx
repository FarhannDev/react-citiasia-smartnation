import { Link } from 'react-router-dom';
import styles from '@/assets/styles/modules/popular-posts.module.css';
import React from 'react';

type PopularPostItemProps = Posts;
type IncrementProps = { index: number };

const PopularPostItem: React.FC<PopularPostItemProps & IncrementProps> = ({
  title,
  slug,
  index,
}) => {
  return (
    <div className={styles.popularPostsItem}>
      <div className="d-flex justify-content-start align-items-center g-3">
        <div className={styles.popularPostsItemStart}>0{index}</div>
        <div>
          <Link
            className={styles.popularPostsItemTitle}
            to={`/${slug}`}
            aria-label="Baca selengkapnya"
          >
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularPostItem;
