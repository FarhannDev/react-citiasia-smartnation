import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Figure } from 'react-bootstrap';
import styles from '@/assets/styles/modules/EventFigureColumnItem.module.css';
import React from 'react';
import parse from 'html-react-parser';

type EventFigureColumnItemProps = Posts;

const EventFigureColumnItem: React.FC<EventFigureColumnItemProps> = ({
  slug,
  title,
  excerpt,
  sourceImageUrl,
}) => {
  return (
    <Figure className={styles.eventFigureColumnItem}>
      <Link to={`/${slug}`} aria-label="Baca selengkapnya">
        <LazyLoadImage
          className={`${styles.eventFigureColumnItemImage} figure img-fluid`}
          alt="171x180"
          effect="blur"
          loading="lazy"
          src={sourceImageUrl}
        />
      </Link>
      <Figure.Caption className={styles.eventFigureColumnItemCaption}>
        <div className="d-flex flex-column">
          <h5 className={styles.eventFigureColumnItemCaptionTitle}>{title} </h5>
          <div className={styles.eventFigureColumnItemCaptionContent}>
            {parse(excerpt)}
          </div>
        </div>
      </Figure.Caption>
    </Figure>
  );
};

export default EventFigureColumnItem;
