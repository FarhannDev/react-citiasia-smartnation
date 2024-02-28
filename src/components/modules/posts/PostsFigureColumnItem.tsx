import React from 'react';
import styles from '@/assets/styles/modules/posts.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const PostsFigureColumnItem: React.FC = () => {
  return (
    <div className={styles.postsFigureColumnItem}>
      <Link to="/" aria-label="Baca selengkapnya">
        <LazyLoadImage
          className={`${styles.postsFigureColumnItemImage} img-fluid`}
          alt=""
          effect="blur"
          src="https://s3-alpha-sig.figma.com/img/50e8/b7e3/d01ef7ce9776c225532c958b75f35f9f?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kGsxAD6YhpVlx9ncHyaL4RIC-9F7DWEtSU~S5yNafrRZll3BgBTSP4Fg7m6ge7~jova6V5~lw5j~qNCJ1~SOQhZHifNCxT660OHtldKtbH5m4PgiR7tMoLeAVtA~sr2VE3h3zDA5S13uHe2-y2SXdzChU6UPnAbZLjQkYsT0GJPy2ntt9pHgAv9~63cu7rsiV2GAQi3K9fRNDBGjxbqraFnpykXMIvWP~2SS6I6JxtXv12T4Ca4qixaEjb3imyCNtW95b3OOAYdRjniRzy2i-XshbPK78Sscco9jn8E-NjxGUOs-fN5IWDX6S7xHf3rLx7E3kF90F55l6-2syj97MA__"
        />
      </Link>

      <div className={styles.postsFigureColumnItemContent}>
        <Link
          to="/"
          aria-label="Baca selengkapnya"
          className={styles.postsFigureColumnItemContentTitle}
        >
          Pemprov Jawa Barat Resmi Rilis Empat Aplikasi Besar untuk ASN
        </Link>

        <div className={styles.postsFigureColumnItemContentBody}>
          Pemerintah Provinsi Jawa Barat resmi luncurkan Smart Jabar, sebuah
          ekosistem teknologi untuk Jabar yang terdiri dari E–Office, Dashboard
          Jabar dan Jabar Skytrek. Launching aplikasi ini diresmikan langsung
          oleh Sekretaris Daerah Provinsi Jawa Barat, Setiawan Wangsaatmaja,
          bertempat di Jabar Command Center, Gedung Sate, Kota Bandung, Rabu
        </div>
      </div>
    </div>
  );
};

export default PostsFigureColumnItem;
