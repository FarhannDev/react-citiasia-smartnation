import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AboutProgramItem from './AboutProgramItem';

type AboutProgramItemListProps = { programs: ProgramCategory[] };

const AboutProgramItemList: React.FC<AboutProgramItemListProps> = ({
  programs,
}) => {
  return (
    <Row className="justify-content-start g-4 pt-4">
      {programs.map((program) => (
        <Col key={program.id} xl={4} lg={6} md={6}>
          <AboutProgramItem {...program} />
        </Col>
      ))}
    </Row>
  );
};

export default AboutProgramItemList;
