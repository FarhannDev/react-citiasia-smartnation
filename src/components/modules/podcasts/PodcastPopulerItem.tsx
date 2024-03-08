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
              src="https://s3-alpha-sig.figma.com/img/6137/5736/b7d11944c8b95c1c4b3cd0e93bede5ea?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n6IuuhMiqbmt0PP~B9dm1pSoPLa5JQIn3ZloyYB4Gezn3TAiA7Phb7uJmTELJbMMueky~Lnpr5eFw30scr7Z1aF9ylbB86xb-4LisFvM7H~kmlqVhjJ5jYfX4BglBu2E2jRDpQ7z69Bljw4vkkmi8SGb7RcqUYLwxa5a5XycqnZh89uc3AQ-V56J6sIe4Dykq1CPsCrwPMwuWbHn5TTZjdKyHZxMicVwP-~~FO4~QsKUk~hW2VLhC3IothvJMLHiavIieEr8yhxsnK5xP3hLLFLQoRwPSAWFH1m9drbWeOtbpSxyY2Y197K360sEmotM2hNK6YrrRO8bppSw6YlUog__"
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
