import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FiHome } from 'react-icons/fi';
import LogoError from '/images/smartnation/icons/sn_icon_emptypage.png';
import styles from '@/assets/styles/modules/error.module.css';

type NotFoundProps = {
  title?: string;
  sourceImage?: string;
};

const NotFound: React.FC<NotFoundProps> = ({
  title = 'Halaman tidak ditemukan.',
  sourceImage = LogoError,
}) => {
  const navigate = useNavigate();

  const handleClickButton = () => navigate('/');

  return (
    <>
      <div className={styles.errorPageItem}>
        <LazyLoadImage
          alt="sn_icon_emptypage"
          effect="blur"
          src={sourceImage}
          className={styles.errorPageItemImage}
        />

        <div className={styles.errorPageItemHeading}>404</div>
        <div className={styles.errorPageItemHeading}>{title}</div>
        <div className={styles.errorPageItemAction}>
          <button
            onClick={handleClickButton}
            type="button"
            className={`btn btn-danger ${styles.errorPageItemActionButton}`}
          >
            <div className="d-flex justify-content-start g-3 align-items-center">
              <span className="me-2"> Ke Halaman Utama</span>
              <FiHome fontSize={16} />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
