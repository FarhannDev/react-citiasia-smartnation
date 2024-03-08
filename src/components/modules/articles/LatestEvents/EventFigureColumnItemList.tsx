import React from 'react';
import { Col, Row } from 'react-bootstrap';
import loadable from '@loadable/component';

const EventFigureColumnItem = loadable(() => import('./EventFigureColumnItem'));

type EventFigureColumnItemListProps = { posts: Posts[] };

const EventFigureColumnItemList: React.FC<EventFigureColumnItemListProps> = ({
  posts,
}) => {
  return (
    <Row className="justify-content-start g-4 pt-4">
      {posts.map((post) => (
        <Col key={post.id} xl={4} lg={4} md={12}>
          <EventFigureColumnItem {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default EventFigureColumnItemList;
