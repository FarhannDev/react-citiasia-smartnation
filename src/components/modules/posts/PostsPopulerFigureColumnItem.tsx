import React from 'react';
import styles from '@/assets/styles/modules/posts.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const PostsPopulerFigureColumnItem: React.FC = () => {
  return (
    <div className={styles.postsPopulerFigureColumnItem}>
      <Link to="/" aria-label="Baca selengkapnya">
        <LazyLoadImage
          className={`${styles.postsPopulerFigureColumnItemImage} img-fluid`}
          alt=""
          effect="blur"
          src="https://s3-alpha-sig.figma.com/img/3478/ba9d/5d27624778d7d8c1ee8eb4ce13bf47f5?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BxCmuyiu6eCPRofH2nplK0Uiqglm4~Q9LWCqUhuZwrl-PBNuyLCVazhd4tOrRK4kb1cd0~3XMtnQBXyXLBSh-layOyPJgVvs~h3KgmH8LOY6Tln0TJPSiulu7oVrQTv1~8nfmxTeIjGLeD2628CoWLrH7Dd3nfDNRF4Fp71UcdaS~oqgO39IyX8Mq2YJQEEi1t7MRS1MmbhKFJ1g5DszhR6ktJnAs3FU-Dltzzwg9zUjjjIeUGHH7zeXuIn8huMsjgtYhgbQ1styDHNmGK6x2IcDvNZutwrf14626jQvkBaEC-9tInof9exkaN49ep~aioPcne5Mi7TSqEVpbsAMZw__"
        />
      </Link>

      <div className={styles.postsPopulerFigureColumnItemContent}>
        <div className="d-flex justify-content-between align-items-center g-3 mb-2">
          <div className={styles.postsPopulerFigureColumnItemContentLabel}>
            Berita
          </div>
          <div className={styles.postsPopulerFigureColumnItemContentDate}>
            May 29, 2017
          </div>
        </div>

        <Link
          to="/"
          aria-label="Baca selengkapnya"
          className={styles.postsPopulerFigureColumntemContentTitle}
        >
          Tingkatkan SDM Daerah Melalui Seminar Smart City 2022
        </Link>
      </div>
    </div>
  );
};

export default PostsPopulerFigureColumnItem;
