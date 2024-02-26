import React from 'react';
import styles from '@/assets/styles/modules/popular-posts.module.css';
import { Link } from 'react-router-dom';

const PopularPostItem = () => {
  return (
    <div className={styles.popularPostsItem}>
      <div className="d-flex justify-content-start align-items-center g-3">
        <div className={styles.popularPostsItemStart}>01</div>
        <div>
          <Link
            className={styles.popularPostsItemTitle}
            to="/"
            aria-label="Baca selengkapnya"
          >
            Dalam Kenalkan Energi Terbarukan, Indonesia Gelar Pameran Teknologi
            Smart City
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularPostItem;
