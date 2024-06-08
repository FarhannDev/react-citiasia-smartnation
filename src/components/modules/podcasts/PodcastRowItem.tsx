import styles from '@/assets/styles/modules/podcasts.module.css';
import { HiOutlineClock } from 'react-icons/hi2';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { postedAt } from '../../../utils/common/generateFormattedDate';

const PodcastRowItem = () => {
  return (
    <div className={styles.podcastRowItem}>
      <Link to="/podcast/1" aria-label="Selengkapnya">
        <LazyLoadImage
          className={styles.podcastRowItemImage}
          alt="podcast image"
          effect="blur"
          src="/images/smartnation/content/content_2.png"
        />
      </Link>
      <div className={styles.podcastRowItemBody}>
        <div className="d-flex flex-row align-items-center">
          <span className={styles.podcastRowItemBodyDate}>
            <HiOutlineClock className="me-1" fontSize={12} />
            {postedAt('7 Mar 2024')}
          </span>
        </div>
        <Link
          to="/podcast/1"
          aria-label="Selengkapnya"
          target="_parent"
          className={`stretched-link ${styles.podcastRowItemBodyTitle}`}
        >
          1 Menit Bincang Pintar Bersama SmartNation
        </Link>
      </div>
    </div>
  );
};

export default PodcastRowItem;
