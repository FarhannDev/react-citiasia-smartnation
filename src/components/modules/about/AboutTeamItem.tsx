import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Figure } from 'react-bootstrap';
import styles from '@/assets/styles/modules/about.module.css';

interface AboutTeamItemProps {
  name: string;
  jobs: string;
  introduction: string;
  sourceImageUrl: string;
}

function AboutTeamItem({
  name,
  jobs,
  introduction,
  sourceImageUrl,
}: AboutTeamItemProps) {
  return (
    <Figure className="mb-5">
      <LazyLoadImage
        alt={name}
        effect="blur"
        src={sourceImageUrl}
        className={`${styles.sectionAboutSmartnationTeamProfileImage} img-fluid`}
      />
      <Figure.Caption>
        <div className="d-flex flex-column pt-3">
          <div className={styles.sectionAboutSmartnationTeamProfileName}>
            {name}
          </div>
          <div className={styles.sectionAboutSmartnationTeamProfileJob}>
            {jobs}
          </div>
          <div className={styles.sectionAboutSmartnationTeamProfileDescription}>
            {introduction}
          </div>
        </div>
      </Figure.Caption>
    </Figure>
  );
}

export default AboutTeamItem;
