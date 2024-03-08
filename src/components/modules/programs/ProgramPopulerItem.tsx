import { Link } from 'react-router-dom';
import styles from '@/assets/styles/modules/popular-posts.module.css';
import React from 'react';

type ProgramPopulerItemProps = Program;
type IncrementProps = { index: number };

const ProgramPopulerItem: React.FC<
  ProgramPopulerItemProps & IncrementProps
> = ({ id, title, index }) => {
  return (
    <div className={styles.popularPostsItem}>
      <div className="d-flex justify-content-start align-items-center g-3">
        <div className={styles.popularPostsItemStart}>0{index}</div>
        <div>
          <Link
            className={styles.popularPostsItemTitle}
            to={`/program/r/${id}`}
            aria-label="Baca selengkapnya"
          >
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramPopulerItem;
