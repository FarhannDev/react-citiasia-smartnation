import { Col, Row } from 'react-bootstrap';
import styles from '@/assets/styles/modules/popular-posts.module.css';
import React from 'react';
import loadable from '@loadable/component';

const PopularPostItem = loadable(() => import('./PopularPostItem'));

type PopularPostItemListProps = {
  heading: string;
  posts: Posts[];
};

const PopularPostItemList: React.FC<PopularPostItemListProps> = ({
  heading,
  posts,
}) => {
  return (
    <Row className="justify-content-start">
      <Col>
        <h1 className={styles.popularPostsItemHeading}>{heading}</h1>
        <div className="d-flex flex-column pt-3">
          {posts?.map((post, idx) => (
            <PopularPostItem key={post.id} index={idx + 1} {...post} />
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default PopularPostItemList;
