import React from 'react';
import styles from '@/assets/styles/modules/podcasts.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

// type PodcastPopulerItemProps = {
//   podcasts: Podcasts[];
//   heading: string;
// };

const PodcastPopulerItem: React.FC = () => {
  return (
    <>
      <div className={styles.podcastPopulerItem}>
        <div className="d-flex justify-content-start g-3">
          <Link to="/" aria-label="Selengkapnya">
            <LazyLoadImage
              className={styles.podcastPopulerItemImage}
              alt=""
              src="/images/smartnation/content/content_2.png"
            />
          </Link>

          <div className={styles.podcastPopulerItemContent}>
            <Link
              to={'/'}
              aria-label="Selengkapnya"
              className={styles.podcastPopulerItemContentTitle}
            >
              Judul podcast
            </Link>

            <div className={styles.podcastPopulerItemContentDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              nemo?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PodcastPopulerItem;
