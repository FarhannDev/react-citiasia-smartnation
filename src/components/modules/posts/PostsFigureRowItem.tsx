import React from 'react';
import styles from '@/assets/styles/modules/posts.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const PostsFigureRowItem: React.FC = () => {
  return (
    <div className={styles.postsFigureRowItem}>
      <div className="d-flex flex-row justify-content-start align-items-start">
        <LazyLoadImage
          className={styles.postsFigureRowItemImage}
          alt=""
          effect="blur"
          src="https://s3-alpha-sig.figma.com/img/98ad/e680/4683fb8d9ddc3a5c5f5a3cddcb568f44?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ov8AFvLAzqdcJzaM5dBNBKmiLoquPcZqpB98jkvvLLgCCMtOVdsuQeooZHJyEes4qJpPCH5VlFL4C2QiyHQRI0i9cq4c9WZLKLX~UsB0t30rmzvmH7M~H6ueLyFhYFL6F9cdxlKUvELjFPym~rEzvi5YtkL1UDN~215Sqi7Ou6E01be~ECyjkJP4EPSffGlanOwVavcnN3fMDsQ3TGmBYmSsJB60ctcjkc~agusqFCixMnBKxTi9VfvX5efXasNyVSjUH0nRZu526yE2oVSiO5JEA-Mh~CKAOBumjSEsWjx-I84T28jVWylaMNQ9T~lVxVRn74JLCBrI1T74eMaefA__"
        />

        <div className={styles.postsFigureRowItemContent}>
          <div className={styles.postsFigureRowItemContentLabel}>Berita</div>
          <div>
            <Link
              to="/"
              aria-label="Baca selengkapnya"
              className={styles.postsFigureRowItemContentTitle}
            >
              Smart Farming: Tingkatkan Pertanian di Indonesia
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsFigureRowItem;
