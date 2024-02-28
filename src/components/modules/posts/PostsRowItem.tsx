import React from 'react';
import styles from '@/assets/styles/modules/posts.module.css';
import { Col, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const PostsRowItem: React.FC = () => {
  return (
    <div className={styles.postsRowItem}>
      <Row className="justify-content-arround align-items-center g-3">
        <Col lg={4} xl={4}>
          <Link to="/" aria-label="Baca selengkapnya">
            <LazyLoadImage
              className={`${styles.postsRowItemImage} img-fluid`}
              alt=""
              effect="blur"
              src="https://s3-alpha-sig.figma.com/img/1004/b947/a582c295ad055574fe8f6202ac1c54cb?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZzmjTqkrzvbnDBdnekO8LB95t3FaPCtouwkn~nVjCHykwGpWn5aS3hPsVodbUD59OTni6kKezoi0QGRSofp9Kw9spJ4aRlHCBMJUW73~4h7~7mwEX3578m8Es2JVU9RM~CrRU1I9O3KHRZYBm~~Zyq5x~JTh2Vsrah9DrMuQgSL7Mr3AxvcZA8VpjK~zE5TVM4WQuHfEbAX9DxeqakHtT3rpPN-OwssKMDTWVwAkV7ykPCu156GTxc0UY~Caqfqj6edkXoIVbl35MO8a4iDvoE4ncuJgI3rAJ1MS9pjvpUh9sqqmDDfTOHYvN2SsfALA7MrvdxJsZD2FaHDR8l7pPw__"
            />
          </Link>
        </Col>
        <Col lg={8} xl={8}>
          <div className={styles.postsRowItemContent}>
            <div className="d-flex justify-content-between align-items-center">
              <div className={styles.postsRowItemContentLabel}>Berita</div>
              <div className={styles.postsRowItemContentDate}>
                8 jam yang lalu
              </div>
            </div>
            <div>
              <Link
                to="/"
                aria-label="Baca selengkapnya"
                className={styles.postsRowItemContentTitle}
              >
                KPK ingin Menekan Korupsi dengan Digitalisasi Sistem
                Pemerintahan
              </Link>

              <div className={styles.postsRowItemContentBody}>
                Johanis Tanak, Wakil Ketua Komisi Pemberantasan Korupsi (KPK)
                Republik Indonesia menyebutkan bahwa pelayanan publik masih
                menjadi salah satu sektor yang masih rentan korupsi di
                lingkungan pemerintah pusat atau daerah.
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PostsRowItem;
