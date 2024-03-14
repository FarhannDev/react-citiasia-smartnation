import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Figure } from 'react-bootstrap';
import { HiOutlineClock } from 'react-icons/hi2';
import { postedAt } from '../../../../utils/common/generateFormattedDate';
import styles from '@/assets/styles/modules/ArticleFigureColumnItem.module.css';

type ArticleFigureColumnItemProps = Posts;

const ArticleFigureColumnItem: React.FC<ArticleFigureColumnItemProps> = ({
  slug,
  title,
  sourceImageUrl,
  publishDate,
}) => {
  return (
    <Figure className={styles.articleFigureColumnItem}>
      <Link to={`/${slug}`} aria-label="Baca selengkapnya">
        <LazyLoadImage
          className={`${styles.articleFigureColumnItemImage}  img-fluid`}
          alt={title}
          effect="blur"
          src={sourceImageUrl}
        />
      </Link>

      <Figure.Caption className={styles.articleFigureColumnItemCaption}>
        <div className="d-flex flex-row align-items-center">
          <span className={styles.articleFigureColumnItemCaptionDate}>
            <HiOutlineClock className="me-1" fontSize={16} />
            {postedAt(publishDate)}
          </span>
        </div>
        <Link
          to={`/${slug}`}
          aria-label="Baca selengkapnya"
          className={styles.articleFigureColumnItemCaptionTitle}
        >
          {parse(title)}
        </Link>
      </Figure.Caption>
    </Figure>
  );
};

export default ArticleFigureColumnItem;
