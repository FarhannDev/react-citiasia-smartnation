import { Col, Row } from 'react-bootstrap';
import ArticleCategoryFigureColumnItem from './ArticleCategoryFigureColumnItem';
import PopularPostItemList from '../RelatePosts/PopularPostItemList';

type ArticleCategoryFigureColumnItemListProps = { posts: Posts[] };

const ArticleCategoryFigureColumnItemList = ({
  posts,
}: ArticleCategoryFigureColumnItemListProps) => {
  return (
    <Row className="justify-content-start g-5 py-5">
      <Col xl={8} lg={12} md={12}>
        {posts.slice(0, 5).map((post) => (
          <ArticleCategoryFigureColumnItem key={post.id} {...post} />
        ))}
      </Col>

      <Col xl={4} lg={12} md={12}>
        <PopularPostItemList
          posts={posts.sort().reverse().slice(0, 10)}
          heading="Seputar citiasia inc"
        />
      </Col>
    </Row>
  );
};

export default ArticleCategoryFigureColumnItemList;
