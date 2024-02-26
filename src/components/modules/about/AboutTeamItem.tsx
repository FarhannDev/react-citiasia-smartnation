import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Figure } from 'react-bootstrap';
import styles from '@/assets/styles/modules/about.module.css';

type AboutTeamItemProps = {
  name: string;
  jobTitle: string;
  description: string;
  sourceImage: string;
};

const AboutTeamItem = ({
  name,
  jobTitle,
  description,
  sourceImage,
}: AboutTeamItemProps) => {
  return (
    <Figure className="mb-5">
      <LazyLoadImage
        className={`${styles.sectionAboutSmartnationTeamProfileImage} figure-img img-fluid`}
        alt={name}
        loading="lazy"
        effect="blur"
        src={sourceImage}
      />
      <Figure.Caption>
        <div className="d-flex flex-column">
          <div className={styles.sectionAboutSmartnationTeamProfileName}>
            {name}
          </div>
          <div className={styles.sectionAboutSmartnationTeamProfileJob}>
            {jobTitle}
          </div>
          <div className={styles.sectionAboutSmartnationTeamProfileDescription}>
            {description}
          </div>
        </div>
      </Figure.Caption>
    </Figure>
  );
};

export default AboutTeamItem;
