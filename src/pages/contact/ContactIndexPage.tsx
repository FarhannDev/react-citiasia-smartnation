import { Col, Container, Row } from 'react-bootstrap';
import appStyles from '@/assets/styles/modules/app.module.css';
import styles from '@/assets/styles/modules/contact.module.css';
import MyComponent from '../../components/MyComponent';

const ContactIndexPage = () => {
  return (
    <>
      <section className={styles.sectionContactSmartnation}>
        <Container className={styles.contactSmartnationContainer}>
          {/* <h1 className={styles.contactSmartnationHeading}>Hubungi Kami</h1> */}

          <Row className="justify-content-start align-items-center g-4">
            <Col xl={6} lg={6} md={12}>
              <div className="d-flex flex-column">
                <h2 className={styles.contactItemHeading}>Mari Berbincang!</h2>
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
    </>
  );
};

export default ContactIndexPage;
