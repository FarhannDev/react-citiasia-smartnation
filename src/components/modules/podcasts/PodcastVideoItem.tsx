import React from 'react';
import styles from '@/assets/styles/modules/podcasts.module.css';
import { Ratio } from 'react-bootstrap';

type PodcastVideoItemProps = {
  videos: string;
};

const PodcastVideoItem: React.FC<PodcastVideoItemProps> = ({ videos }) => {
  return (
    <>
      <div className={styles.podcastVideo}>
        <Ratio aspectRatio="16x9">
          <video
            controls
            autoPlay
            color="#fff"
            className={styles.podcastVideoSource}
          >
            <source src={videos} type="video/mp4" />
            <source src={videos} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </Ratio>
      </div>
    </>
  );
};

export default PodcastVideoItem;
