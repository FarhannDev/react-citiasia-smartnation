import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Figure } from 'react-bootstrap';
import styles from '@/assets/styles/modules/EventFigureColumnItem.module.css';

// type Props = {};

const EventFigureColumnItem = () => {
  return (
    <Figure className={styles.eventFigureColumnItem}>
      <Link to="/" aria-label="Baca selengkapnya">
        <LazyLoadImage
          className={`${styles.eventFigureColumnItemImage} figure img-fluid`}
          alt="171x180"
          effect="blur"
          loading="lazy"
          src="https://s3-alpha-sig.figma.com/img/8be4/029a/ffe32bf641c9dae627cfbe7dc1724c3a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPn-3DFEikENXumr9Il6q9kkA7VQCDec5-5TZ0-7soeKTtu1J7LygAuZlDwzyITSNIk8TelEvyQZMEbT2Eslj4ToDBFxZHQtbJmYWJ-A2TNzs09L3qJKZUygyX1l9G5nde4JaXEf4-p01JxsQdZFJrnqS3fyvxmopN28Et6ZdJOhwxb~MISx5tgafH0tMa3HDRoTK8s2kHVe4hj4vWNakJKoVW1M9MhuPriPsfl2FacK1R-tWGMOhYCFO9Nf4ufFARksEkiKIA8qMZ7cCwA3TQ9kWapjazOL4KAdqcgOIy83RZBjeYR29tBS2REAzibq60ncQriEVRifHIsd9UKPKA__"
        />
      </Link>
      <Figure.Caption className={styles.eventFigureColumnItemCaption}>
        <div className="d-flex flex-column">
          <h5 className={styles.eventFigureColumnItemCaptionTitle}>
            Implementasi Smart Branding, Tidak Hanya Soal Wisata le{' '}
          </h5>
          <div className={styles.eventFigureColumnItemCaptionContent}>
            Smart branding merupakan salah satu pilar dari pendekatan smart city
            yang memiliki definisi strategi memasarkan sebuah kota atau wilayah
            sehingga mampu menarik ekosistem sekitar, baik itu warga, masyarakat
            umum, ataupun pelaku bisnis.
          </div>
        </div>
      </Figure.Caption>
    </Figure>
  );
};

export default EventFigureColumnItem;
