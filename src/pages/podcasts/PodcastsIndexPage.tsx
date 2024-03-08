import { Col, Container, Row } from 'react-bootstrap';
import styles from '@/assets/styles/modules/podcasts.module.css';
import loadable from '@loadable/component';

import PodcastRowItemList from '../../components/modules/podcasts/PodcastRowItemList';
import PodcastPopulerItemList from '../../components/modules/podcasts/PodcastPopulerItemList';

const PodcastSearchBar = loadable(
  () => import('../../components/modules/podcasts/PodcastSearchBar')
);

const PodcastsIndexPage = () => {
  return (
    <section className={styles.sectionPodcastSmartnation}>
      <Container className={styles.podcastSmartnationContainer}>
        <Row className="justify-content-between align-items-start g-5">
          <Col lg={12} xl={8} md={12}>
            <h1 className={styles.podcastSmartnationHeading}>
              Podcast Smart Nation
            </h1>

            {/* Search Item Start */}
            <Row className="justify-content-start align-content-start g-4 py-3">
              <Col>
                <PodcastSearchBar />
              </Col>
            </Row>
            {/* Search Item End */}

            <PodcastRowItemList />
          </Col>

          <Col xl={4} lg={4} md>
            <PodcastPopulerItemList />
          </Col>
        </Row>

        {/* Podcast Item End */}
      </Container>
    </section>
  );
};

export default PodcastsIndexPage;
