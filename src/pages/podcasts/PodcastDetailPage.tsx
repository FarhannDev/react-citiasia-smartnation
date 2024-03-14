import { Container } from 'react-bootstrap';
import styles from '@/assets/styles/modules/podcasts.module.css';
import MyComponent from '../../components/MyComponent';

const PodcastDetailPage = () => {
  return (
    <section className={styles.sectionPodcastSmartnation}>
      <Container className={styles.podcastSmartnationContainer}>
        <MyComponent.PodcastVideoItem videos="/videos/904A3BA3B24D944BF840A94A8CE1FAAD_video_dashinit.mp4" />
        <MyComponent.PodcastRowItemList />
      </Container>
    </section>
  );
};

export default PodcastDetailPage;
