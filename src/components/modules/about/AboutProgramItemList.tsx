import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MyComponent from '../../MyComponent';

type AboutProgramItemListProps = { programs: ProgramCategory[] };

const AboutProgramItemList: React.FC<AboutProgramItemListProps> = ({
  programs,
}) => {
  return (
    <Row className="justify-content-start g-4 pt-4">
      {programs.map((program) => (
        <Col key={program.id} xl={4} lg={6} md={6}>
          <MyComponent.AboutProgramItem {...program} />
        </Col>
      ))}
    </Row>
  );
};

export default AboutProgramItemList;
