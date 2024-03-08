import React from 'react';
import PodcastPopulerItem from './PodcastPopulerItem';
import styles from '@/assets/styles/modules/podcasts.module.css';

// type PodcastPopulerItemListProps = {};

const PodcastPopulerItemList: React.FC = () => {
  return (
    <>
      <h3 className={styles.podcastSmartnationHeading}>Terpopular</h3>
      <div className="d-flex flex-column pt-4">
        <PodcastPopulerItem />
        <PodcastPopulerItem />
        <PodcastPopulerItem />
        <PodcastPopulerItem />
        <PodcastPopulerItem />
        <PodcastPopulerItem />
        <PodcastPopulerItem />
        <PodcastPopulerItem />
        <PodcastPopulerItem />
      </div>
    </>
  );
};

export default PodcastPopulerItemList;
