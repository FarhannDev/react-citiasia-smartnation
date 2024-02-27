import { Col, Container, Row } from 'react-bootstrap';
import styles from '@/assets/styles/modules/podcasts.module.css';
import PodcastRowItem from '../../components/modules/podcasts/PodcastRowItem';
import PodcastSearchBar from '../../components/modules/podcasts/PodcastSearchBar';

const PodcastsIndexPage = () => {
  return (
    <section className={styles.sectionPodcastSmartnation}>
      <Container className={styles.podcastSmartnationContainer}>
        <h1 className={styles.podcastSmartnationHeading}>
          Podcasts Smart Nation
        </h1>

        {/* Search Item Start */}
        <Row className="justify-content-start align-content-start g-4 py-3">
          <Col>
            <PodcastSearchBar />
          </Col>
        </Row>
        {/* Search Item End */}

        {/* Podcast Item Start */}
        <Row className="justify-content-start align-content-start g-4">
          <Col lg={6} xl={4} md={12}>
            <PodcastRowItem />
          </Col>
          <Col lg={6} xl={4} md={12}>
            <PodcastRowItem />
          </Col>
          <Col lg={6} xl={4} md={12}>
            <PodcastRowItem />
          </Col>
          <Col lg={6} xl={4} md={12}>
            <PodcastRowItem />
          </Col>
          <Col lg={6} xl={4} md={12}>
            <PodcastRowItem />
          </Col>
          <Col lg={6} xl={4} md={12}>
            <PodcastRowItem />
          </Col>
          <Col lg={6} xl={4} md={12}>
            <PodcastRowItem />
          </Col>
          <Col lg={6} xl={4} md={12}>
            <PodcastRowItem />
          </Col>
          <Col lg={6} xl={4} md={12}>
            <PodcastRowItem />
          </Col>
          <Col lg={6} xl={4} md={12}>
            <PodcastRowItem />
          </Col>
          <Col lg={6} xl={4} md={12}>
            <PodcastRowItem />
          </Col>
          <Col lg={6} xl={4} md={12}>
            <PodcastRowItem />
          </Col>
        </Row>

        {/* Podcast Item End */}
      </Container>
    </section>
  );
};

export default PodcastsIndexPage;
