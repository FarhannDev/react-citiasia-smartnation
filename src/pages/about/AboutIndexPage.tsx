import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { partners } from '../../utils/data/partnerData';
import { teams } from '../../utils/data/teamsData';
import { programCategory } from '../../utils/data/programsData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MyComponent from '../../components/MyComponent';
import styles from '@/assets/styles/modules/about.module.css';

function AboutIndexPage() {
  const programCategoryData: ProgramCategory[] = programCategory?.sort(
    (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
  );
  return (
    <>
      <Helmet>
        <title>Citiasia Center for Smart Nation (CCSN)</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <section className={styles.sectionAboutSmartnation}>
        <Container className={styles.sectionAboutSmartnationContainer}>
          <Row className="justify-content-start g-4 align-content-center">
            <Col xl={4} lg={5} md={12}>
              <LazyLoadImage
                alt="Citiasia Center for Smart Nation (CCSN)"
                className={styles.aboutSmartnationLogo}
                src="/images/smartnation/logo/sn_logo_2.png"
              />
            </Col>
            <Col xl={6} lg={7} md={12}>
              <h1 className={styles.aboutSmartnationHeading}>
                Citiasia Center for Smart Nation (CCSN)
              </h1>

              <p className={styles.aboutSmartnationText}>
                Citiasia Center for Smart Nation (CCSN) merupakan salah satu
                sayap strategis dari Citiasia Inc. dalam menyebarkan semangat
                membangun bangsa menuju Indonesia Smart Nation.
              </p>
              <p className={styles.aboutSmartnationText}>
                Visi Citiasia Center for Smart Nation (CCSN) adalah Menjadi
                market leader untuk layanan smart city dan smart enterprise di
                Indonesia pada tahun 2025.
              </p>
              <p className={styles.aboutSmartnationText}>
                Misi Citiasia Center for Smart Nation (CCSN) adalah membantu
                institusi publik dan sektor bisnis dengan memberikan solusi dan
                layanan aplikatif melalui konsultasi, layanan digital, dan
                inovasi untuk meningkatkan performa bisnis yang berkelanjutan,
                mengembangkan smart city, dan memberikan dampak positif sosial
                untuk Indonesia yang lebih baik.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.sectionAboutSmartnationProgram}>
        <Container className={styles.sectionAboutSmartnationContainer}>
          <h1 className={styles.sectionAboutSmartnationMitraHeading}>
            Program unggulan smart nation
          </h1>

          <MyComponent.AboutProgramItemList programs={programCategoryData} />
        </Container>
      </section>

      <section className={styles.sectionAboutSmartnationMitra}>
        <Container className={styles.sectionAboutSmartnationContainer}>
          <Row className="justiy-content-start g-3 py-5">
            <Col>
              <h1 className={styles.sectionAboutSmartnationMitraHeading}>
                Mitra Publik Kami
              </h1>

              <MyComponent.AboutTeamPartnerItemList
                partners={partners.filter(
                  (partner) => partner.type === 'mitra_public'
                )}
              />
            </Col>
          </Row>
          <Row className="justiy-content-start g-3 py-5">
            <Col>
              <h1 className={styles.sectionAboutSmartnationMitraHeading}>
                Mitra Swasta Kami
              </h1>

              <MyComponent.AboutTeamPartnerItemList
                partners={partners.filter(
                  (partner) => partner.type === 'mitra_swasta'
                )}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.sectionAboutSmartnationTeam}>
        <Container className={styles.sectionAboutSmartnationContainer}>
          <h1 className={styles.sectionAboutSmartnationTeamHeading}>
            Tim Smart Nation
          </h1>

          <MyComponent.AboutTeamItemList teams={teams} />
        </Container>
      </section>
    </>
  );
}

export default AboutIndexPage;
