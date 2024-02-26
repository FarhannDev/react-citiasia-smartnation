import React from 'react';
import styles from '@/assets/styles/modules/popular-posts.module.css';
import PopularPostItem from './PopularPostItem';
import { Col, Row } from 'react-bootstrap';

// type Props = {};

const PopularPostItemList = () => {
  return (
    <Row className="justify-content-start">
      <Col>
        <h1 className={styles.popularPostsItemHeading}>Terpopuler</h1>
        <div className="d-flex flex-column pt-3">
          <PopularPostItem />
          <PopularPostItem />
          <PopularPostItem />
          <PopularPostItem />
          <PopularPostItem />
        </div>
      </Col>
    </Row>
  );
};

export default PopularPostItemList;
