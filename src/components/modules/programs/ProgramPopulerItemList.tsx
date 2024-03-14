import { Col, Row } from 'react-bootstrap';
import styles from '@/assets/styles/modules/popular-posts.module.css';
import React from 'react';
import MyComponent from '../../MyComponent';

type ProgramPopulerItemListProps = {
  heading: string;
  programs: Program[];
};

const ProgramPopulerItemList: React.FC<ProgramPopulerItemListProps> = ({
  heading,
  programs,
}) => {
  return (
    <Row className="justify-content-start">
      <Col>
        <h1 className={styles.popularPostsItemHeading}>{heading}</h1>
        <div className="d-flex flex-column pt-3">
          {programs?.map((program, idx) => (
            <MyComponent.ProgramPopulerItem
              key={program.id}
              index={idx + 1}
              {...program}
            />
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default ProgramPopulerItemList;
