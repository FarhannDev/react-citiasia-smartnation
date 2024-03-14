import React from 'react';
import styles from '@/assets/styles/modules/podcasts.module.css';
import MyComponent from '../../MyComponent';

// type PodcastPopulerItemListProps = {};

const PodcastPopulerItemList: React.FC = () => {
  return (
    <>
      <h3 className={styles.podcastSmartnationHeading}>Terpopular</h3>
      <div className="d-flex flex-column pt-4">
        <MyComponent.PodcastPopulerItem />
        <MyComponent.PodcastPopulerItem />
        <MyComponent.PodcastPopulerItem />
        <MyComponent.PodcastPopulerItem />
        <MyComponent.PodcastPopulerItem />
        <MyComponent.PodcastPopulerItem />
        <MyComponent.PodcastPopulerItem />
        <MyComponent.PodcastPopulerItem />
        <MyComponent.PodcastPopulerItem />
      </div>
    </>
  );
};

export default PodcastPopulerItemList;
