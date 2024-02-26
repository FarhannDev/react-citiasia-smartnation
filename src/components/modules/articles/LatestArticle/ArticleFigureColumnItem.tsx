import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Figure } from 'react-bootstrap';
import { HiOutlineClock } from 'react-icons/hi2';
import styles from '@/assets/styles/modules/ArticleFigureColumnItem.module.css';

const ArticleFigureColumnItem = () => {
  return (
    <Figure className={styles.articleFigureColumnItem}>
      <Link to="/" aria-label="Baca selengkapnya">
        <LazyLoadImage
          className={`${styles.articleFigureColumnItemImage} figure img-fluid`}
          alt="171x180"
          loading="lazy"
          effect="blur"
          src="https://s3-alpha-sig.figma.com/img/3d93/1b85/304715f7b435531537db0765fe525ea8?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QhLLdCj2UZ5aCFlI6mL2lDaxj9VxIK-p~Bj0gD6qB21h1u9BnwHucYDZTxRPMPG292lEbrPD-leLdTiDnOg~mAA4HJa9Dj70NQ8kUYoXfw8PJO7XEKImOBOARiqrKl4lja4GF70Xn73VzCQ98yzmexv9ONioWOfcyrVkecKurY8sG6cGnfVZk9R2Tuk4B5Xy7UBmwqghyqg4qSFXrXYL3cVQN-jOmv7XpWyf0LNBtdDGZhEcXlKDiR8xfiAELumT3ZMih7JxXf0B05JUmUWANhw4HKqqhqUrZqUykCkVSodX1DQ2sZogdDNPwW64cBkeDKooDCkuiKp0Dh1TTjaFYg__"
        />
      </Link>

      <Figure.Caption className={styles.articleFigureColumnItemCaption}>
        <div className="d-flex flex-row align-items-center">
          <span className={styles.articleFigureColumnItemCaptionDate}>
            <HiOutlineClock className="me-1" fontSize={16} />
            16 Desember 2022
          </span>
        </div>
        <Link
          to="/"
          aria-label="Baca selengkapnya"
          className={styles.articleFigureColumnItemCaptionTitle}
        >
          Smart Farming: Tingkatkan Pertanian di Indonesia
        </Link>
      </Figure.Caption>
    </Figure>
  );
};

export default ArticleFigureColumnItem;
