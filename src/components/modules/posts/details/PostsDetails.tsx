import { Col, Row } from 'react-bootstrap';
import PostDetailsCommentItem from './PostDetailsCommentItem';
import PostDetailsItem from './PostDetailsItem';
import PopularPostItemList from '../../articles/RelatePosts/PopularPostItemList';
import PostDetailsItemRecomendation from './postDetailsItemRecomendation';

const PostsDetails = () => {
  return (
    <Row className="justify-content-start align-content-start g-5">
      <Col xl={8} lg={12}>
        <PostDetailsItem />
        <PostDetailsItemRecomendation />
        <PostDetailsCommentItem />
      </Col>
      <Col xl={4} lg={12}>
        <PopularPostItemList />
      </Col>
    </Row>
  );
};

export default PostsDetails;
