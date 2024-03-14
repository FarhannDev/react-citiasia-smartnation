import styles from '@/assets/styles/modules/podcasts.module.css';

import PodcastRowItemList from '../../components/modules/podcasts/PodcastRowItemList';
import { Container } from 'react-bootstrap';
import PodcastVideoItem from '../../components/modules/podcasts/PodcastVideoItem';

const PodcastDetailPage = () => {
  return (
    <section className={styles.sectionPodcastSmartnation}>
      <Container className={styles.podcastSmartnationContainer}>
        <PodcastVideoItem videos="/videos/904A3BA3B24D944BF840A94A8CE1FAAD_video_dashinit.mp4" />
        <PodcastRowItemList />
      </Container>
    </section>
  );
};

export default PodcastDetailPage;
