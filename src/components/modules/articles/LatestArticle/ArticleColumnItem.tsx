import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Card } from 'react-bootstrap';
import { HiOutlineClock } from 'react-icons/hi2';
import { postedAt } from '../../../../utils/common/generateFormattedDate';
import styles from '@/assets/styles/modules/ArticleColumnItem.module.css';

type ArticleColumnItemProps = Posts;

const ArticleColumnItem: React.FC<ArticleColumnItemProps> = ({
  slug,
  title,
  content,
  publishDate,
  sourceImageUrl,
}) => {
  return (
    <Card className={styles.articleColumnItem}>
      <Link to={`/posts/read/${slug}`} aria-label="Baca selengkapnya">
        <LazyLoadImage
          alt={title}
          loading="lazy"
          effect="blur"
          className="img-fluid"
          src={sourceImageUrl}
        />
      </Link>
      <Card.Body className="px-0 mx-0">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row align-items-center">
            <span className={styles.articleColumnItemDate}>
              <HiOutlineClock className="me-1" fontSize={16} />
              {postedAt(publishDate)}
            </span>
          </div>
          <Link
            to={`/posts/read/${slug}`}
            aria-label="Baca selengkapnya"
            className={styles.articleColumnItemTitle}
          >
            {parse(title)}
          </Link>
          <div className={styles.articleColumnItemContent}>
            {parse(content)}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ArticleColumnItem;
