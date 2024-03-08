import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PodcastRowItem from './PodcastRowItem';

// type PodcastRowItemListProps = {
//   podcasts: Podcasts[];
// };

const PodcastRowItemList: React.FC = () => {
  return (
    <>
      <Row className="justify-content-start align-content-start g-4">
        <Col lg={6} xl={6} md={12}>
          <PodcastRowItem />
        </Col>
        <Col lg={6} xl={6} md={12}>
          <PodcastRowItem />
        </Col>
        <Col lg={6} xl={6} md={12}>
          <PodcastRowItem />
        </Col>
        <Col lg={6} xl={6} md={12}>
          <PodcastRowItem />
        </Col>
        <Col lg={6} xl={6} md={12}>
          <PodcastRowItem />
        </Col>
        <Col lg={6} xl={6} md={12}>
          <PodcastRowItem />
        </Col>
        <Col lg={6} xl={6} md={12}>
          <PodcastRowItem />
        </Col>
        <Col lg={6} xl={6} md={12}>
          <PodcastRowItem />
        </Col>
      </Row>
    </>
  );
};

export default PodcastRowItemList;
