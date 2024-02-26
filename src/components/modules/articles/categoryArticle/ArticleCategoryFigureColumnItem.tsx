import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Figure } from 'react-bootstrap';
import { HiOutlineClock } from 'react-icons/hi2';
import styles from '@/assets/styles/modules/ArticleCategoryFigureColumnItem.module.css';
import ArticleButtonCategory from '../../../common/button/ArticleButtonCategory';

const ArticleCategoryFigureColumnItem = () => {
  return (
    <div className={styles.articleCategoryFigureColumnItem}>
      <div className="row justify-content-start g-lg-4 g-0">
        <div className="col-xl-6 col-lg-6 col-md-auto">
          <Figure className={styles.articleCategoryFigureColumnItemContainer}>
            <Link to="/" aria-label="Baca selengkapnya">
              <LazyLoadImage
                className={`${styles.articleCategoryFigureColumnItemImage} figure img-fluid `}
                loading="lazy"
                alt="171x180"
                effect="blur"
                src="https://s3-alpha-sig.figma.com/img/7413/1e7a/6c29dbbdf04b8bc24f703ca04d4e6f21?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sdki6Sq2Tol8isg-rXbPu-rZdWr7UzUBtrTKL2DqVC-XYvSCS3jYqjdMdXy2wLvzjfjKHGSu3957VpXOI~tdhcPVjirwYfxHd5TSfwcCSmmwBvYCPQ9Fvd~wyTeA3RhixKXthRXgtRiXCXoHeLlxPprox4NmrEefyQ9Tg4cAkYfyEnWfy7LKH0pGjiOxNjDkUYUV3y3x8SWKrwhhSGh6R09znMrylBts8G~VH-8REl4sdd3tY20QO6wU3KbaNiZIJQ1jsw4U8A5HKSOfeMj~WDTXC3aF3Mw7iwymJLuRw9qflQBrrggx3SQZlL~TQ3q-1-79Qk5Qdhx6P9-m~3z6uQ__"
              />
            </Link>
          </Figure>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-auto">
          <div className={styles.articleCategoryFigureColumnItemBody}>
            <Link
              to="/"
              aria-label="Baca selengkapnya"
              className={styles.articleCategoryFigureColumnItemBodyTitle}
            >
              Gunakan Teknologi RFID Untuk Mendeteksi Plat Nomor Kendaraan
            </Link>

            <div className="d-flex flex-row align-items-center">
              <span
                className={
                  styles.articleCategoryFigureColumnItemBodyContentDate
                }
              >
                <HiOutlineClock className="me-1" fontSize={14} />
                16 Desember 2022
              </span>
            </div>

            <div className={styles.articleCategoryFigureColumnItemBodyContent}>
              Radio Frequency Identification (RFID) merupakan alat pendeteksi
              kendaraan dengan signal pada plat nomor kendaraan. Sistem ini
              digunakan oleh Polri sebagai upaya implementasi smart city serta
              mengantisipasi pengendara yang melepas plat nomor untuk
              menghindari tilang elektronik atau Electronic Traffic Law
              Enforcement (ETLE).
            </div>

            <ArticleButtonCategory />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-start g-3"></div>
    </div>
  );
};

export default ArticleCategoryFigureColumnItem;
