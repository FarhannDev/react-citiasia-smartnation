import { Col, Container, Figure, Row } from 'react-bootstrap';
import styles from '@/assets/styles/modules/about.module.css';
import AboutTeamItem from '../../components/modules/about/AboutTeamItem';

function AboutIndexPage() {
  return (
    <>
      <section className={styles.sectionAboutSmartnation}>
        <Container className={styles.sectionAboutSmartnationContainer}>
          <Row className="justify-content-start g-4 align-content-center">
            <Col xl={4} lg={5} md={12}>
              <img
                src="https://smartnation.id/wp-content/uploads/2021/10/imageedit_1_5835502938-300x167.png"
                alt=""
                loading="lazy"
                className={styles.aboutSmartnationLogo}
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

      <section className={styles.sectionAboutSmartnationMitra}>
        <Container className={styles.sectionAboutSmartnationContainer}>
          <h1 className={styles.sectionAboutSmartnationMitraHeading}>
            Mitra Kami
          </h1>

          <div className="row justify-content-start g-3 py-5 row-cols-4  row-cols-md-6">
            <div className="col">
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="/images/smartnation/partner/cs_partner_apeksi.png"
                />
              </Figure>
            </div>
            <div className="col">
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="/images/smartnation/partner/cs_partner_oracle.png"
                />
              </Figure>
            </div>
            <div className="col">
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="/images/smartnation/partner/cs_partner_apeksi.png"
                />
              </Figure>
            </div>
            <div className="col">
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="/images/smartnation/partner/cs_partner_pertamina.png"
                />
              </Figure>
            </div>
            <div className="col">
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="/images/smartnation/partner/cs_partner_apeksi.png"
                />
              </Figure>
            </div>
            <div className="col">
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="/images/smartnation/partner/cs_partner_apeksi.png"
                />
              </Figure>
            </div>
            <div className="col">
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="/images/smartnation/partner/cs_partner_apeksi.png"
                />
              </Figure>
            </div>
            <div className="col">
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="/images/smartnation/partner/cs_partner_apeksi.png"
                />
              </Figure>
            </div>
            <div className="col">
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="/images/smartnation/partner/cs_partner_apeksi.png"
                />
              </Figure>
            </div>
            <div className="col">
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="/images/smartnation/partner/cs_partner_apeksi.png"
                />
              </Figure>
            </div>
            <div className="col">
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="/images/smartnation/partner/cs_partner_apeksi.png"
                />
              </Figure>
            </div>
            <div className="col">
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="/images/smartnation/partner/cs_partner_apeksi.png"
                />
              </Figure>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.sectionAboutSmartnationTeam}>
        <Container className={styles.sectionAboutSmartnationContainer}>
          <h1 className={styles.sectionAboutSmartnationTeamHeading}>
            Tim Citiasia Inc
          </h1>

          <Row className="justify-content-start g-4 py-5">
            <Col lg={6} xl={4} md={6}>
              <AboutTeamItem
                name="Dr. Ir. Cahyana Ahmadjayadi "
                jobTitle="Co-Founder & Chairman"
                sourceImage="https://s3-alpha-sig.figma.com/img/f59f/2880/395327472fb61e8c3119d017efa72a05?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o3uCPlxvZ6GZdU2Vh5PZpiHLZ2bBXxe~csvrWIrwUfdig439n9ossdYAxIr9FTem3-EwOwNafbKQvB~cBpBpWw3RuqdRwp8j1hzErfC1rkPuOD19eKGrRqJ1gigyD1KH6JMwhhgbByWzwWsS6u1Std373CaR0kaXHLUVwPA8MPCvFUMU6q6DdXv7oy8vgcUXYk~E00eMAdBXx3IdcD-KBciH7L~f38o3VreFbpTFYsVplkFk4XkNEpMRTuX1LchNQ6HkQ7yhvkXGCYBWGcWHqsXNb8NHK4YA0~g5CZ17fFGTqoAiByyMOSBM~D7m0sEk3lYtVw3AeW3Z-9For3c53w__"
                description="     Dr. Cahyana pernah menjadi pejabat eselon satu di 3 kementrian(
            Kementrian Otda, Kemendagri, Kominfo), pernah menjadi direktur dan
            komisaris di beberapa BUMN dan perusahaan swasta (PT. Pos, Bank
            Mandiri, Lintas Artha), dan seorang figur terkemuka di bidang TIK.
            Dr. Cahyana merupakan lulusan Insitut Teknologi Bandung yang
            mengambil Doktor di bidang Cyber Security."
              />
            </Col>
            <Col lg={6} xl={4} md={6}>
              <AboutTeamItem
                name="Farid Subkhan
                "
                jobTitle="Co-Founder & Chief Executive Officer"
                sourceImage="https://s3-alpha-sig.figma.com/img/f023/5b94/260cbb4a139b30daa7e009b4b92ae256?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pVFZU1~dvy7hOX-7lDkYG6k9eTbl7upgofjE-hnBrDsa8LArpmsakBwrfbvbNznpINo-BEQvx1l0VeiNImWq-1M8pntz~lo3ugFzHC-kG3JSafoPVSppPbGZ6Py3Om1~oyw0S9Ij3EzV01kqfrr5Kci10yLmu2QbtfH-J0fIRmgu9tZx1TWXqTXvyuk15EcBmJ0IbYM3seOsh5ihd8AFVY~5ffPvD4IVyFLqqu4zBxBxAxK1AwDPYPwtdH-ETpSFzah31cNtDgd75zxpnca3mbt3JtE8X3nAif2xIymjZG35l8X8xauFm7a~2seu8UqDuir696FPHa169XT8CvbAyQ__"
                description="Farid Subkhan telah berpengalaman memimpin tim perencanaan dan implementasi proyek konsultansi berskala nasional dan internasional selama lebih dari 15 tahun. Sebelum bergabung dengan Citiasia, Farid menjadi executive di konsultan manajemen terbesar di Indonesia dan berpengalaman menjalankan proyek branding untuk berbagai perusahaan dan instansi pemerintah. Farid memiliki dua gelar master, dari University of Turin (Italia) dan dari Fakultas Ekonomi Universitas Indonesia.

                "
              />
            </Col>
            <Col lg={6} xl={4} md={6}>
              <AboutTeamItem
                name="Farid Subkhan
                "
                jobTitle="Co-Founder & Chief Executive Officer"
                sourceImage="https://s3-alpha-sig.figma.com/img/f023/5b94/260cbb4a139b30daa7e009b4b92ae256?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pVFZU1~dvy7hOX-7lDkYG6k9eTbl7upgofjE-hnBrDsa8LArpmsakBwrfbvbNznpINo-BEQvx1l0VeiNImWq-1M8pntz~lo3ugFzHC-kG3JSafoPVSppPbGZ6Py3Om1~oyw0S9Ij3EzV01kqfrr5Kci10yLmu2QbtfH-J0fIRmgu9tZx1TWXqTXvyuk15EcBmJ0IbYM3seOsh5ihd8AFVY~5ffPvD4IVyFLqqu4zBxBxAxK1AwDPYPwtdH-ETpSFzah31cNtDgd75zxpnca3mbt3JtE8X3nAif2xIymjZG35l8X8xauFm7a~2seu8UqDuir696FPHa169XT8CvbAyQ__"
                description="Farid Subkhan telah berpengalaman memimpin tim perencanaan dan implementasi proyek konsultansi berskala nasional dan internasional selama lebih dari 15 tahun. Sebelum bergabung dengan Citiasia, Farid menjadi executive di konsultan manajemen terbesar di Indonesia dan berpengalaman menjalankan proyek branding untuk berbagai perusahaan dan instansi pemerintah. Farid memiliki dua gelar master, dari University of Turin (Italia) dan dari Fakultas Ekonomi Universitas Indonesia.

                "
              />
            </Col>
            <Col lg={6} xl={4} md={6}>
              <AboutTeamItem
                name="Farid Subkhan
                "
                jobTitle="Co-Founder & Chief Executive Officer"
                sourceImage="https://s3-alpha-sig.figma.com/img/f023/5b94/260cbb4a139b30daa7e009b4b92ae256?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pVFZU1~dvy7hOX-7lDkYG6k9eTbl7upgofjE-hnBrDsa8LArpmsakBwrfbvbNznpINo-BEQvx1l0VeiNImWq-1M8pntz~lo3ugFzHC-kG3JSafoPVSppPbGZ6Py3Om1~oyw0S9Ij3EzV01kqfrr5Kci10yLmu2QbtfH-J0fIRmgu9tZx1TWXqTXvyuk15EcBmJ0IbYM3seOsh5ihd8AFVY~5ffPvD4IVyFLqqu4zBxBxAxK1AwDPYPwtdH-ETpSFzah31cNtDgd75zxpnca3mbt3JtE8X3nAif2xIymjZG35l8X8xauFm7a~2seu8UqDuir696FPHa169XT8CvbAyQ__"
                description="Farid Subkhan telah berpengalaman memimpin tim perencanaan dan implementasi proyek konsultansi berskala nasional dan internasional selama lebih dari 15 tahun. Sebelum bergabung dengan Citiasia, Farid menjadi executive di konsultan manajemen terbesar di Indonesia dan berpengalaman menjalankan proyek branding untuk berbagai perusahaan dan instansi pemerintah. Farid memiliki dua gelar master, dari University of Turin (Italia) dan dari Fakultas Ekonomi Universitas Indonesia.

                "
              />
            </Col>
            <Col lg={6} xl={4} md={6}>
              <AboutTeamItem
                name="Farid Subkhan
                "
                jobTitle="Co-Founder & Chief Executive Officer"
                sourceImage="https://s3-alpha-sig.figma.com/img/f023/5b94/260cbb4a139b30daa7e009b4b92ae256?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pVFZU1~dvy7hOX-7lDkYG6k9eTbl7upgofjE-hnBrDsa8LArpmsakBwrfbvbNznpINo-BEQvx1l0VeiNImWq-1M8pntz~lo3ugFzHC-kG3JSafoPVSppPbGZ6Py3Om1~oyw0S9Ij3EzV01kqfrr5Kci10yLmu2QbtfH-J0fIRmgu9tZx1TWXqTXvyuk15EcBmJ0IbYM3seOsh5ihd8AFVY~5ffPvD4IVyFLqqu4zBxBxAxK1AwDPYPwtdH-ETpSFzah31cNtDgd75zxpnca3mbt3JtE8X3nAif2xIymjZG35l8X8xauFm7a~2seu8UqDuir696FPHa169XT8CvbAyQ__"
                description="Farid Subkhan telah berpengalaman memimpin tim perencanaan dan implementasi proyek konsultansi berskala nasional dan internasional selama lebih dari 15 tahun. Sebelum bergabung dengan Citiasia, Farid menjadi executive di konsultan manajemen terbesar di Indonesia dan berpengalaman menjalankan proyek branding untuk berbagai perusahaan dan instansi pemerintah. Farid memiliki dua gelar master, dari University of Turin (Italia) dan dari Fakultas Ekonomi Universitas Indonesia.

                "
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutIndexPage;
