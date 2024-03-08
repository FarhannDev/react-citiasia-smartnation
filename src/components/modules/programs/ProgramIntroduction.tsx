import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from '@/assets/styles/modules/programs.module.css';
import mascotIcons from '/images/smartnation/icons/sn_icon_event.png';

type ProgramIntroductionProps = {
  progHeading: string | null;
  progDescription: string | null | undefined;
};

const ProgramIntroduction: React.FC<ProgramIntroductionProps> = ({
  progHeading,
  progDescription,
}) => {
  return (
    <Row className="justify-content-start align-items-center g-3">
      <Col xl={4} lg={4} md>
        <LazyLoadImage
          className={styles.programIntroductionImage}
          loading="lazy"
          alt="mascot smartnation"
          effect="blur"
          src={mascotIcons}
        />
      </Col>
      <Col xl={8} lg={12} md={12}>
        <div className={styles.programIntroductionDetails}>
          <h3 className={styles.programIntroductionDetailsHeading}>
            {progHeading}
          </h3>
          <p className={styles.programIntroductionDetailsDescription}>
            {progDescription}
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default ProgramIntroduction;
