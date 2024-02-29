import React from 'react';
import styles from '@/assets/styles/modules/posts.module.css';
import PostDetailsCommentItemInput from './PostDetailsCommentItemInput';
import PostDetailsUsersCommentItemList from './PostDetailsUsersCommentItemList';

const PostDetailsCommentItem: React.FC = () => {
  return (
    <div className={styles.postDetailsCommentItem}>
      <div className={styles.postDetailsCommentItemForm}>
        <h3 className={styles.postDetailsCommentItemFormHeading}>
          Komentar (3)
        </h3>
        <PostDetailsCommentItemInput />
      </div>

      <PostDetailsUsersCommentItemList />
    </div>
  );
};

export default PostDetailsCommentItem;
