import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PostDetailsCommentItem from './PostDetailsCommentItem';
import PostDetailsItem from './PostDetailsItem';
import PopularPostItemList from '../../articles/RelatePosts/PopularPostItemList';
import PostDetailsItemRecomendation from './postDetailsItemRecomendation';
import { posts } from '../../../../utils/data/postsData';

type PostsDetailsProps = { post: Posts | undefined };

const PostsDetails: React.FC<PostsDetailsProps> = ({ post }) => {
  const popularPostData: Posts[] = posts
    ?.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 5);

  return (
    <Row className="justify-content-start align-content-start g-5">
      <Col xl={8} lg={12}>
        <PostDetailsItem post={post} />
        <PostDetailsItemRecomendation />
        <PostDetailsCommentItem />
      </Col>
      <Col xl={4} lg={12}>
        <PopularPostItemList posts={popularPostData} heading="Terpopuler" />
      </Col>
    </Row>
  );
};

export default PostsDetails;
