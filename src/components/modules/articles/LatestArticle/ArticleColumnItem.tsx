import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Card } from 'react-bootstrap';
import { HiOutlineClock } from 'react-icons/hi2';

import styles from '@/assets/styles/modules/ArticleColumnItem.module.css';
// import '@/assets/styles/latest-article.css';

type Props = {
  title: string;
  content: string;
  date: string;
  categories: string[];
  images: string;
  slug: string;
};

const ArticleColumnItem = ({ title, content, date, images, slug }: Props) => {
  return (
    <Card className={styles.articleColumnItem}>
      <Link to="/" aria-label="Baca selengkapnya">
        <LazyLoadImage
          alt=""
          loading="lazy"
          effect="blur"
          className="img-fluid"
          src={images}
        />
      </Link>
      <Card.Body className="px-0 mx-0">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row align-items-center">
            <span className={styles.articleColumnItemDate}>
              <HiOutlineClock className="me-1" fontSize={16} />
              {date}
            </span>
          </div>
          <Link
            to={slug}
            aria-label="Baca selengkapnya"
            className={styles.articleColumnItemTitle}
          >
            {title}
          </Link>
          <div className={styles.articleColumnItemContent}>{content}</div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ArticleColumnItem;
