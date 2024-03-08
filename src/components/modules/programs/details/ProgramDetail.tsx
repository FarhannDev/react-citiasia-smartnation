import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { program } from '../../../../utils/data/programsData';
import ProgramDetailsItem from './ProgramDetailItem';
import ProgramDetailItemRecomendation from './PrograDetailItemRecomendation';
import ProgramPopulerItemList from '../ProgramPopulerItemList';
import PostDetailsCommentItem from '../../posts/details/PostDetailsCommentItem';

type ProgramDetailProps = { programs: Program | undefined };

const ProgramDetail: React.FC<ProgramDetailProps> = ({ programs }) => {
  const popularProgramData: Program[] = program
    ?.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 5);

  return (
    <Row className="justify-content-start align-content-start g-5">
      <Col xl={8} lg={12}>
        <ProgramDetailsItem program={programs} />
        <ProgramDetailItemRecomendation />
        <PostDetailsCommentItem />
      </Col>
      <Col xl={4} lg={12}>
        <ProgramPopulerItemList
          programs={popularProgramData}
          heading="Terpopuler"
        />
      </Col>
    </Row>
  );
};

export default ProgramDetail;
