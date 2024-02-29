import styles from '@/assets/styles/modules/posts.module.css';
import PostDetailsUsersCommentItem from './PostDetailsUsersCommentItem';

const PostDetailsUsersCommentItemList = () => {
  return (
    <div className={styles.postDetailsCommentItemUserList}>
      <PostDetailsUsersCommentItem />
      <PostDetailsUsersCommentItem />
      <PostDetailsUsersCommentItem />
    </div>
  );
};

export default PostDetailsUsersCommentItemList;
