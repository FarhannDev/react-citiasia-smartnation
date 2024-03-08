import React from 'react';
import parse from 'html-react-parser';
import styles from '@/assets/styles/modules/about.module.css';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

type AboutProgramItemProps = ProgramCategory;

const AboutProgramItem: React.FC<AboutProgramItemProps> = ({
  slug,
  name,
  description,
}) => {
  return (
    <div className={styles.aboutProgramItem}>
      <div className={styles.aboutProgramItemBody}>
        <LazyLoadImage
          alt="sn_icon_mascot.png"
          src="/images/smartnation/icons/sn_icon_mascot.png"
          className={`${styles.aboutProgramItemBodyImageMascot} img-fluid`}
        />

        <h3 className={styles.aboutProgramItemBodyHeading}>{parse(name)}</h3>
        <div className={styles.aboutProgramItemBodyDescription}>
          {parse(description)}
        </div>
        <div className={styles.aboutProgramItemBodyAction}>
          <Link
            to={`/program/${slug}`}
            aria-label="Selengkapnya"
            className={`${styles.aboutProgramItemBodyActionBtn} btn`}
          >
            Selengkapnya <HiOutlineArrowUpRight color="fff" fontSize={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutProgramItem;
