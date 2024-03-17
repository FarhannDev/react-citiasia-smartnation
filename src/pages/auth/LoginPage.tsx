import { Col, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AuthLayout from '../../layouts/AuthLayout';
import styles from '@/assets/styles/modules/auth.module.css';
import LogoMascot from '/images/smartnation/icons/sn_icon_mascot.png';
import MyComponent from '../../components/MyComponent';

const LoginPage = () => {
  return (
    <AuthLayout>
      <div className={styles.authCardItem}>
        <Row className="justify-content-start align-self-center  align-items-centerg-5">
          <Col
            lg={12}
            xl={6}
            md={12}
            className="d-flex justify-content-center mx-auto"
          >
            <LazyLoadImage
              alt="Logo Mascot"
              effect="blur"
              width={250}
              src={LogoMascot}
              className={styles.authItemImage}
            />
          </Col>

          <Col lg={12} xl={6} md={12} className="d-flex flex-column mb-4">
            <div className={styles.authItemHeading}>
              Citiasia Center for Smart Nation (CCSN)
            </div>
            <div className={styles.authItemSubHeading}>
              Selamat datang, Silahkan isi data di bawah untuk dapat login ke
              akun Anda
            </div>

            <MyComponent.AuthLoginInput />
          </Col>
        </Row>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
