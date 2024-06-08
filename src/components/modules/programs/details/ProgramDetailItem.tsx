import React from 'react';
import styles from '@/assets/styles/modules/PostDetailsItem.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  FaRegClock,
  FaRegComment,
  FaRegEye,
  FaRegShareSquare,
} from 'react-icons/fa';
import parse from 'html-react-parser';
import { postedAt } from '../../../../utils/common/generateFormattedDate';

type ProgramDetailsItemProps = { program: Program | undefined };

const ProgramDetailsItem: React.FC<ProgramDetailsItemProps> = ({ program }) => {
  return (
    <div className={styles.postDetailsItem}>
      <h1 className={styles.postDetailsItemHeading}>{program?.title}</h1>

      <div className={styles.postDetailsItemInfo}>
        <div className="d-flex justify-content-start align-items-center g-4">
          <FaRegClock className={`${styles.postDetailsItemInfoDate} me-2`} />
          <div className={styles.postDetailsItemInfoDate}>
            {postedAt(program?.publishDate ? program.publishDate : '')}
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center g-4">
          <FaRegComment className={`${styles.postDetailsItemInfoDate} me-2`} />
          <div className={styles.postDetailsItemInfoDate}>0 Komentar</div>
        </div>
        <div className="d-flex justify-content-start align-items-center g-4">
          <FaRegEye className={`${styles.postDetailsItemInfoDate} me-2`} />
          <div className={styles.postDetailsItemInfoDate}>
            {program?.views} kali Dilihat
          </div>
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
        alt={program?.title}
        effect="blur"
        loading="lazy"
        src={program?.sourceImageUrl}
      />

      <div className={styles.postDetailsItemBody}>
        <div className={styles.postDetailsItemBodyText}>
          {parse(program?.content ? program.content : '')}
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailsItem;
