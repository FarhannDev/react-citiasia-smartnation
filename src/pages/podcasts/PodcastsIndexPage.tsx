import { Col, Container, Row } from 'react-bootstrap';
import styles from '@/assets/styles/modules/podcasts.module.css';
import loadable from '@loadable/component';
import MyComponent from '../../components/MyComponent';
import { Helmet } from 'react-helmet';

const PodcastSearchBar = loadable(
  () => import('../../components/modules/podcasts/PodcastSearchBar')
);

const PodcastsIndexPage = () => {
  return (
    <>
      <Helmet
        encodeSpecialCharacters={true}
        title="Podcast"
        titleTemplate="%s - Smartnation"
        async
      >
        <meta
          property="og:description"
          content="Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation"
        />
        <meta property="og:type" content="article" />
      </Helmet>
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

              <MyComponent.PodcastRowItemList />
            </Col>

            <Col xl={4} lg={4} md>
              <MyComponent.PodcastPopulerItemList />
            </Col>
          </Row>

          {/* Podcast Item End */}
        </Container>
      </section>
    </>
  );
};

export default PodcastsIndexPage;
