import React from 'react';
import { Col, Row } from 'react-bootstrap';
import loadable from '@loadable/component';

const ArticleFigureColumnItem = loadable(() => import('./ArticleColumnItem'));

type ArticleFigureColumnItemListProps = { posts: Posts[] };

const ArticleFigureColumnItemList: React.FC<
  ArticleFigureColumnItemListProps
> = ({ posts }) => {
  return (
    <Row className="justify-content-start g-4">
      {posts?.map((post) => (
        <Col key={post.id} xl={6} lg={6} md={6}>
          <ArticleFigureColumnItem {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default ArticleFigureColumnItemList;
