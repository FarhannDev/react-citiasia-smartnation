import styles from '@/assets/styles/modules/podcasts.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const PodcastRowItem = () => {
  return (
    <div className={styles.podcastRowItem}>
      <LazyLoadImage
        className={styles.podcastRowItemImage}
        alt="podcast image"
        effect="blur"
        src="https://s3-alpha-sig.figma.com/img/1097/f19a/df26ef6d586e4e091b3ed0928488eae6?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gXzYc4PTvw1pZOEZ4iflwuMCkpZl-5Gyhfqj5bRC3TXR6nNIoEFayb5~IF1R7bAtUJuoxKl7Kd0aktiunV2CNU2~Dd6711XqkbGdGQwxHkbrYMLR0rgzkQ5zaMKnbQ54ADuL3DZ5bgpvtE0dvuBJ0vq7yDjB-tRuqyJKb7Qs9r9JGp61i57AHesqZNoF5GxI9KLc6hOI3YDjiICn296IrGOZcR-UM6NzSOTu5b3X~8-0XGvvSBIXCpZtL0ic3wOGqPfpqz4W0PrV~pPhwY0syufpGMJVHw0D1UkeO59FR9PeqS8CKxOqf20jWeyYQBeeOZ1jCMHGdl1DLDobUn5RAA__"
      />
      <div className={styles.podcastRowItemBody}>
        <Link
          to="/"
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
