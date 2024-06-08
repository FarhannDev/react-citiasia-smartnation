import React from 'react';
import styles from '@/assets/styles/modules/posts.module.css';
import MyComponent from '../../../MyComponent';

const PostDetailsCommentItem: React.FC = () => {
  return (
    <div className={styles.postDetailsCommentItem}>
      <div className={styles.postDetailsCommentItemForm}>
        <h3 className={styles.postDetailsCommentItemFormHeading}>
          Komentar (3)
        </h3>
        <MyComponent.PostDetailsCommentItemInput />
      </div>

      <MyComponent.PostDetailsUsersCommentItemList />
    </div>
  );
};

export default PostDetailsCommentItem;
