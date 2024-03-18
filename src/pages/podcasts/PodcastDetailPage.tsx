import { Container } from 'react-bootstrap';
import styles from '@/assets/styles/modules/podcasts.module.css';
import MyComponent from '../../components/MyComponent';
import ContentLayout from '../../layouts/ContentLayout';

const PodcastDetailPage = () => {
  return (
    <ContentLayout>
      <section className={styles.sectionPodcastSmartnation}>
        <Container className={styles.podcastSmartnationContainer}>
          <MyComponent.PodcastVideoItem videos="/videos/904A3BA3B24D944BF840A94A8CE1FAAD_video_dashinit.mp4" />
          <MyComponent.PodcastRowItemList />
        </Container>
      </section>
    </ContentLayout>
  );
};

export default PodcastDetailPage;
