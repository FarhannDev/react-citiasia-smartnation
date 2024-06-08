import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import styles from '@/assets/styles/modules/pagination.module.css';

const PaginationButton: React.FC = () => {
  return (
    <>
      <Pagination className={styles.paginationItem}>
        <Pagination.Prev
          className={`${styles.paginationItem} ${styles.paginationItemPrev}`}
        />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    </>
  );
};

export default PaginationButton;
