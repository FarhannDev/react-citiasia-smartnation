import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '@/assets/styles/modules/ArticleCategoryRowItem.module.css';

const ArticleCategoryRowItem = () => {
  return (
    <div className={styles.articleCategoryRowItem}>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-row">
          <div className={styles.articleCategoryRowItemStart}>01</div>
          <Link
            className={styles.articleCategoryRowItemTitle}
            to="/"
            aria-label="Baca selengkapnya"
          >
            Talkshow ISNA 2022: Implementasi Smart City Bagi Kemajuan Indonesia
            Bersama PEMDA
          </Link>
        </div>
        <div>
          <LazyLoadImage
            alt=""
            effect="blur"
            loading="lazy"
            className={styles.articleCategoryRowItemImage}
            src="https://s3-alpha-sig.figma.com/img/e0ec/d24d/c57a2b959ad326f85ab3e65f6d2186fb?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1Yotbh6NlQOVrW5d0yYjpqpzU3FucnIWkB-vPkY7QcZ2lgg14OvsLf-DmyDqM4Sqp4~KcZyNPpRsYptkYNFsYcvPEb9vyyF-nzT4IQAqkM~gB9z2-IXsW7FyLWacwnd2WTgYDjBI~lxFqOJ7NGB8wbpyj2ZneNanKqgAd4DCK6r4yIAE7K4d2ko~0FMscf8mZhTXFNIRLHihzucXX8azLrHj~d6PT-TYAwUX9li0E3fTNDcndKrhTGiUew~dR9Js18eWKnXK5hnHS7PdiusicRUBLodQvn4~whID-L9AUG-H8U69ShhNB3BizobQ21iKhXvFM6dOor3pr2BEy31aA__"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleCategoryRowItem;
