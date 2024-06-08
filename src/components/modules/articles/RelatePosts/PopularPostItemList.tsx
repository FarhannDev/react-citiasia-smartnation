import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MyComponent from '../../../MyComponent';
import styles from '@/assets/styles/modules/popular-posts.module.css';

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
            <MyComponent.PopularPostItem
              key={post.id}
              index={idx + 1}
              {...post}
            />
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default PopularPostItemList;
