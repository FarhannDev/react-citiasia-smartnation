import React from 'react';
import styles from '@/assets/styles/modules/posts.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  FaRegClock,
  FaRegComment,
  FaRegEye,
  FaRegShareSquare,
} from 'react-icons/fa';
import ArticleButtonDetailCategory from '../../../common/button/ArticleButtonDetailCategory';

const PostDetailsItem: React.FC = () => {
  return (
    <div className={styles.postDetailsItem}>
      <h1 className={styles.postDetailsItemHeading}>
        Pemprov Jawa Barat Resmi Rilis Empat Aplikasi Besar untuk ASN
      </h1>

      <div className={styles.postDetailsItemInfo}>
        <div className="d-flex justify-content-start align-items-center g-4">
          <FaRegClock className={`${styles.postDetailsItemInfoDate} me-2`} />
          <div className={styles.postDetailsItemInfoDate}>26 December 2022</div>
        </div>
        <div className="d-flex justify-content-start align-items-center g-4">
          <FaRegComment className={`${styles.postDetailsItemInfoDate} me-2`} />
          <div className={styles.postDetailsItemInfoDate}>0 Komentar</div>
        </div>
        <div className="d-flex justify-content-start align-items-center g-4">
          <FaRegEye className={`${styles.postDetailsItemInfoDate} me-2`} />
          <div className={styles.postDetailsItemInfoDate}>100 kali Dilihat</div>
        </div>
        <div className="d-flex justify-content-start align-items-center g-4">
          <FaRegShareSquare
            className={`${styles.postDetailsItemInfoDate} me-2`}
          />
          <div className={styles.postDetailsItemInfoDate}>Bagikan</div>
        </div>
      </div>

      <LazyLoadImage
        className={`${styles.postDetailsItemImage} img-fluid `}
        alt=""
        effect="blur"
        loading="lazy"
        src="https://s3-alpha-sig.figma.com/img/50e8/b7e3/d01ef7ce9776c225532c958b75f35f9f?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kGsxAD6YhpVlx9ncHyaL4RIC-9F7DWEtSU~S5yNafrRZll3BgBTSP4Fg7m6ge7~jova6V5~lw5j~qNCJ1~SOQhZHifNCxT660OHtldKtbH5m4PgiR7tMoLeAVtA~sr2VE3h3zDA5S13uHe2-y2SXdzChU6UPnAbZLjQkYsT0GJPy2ntt9pHgAv9~63cu7rsiV2GAQi3K9fRNDBGjxbqraFnpykXMIvWP~2SS6I6JxtXv12T4Ca4qixaEjb3imyCNtW95b3OOAYdRjniRzy2i-XshbPK78Sscco9jn8E-NjxGUOs-fN5IWDX6S7xHf3rLx7E3kF90F55l6-2syj97MA__"
      />

      <div className={styles.postDetailsItemBody}>
        <div className={styles.postDetailsItemBodyText}>
          Pemerintah Provinsi Jawa Barat resmi luncurkan Smart Jabar, sebuah
          ekosistem teknologi untuk Jabar yang terdiri dari E–Office, Dashboard
          Jabar dan Jabar Skytrek. Launching aplikasi ini diresmikan langsung
          oleh Sekretaris Daerah Provinsi Jawa Barat, Setiawan Wangsaatmaja,
          bertempat di Jabar Command Center, Gedung Sate, Kota Bandung, Rabu
          (5/4/2023). “Smart Jabar merupakan aplikasi yang dapat mengakses
          berbagai layanan administrasi pemerintahan dengan menggunakan sistem
          Single Sign On untuk mempermudah akses informasi. Hadirnya smart Jabar
          ini berdampak pada peningkatan kualitas layanan bagi internal maupun
          publik dalam mengakses melalui teknologi digital” tutur Ika Mardiah
          selaku Kepala Dinas Komunikasi dan Informatika Jawa Barat. Teknologi
          digitalisasi merupakan salah satu solusi dari permasalahan yang
          dihadapi oleh daerah yang ada di Indonesia. Teknologi di setiap
          masanya pasti berkembang, karena teknologi bersifat dinamis. “Lebih
          baik kita update apa yang kita punya, dibandingkan harus update
          perkembangan baru lagi” papar Setiawan. “Untuk sementara hanya ada dua
          daerah yang tergabung dalam aplikasi smart Jabar, Kabupaten Bandung
          dan Kabupaten Sumedang. Kita akan terus melihat perkembangan di setiap
          daerahnya. Karena, kemajuan suatu daerah dapat dilihat dari penggunaan
          teknologi digitalisasi.” ujarnya. “Pada dua tahun silam, di saat
          situasi pandemic, andai kata pemerintah daerah tidak terbiasa dan
          tidak memiliki inovasi teknologi, kita akan sangat kerepotan dalam
          mengatasi kondisi darurat dalam skala provinsi terbesar di Indonesia”,
          ujar Bedi, Ketua Komisi I DPRD Jawa Barat. Baca Juga Artikel Menarik
          Lainya Disini Langkah Pemerintah Kota Bandung dalam Implementasi Smart
          Tourism Terobosan Diskominfo Jabar biasanya hanya meluncurkan satu
          produk saja, namun kali ini perdana Diskominfo launching empat produk
          sekaligus dalam waktu yang bersamaan. Melalui peresmian ini,
          Diskominfo mendapatkan apresiasi dan dukungan sepenuhnya oleh Komisi I
          DPRD provinsi Jawa Barat. “Teknisnya dari Diskominfo sudah siap,
          makanya kita launching. Kita berupaya capacity building teman-teman
          Diskominfo terus dilakukan. Jadi launching bukan berarti selesai
          segalanya, justru kita memulai dan capacity harus ditingkatkan,”
          tuturnya. Keunggulan dari aplikasi Smart Jabar adalah hanya sekali
          login untuk berbagai aplikasi dengan menggunakan NIP untuk ASN dan NIK
          untuk masyarakat sipil yang ingin mengakses layanan administrasi
          pemerintahan. Selanjutnya, Ekosistem E–Office digunakan untuk
          mengelola pengarsipan dokumen penting pemerintah daerah. Hanya dengan
          menggunakan layanan Ekosistem E–Office, pemerintah Provinsi, Kota dan
          Kabupaten dapat mengakses dokumen dinas secara jarak jauh dan
          memanfaatkan teknologi digital aplikasi e-Office. Sedangkan Dashboard
          Jabar hanya boleh diakses khusus untuk eksekutif. Seperti, Gubernur,
          Wakil Gubernur dan Sekretaris Daerah untuk percepatan proses
          pemerintahan yang berbasiskan data dan pengambilan kebijakan
          pemerintah. Terakhir, Jabar Skytrek disebut bertujuan untuk
          menganalisis data dengan menggunakan sensor dan satelit dalam
          mengimplementasikan “good data, good decision”. Data dari aplikasi
          Skytrek dapat diperoleh secara realtime dan live streaming yang dapat
          diakses langsung oleh masyarakat hanya dengan menggunakan channel
          televisi.
        </div>

        <ArticleButtonDetailCategory />
      </div>
    </div>
  );
};

export default PostDetailsItem;
