import styles from '@/assets/styles/modules/PostDetailsUsersCommentItem.module.css';
import MyComponent from '../../../MyComponent';

const PostDetailsUsersCommentItemList = () => {
  return (
    <div className={styles.postDetailsCommentItemUserList}>
      <MyComponent.PostDetailsUsersCommentItem />
      <MyComponent.PostDetailsUsersCommentItem />
      <MyComponent.PostDetailsUsersCommentItem />
      <MyComponent.PostDetailsUsersCommentItem />
      <MyComponent.PostDetailsUsersCommentItem />
      <MyComponent.PostDetailsUsersCommentItem />
      <MyComponent.PostDetailsUsersCommentItem />
    </div>
  );
};

export default PostDetailsUsersCommentItemList;
