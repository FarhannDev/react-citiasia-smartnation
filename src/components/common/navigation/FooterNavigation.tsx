import React from 'react';
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

const FooterNavigation = () => {
  return (
    <footer className={styles.customfooterNavigation}>
      <Container className={styles.customfooterNavigationContainer}>
        <Row className="justify-content-between g-4 py-5">
          <Col xl={8} lg={12} md={12}>
            <Row className="justify-content-arround gx-5">
              <Col xl={4} lg={6} md>
                <img
                  src="https://smartnation.id/wp-content/uploads/2021/10/imageedit_1_5835502938-300x167.png"
                  alt=""
                  loading="lazy"
                  width={250}
                  className="mb-4"
                />
              </Col>
              <Col xl={8} lg={6} md>
                <div className="d-flex flex-column">
                  <div className="mb-3">
                    <h5 className="text-white">
                      Citiasia Center for Smart Nation (CCSN)
                    </h5>
                    <p className="text-white fs-6">
                      Citiasia Center for Smart Nation (CCSN) merupakan salah
                      satu sayap strategis dari Citiasia Inc. dalam menyebarkan
                      semangat membangun bangsa menuju Indonesia Smart Nation
                    </p>
                  </div>

                  <div>
                    <h5 className="text-white">Lokasi</h5>
                    <address className="text-white fs-6">
                      Jl. Jatinegara Barat 1 No.5-6, RT.2/RW.4, Bali Mester,
                      Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus
                      Ibukota Jakarta 13310
                    </address>
                  </div>

                  <div>
                    <h5 className="text-white">Ikuti Kami</h5>
                    <div className="d-flex flex-wrap justify-content-start pt-3">
                      <Link
                        to="/"
                        target="_blank"
                        aria-label="Sosial Media"
                        className="me-3 "
                      >
                        <FaXTwitter size={22} color="white" />
                      </Link>
                      <Link
                        to="/"
                        target="_blank"
                        aria-label="Sosial Media"
                        className="me-3 "
                      >
                        <FaFacebookF size={22} color="white" />
                      </Link>
                      <Link
                        to="/"
                        target="_blank"
                        aria-label="Sosial Media"
                        className="me-3 "
                      >
                        <FaInstagram size={22} color="white" />
                      </Link>
                      <Link
                        to="/"
                        target="_blank"
                        aria-label="Sosial Media"
                        className="me-3 "
                      >
                        <FaTiktok size={22} color="white" />
                      </Link>
                      <Link
                        to="/"
                        target="_blank"
                        aria-label="Sosial Media"
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
              <h5 className="text-white">Navigasi</h5>
              <div className="d-flex flex-column pt-3">
                <Link
                  className="mb-3 link-offset-2 link-underline link-underline-opacity-0 text-white fs-6"
                  to="/"
                >
                  Beranda
                </Link>
                <Link
                  className="mb-3 link-offset-2 link-underline link-underline-opacity-0 text-white fs-6"
                  to="/"
                >
                  Berita
                </Link>
                <Link
                  className="mb-3 link-offset-2 link-underline link-underline-opacity-0 text-white fs-6"
                  to="/"
                >
                  Program
                </Link>
                <Link
                  className="mb-3 link-offset-2 link-underline link-underline-opacity-0 text-white fs-6"
                  to="/"
                >
                  Podcast
                </Link>
                <Link
                  className="mb-3 link-offset-2 link-underline link-underline-opacity-0 text-white fs-6"
                  to="/"
                >
                  Hubungi Kami
                </Link>
                <Link
                  className="mb-3 link-offset-2 link-underline link-underline-opacity-0 text-white fs-6"
                  to="/"
                >
                  Tentang Kami
                </Link>
                <Link
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
            <p className="text-white">&copy; 2023 SMARTNATION by CITIASIAINC</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterNavigation;
