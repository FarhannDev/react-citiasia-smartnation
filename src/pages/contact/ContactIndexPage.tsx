import { Helmet } from 'react-helmet';
import { Col, Container, Row } from 'react-bootstrap';
import appStyles from '@/assets/styles/modules/app.module.css';
import styles from '@/assets/styles/modules/contact.module.css';
import MyComponent from '../../components/MyComponent';
import ContentLayoutFull from '../../layouts/ContentLayoutFull';

const ContactIndexPage = () => {
  return (
    <>
      <ContentLayoutFull>
        <Helmet
          encodeSpecialCharacters={true}
          title="Hubungi kami"
          titleTemplate="%s - Smartnation"
          async
        >
          <meta
            property="og:description"
            content="Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation"
          />
          <meta property="og:type" content="article" />
        </Helmet>

        <section className={styles.sectionContactSmartnation}>
          <Container className={styles.contactSmartnationContainer}>
            <Row className="justify-content-start align-items-center g-4">
              <Col xl={6} lg={6} md={12}>
                <div className="d-flex flex-column">
                  <h2 className={styles.contactItemHeading}>
                    Mari Berbincang!
                  </h2>
                  <p className={styles.contactItemSubHeading}>
                    Kami sangat ingin mendengar dari Anda! Apakah Anda memiliki
                    pertanyaan, komentar, atau saran yang ingin Anda sampaikan?
                    Jangan ragu untuk menghubungi kami. Kami senantiasa siap
                    menerima pesan Anda.
                  </p>
                </div>
              </Col>
              <Col xl={6} lg={6} md={12}>
                <MyComponent.ContactItemInput />
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section Newsletter Subscribe  */}
        <section
          className={appStyles.sectionNewsletterSubscribe}
          id={appStyles.sectionNewsletterSubscribe}
        >
          <Container className={appStyles.sectionNewsletterSubscribeContainer}>
            <MyComponent.NewsLetterItem />
          </Container>
        </section>
      </ContentLayoutFull>
    </>
  );
};

export default ContactIndexPage;
