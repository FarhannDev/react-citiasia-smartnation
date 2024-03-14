import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa6';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from '@/assets/styles/modules/app.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function FooterNavigation() {
  return (
    <footer className={styles.customfooterNavigation}>
      <Container className={styles.customfooterNavigationContainer}>
        <Row className="justify-content-between g-4 py-5">
          <Col xl={8} lg={12} md={12}>
            <Row className="justify-content-arround gx-5">
              <Col xl={4} lg={6} md>
                <LazyLoadImage
                  alt="Citiasia Center for Smart Nation (CCSN)"
                  src="/images/smartnation/logo/sn_logo_2.png"
                  width={250}
                  className="mb-4"
                />
              </Col>
              <Col xl={8} lg={6} md>
                <div className="d-flex flex-column">
                  <div className="mb-3">
                    <p className="text-white fs-5">
                      Citiasia Center for Smart Nation (CCSN)
                    </p>
                    <p className="text-white fs-6">
                      Citiasia Center for Smart Nation (CCSN) merupakan salah
                      satu sayap strategis dari Citiasia Inc. dalam menyebarkan
                      semangat membangun bangsa menuju Indonesia Smart Nation
                    </p>
                  </div>

                  <div>
                    <p className="text-white fs-5 ">Lokasi</p>
                    <address className="text-white fs-6">
                      Jl. Jatinegara Barat 1 No.5-6, RT.2/RW.4, Bali Mester,
                      Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus
                      Ibukota Jakarta 13310
                    </address>
                  </div>

                  <div>
                    <p className="text-white">Ikuti Kami</p>
                    <div className="d-flex flex-wrap justify-content-start pt-3">
                      <Link
                        to="https://twitter.com/smartnation_id"
                        target="_blank"
                        aria-label="Sosial Media"
                        rel="noopener"
                        className="me-3 "
                      >
                        <FaXTwitter size={22} color="white" />
                      </Link>
                      <Link
                        to="https://www.facebook.com/smartnation.id"
                        target="_blank"
                        aria-label="Sosial Media"
                        rel="noopener"
                        className="me-3 "
                      >
                        <FaFacebookF size={22} color="white" />
                      </Link>
                      <Link
                        to="https://www.instagram.com/smartnation.id/?hl=id"
                        target="_blank"
                        aria-label="Sosial Media"
                        rel="noopener"
                        className="me-3 "
                      >
                        <FaInstagram size={22} color="white" />
                      </Link>
                      <Link
                        to=" https://www.tiktok.com/@smartnation.id/"
                        target="_blank"
                        aria-label="Sosial Media"
                        rel="noopener"
                        className="me-3 "
                      >
                        <FaTiktok size={22} color="white" />
                      </Link>
                      <Link
                        to="https://www.youtube.com/@smartnationid"
                        target="_blank"
                        aria-label="Sosial Media"
                        rel="noopener"
                        className="me-3 "
                      >
                        <FaYoutube size={22} color="white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xl={4} lg={12} md={12}>
            <div className="d-flex flex-column mx-lg-3">
              <div className="text-white fs-5">Navigasi</div>
              <div className="d-flex flex-column pt-3">
                <Link
                  aria-label="Selengkapnya"
                  className="mb-3 link-offset-2 link-underline link-underline-opacity-0 text-white fs-6"
                  to="/"
                >
                  Beranda
                </Link>
                <Link
                  aria-label="Selengkapnya"
                  className="mb-3 link-offset-2 link-underline link-underline-opacity-0 text-white fs-6"
                  to="/"
                >
                  Berita
                </Link>
                <Link
                  aria-label="Selengkapnya"
                  className="mb-3 link-offset-2 link-underline link-underline-opacity-0 text-white fs-6"
                  to="/"
                >
                  Program
                </Link>
                <Link
                  aria-label="Selengkapnya"
                  className="mb-3 link-offset-2 link-underline link-underline-opacity-0 text-white fs-6"
                  to="/"
                >
                  Podcast
                </Link>
                <Link
                  aria-label="Selengkapnya"
                  className="mb-3 link-offset-2 link-underline link-underline-opacity-0 text-white fs-6"
                  to="/contact"
                >
                  Hubungi Kami
                </Link>
                <Link
                  aria-label="Selengkapnya"
                  className="mb-3 link-offset-2 link-underline link-underline-opacity-0 text-white fs-6"
                  to="/about"
                >
                  Tentang Kami
                </Link>
                <Link
                  aria-label="Selengkapnya"
                  className="mb-3 link-offset-2 link-underline link-underline-opacity-0 text-white fs-6"
                  to="/"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-start g-3 ">
          <Col>
            <hr className="text-secondary" />
            <p className="text-white" style={{ fontSize: '14px' }}>
              &copy; 2023 smartnation by
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterNavigation;
