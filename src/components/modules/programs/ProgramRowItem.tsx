import React from 'react';
import parse from 'html-react-parser';
import styles from '@/assets/styles/modules/PostsRowItem.module.css';
import { Col, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { postedAt } from '../../../utils/common/generateFormattedDate';

type programRowItemProps = Program;
type CategoryHeadingProps = { catLabel: string | undefined };

const ProgramRowItem: React.FC<programRowItemProps & CategoryHeadingProps> = ({
  id,
  title,
  sourceImageUrl,
  excerpt,
  publishDate,
  catLabel = 'Berita',
}) => {
  const ProgramRowItemWithNoImage = () => {
    return (
      <Row className="justify-content-arround align-items-center g-3">
        <Col>
          <div className={styles.postsRowItemContent}>
            <div className="d-flex justify-content-between align-items-center">
              <div className={styles.postsRowItemContentLabel}>{catLabel}</div>
              <div className={styles.postsRowItemContentDate}>
                {postedAt(publishDate)}
              </div>
            </div>
            <div>
              <Link
                to={`/program/r/${id}`}
                aria-label="Baca selengkapnya"
                className={styles.postsRowItemContentTitle}
              >
                {parse(title)}
              </Link>

              <div className={styles.postsRowItemContentBody}>
                {parse(excerpt)}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  };

  const ProgramRowItemWithImage = () => {
    return (
      <Row className="justify-content-arround align-items-center g-3">
        <Col lg={4} xl={4}>
          <Link to={`/program/r/${id}`} aria-label="Baca selengkapnya">
            <LazyLoadImage
              className={`${styles.postsRowItemImage} img-fluid`}
              alt={title}
              effect="blur"
              src={sourceImageUrl}
            />
          </Link>
        </Col>
        <Col lg={8} xl={8}>
          <div className={styles.postsRowItemContent}>
            <div className="d-flex justify-content-between align-items-center">
              <div className={styles.postsRowItemContentLabel}>{catLabel}</div>
              <div className={styles.postsRowItemContentDate}>
                {postedAt(publishDate)}
              </div>
            </div>
            <div>
              <Link
                to={`/program/r/${id}`}
                aria-label="Baca selengkapnya"
                className={styles.postsRowItemContentTitle}
              >
                {parse(title)}
              </Link>

              <div className={styles.postsRowItemContentBody}>
                {parse(excerpt)}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <div className={styles.postsRowItem}>
      {sourceImageUrl?.length ? (
        <ProgramRowItemWithImage />
      ) : (
        <ProgramRowItemWithNoImage />
      )}
    </div>
  );
};

export default ProgramRowItem;
