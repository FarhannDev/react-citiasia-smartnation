import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { posts } from '../../../../utils/data/postsData';
import MyComponent from '../../../MyComponent';

type PostsDetailsProps = { post: Posts | undefined };

const PostsDetails: React.FC<PostsDetailsProps> = ({ post }) => {
  const popularPostData: Posts[] = posts
    ?.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 5);

  return (
    <Row className="justify-content-start align-content-start g-5">
      <Col xl={8} lg={12}>
        <MyComponent.PostDetailsItem post={post} />
        <MyComponent.PostDetailsItemRecomendation />
        <MyComponent.PostDetailsCommentItem />
      </Col>
      <Col xl={4} lg={12}>
        <MyComponent.PopularPostItemList
          posts={popularPostData}
          heading="Terpopuler"
        />
      </Col>
    </Row>
  );
};

export default PostsDetails;
