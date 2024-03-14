import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { program } from '../../../../utils/data/programsData';
import PostDetailsCommentItem from '../../posts/details/PostDetailsCommentItem';
import MyComponent from '../../../MyComponent';

type ProgramDetailProps = { programs: Program | undefined };

const ProgramDetail: React.FC<ProgramDetailProps> = ({ programs }) => {
  const popularProgramData: Program[] = program
    ?.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 5);

  return (
    <Row className="justify-content-start align-content-start g-5">
      <Col xl={8} lg={12}>
        <MyComponent.ProgramDetailsItem program={programs} />
        <MyComponent.ProgramDetailItemRecomendation />
        <PostDetailsCommentItem />
      </Col>
      <Col xl={4} lg={12}>
        <MyComponent.ProgramPopulerItemList
          programs={popularProgramData}
          heading="Terpopuler"
        />
      </Col>
    </Row>
  );
};

export default ProgramDetail;
