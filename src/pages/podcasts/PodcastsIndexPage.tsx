import { Helmet } from 'react-helmet';
import { Col, Row } from 'react-bootstrap';
import styles from '@/assets/styles/modules/podcasts.module.css';
import MyComponent from '../../components/MyComponent';
import ContentLayout from '../../layouts/ContentLayout';

const PodcastsIndexPage = () => {
  return (
    <>
      <ContentLayout>
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
          <Row className="justify-content-between align-items-start g-3">
            <Col lg={12} xl={8} md={12}>
              <h1 className={styles.podcastSmartnationHeading}>
                Podcast Smart Nation
              </h1>

              <MyComponent.PodcastRowItemList />
            </Col>
          </Row>
        </section>
      </ContentLayout>
    </>
  );
};

export default PodcastsIndexPage;
