import styles from '@/assets/styles/modules/PostDetailsUsersCommentItem.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoThumbsUpOutline, IoThumbsDownOutline } from 'react-icons/io5';

const PostDetailsUsersCommentItem = () => {
  return (
    <div className={styles.postDetailsCommentItemUser}>
      <div className={styles.postDetailsCommentItemUserCard}>
        <div className="d-flex justify-content-start align-content-center g-3">
          <LazyLoadImage
            alt=""
            effect="blur"
            loading="lazy"
            src="https://ui-avatars.com/api/?name=FARHAN&background=random"
            className={styles.postDetailsCommentItemUserCardImage}
          />

          <div className={styles.postDetailsCommentItemUserCardBody}>
            <div className={styles.postDetailsCommentItemUserCardBodyName}>
              FARHAN
            </div>
            <div className={styles.postDetailsCommentItemUserCardBodyDate}>
              30 Menit yang lalu
            </div>
            <div className={styles.postDetailsCommentItemUserCardBodyText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aut
              officia numquam explicabo esse qui aspernatur commodi magnam
              voluptates perferendis animi sapiente, id maiores quasi libero
              porro dolorum sed ea dolores voluptas saepe nostrum voluptate
              provident et? Corporis ea quisquam recusandae placeat nobis quo
              dolores? Eum consectetur quasi fugit laudantium.
            </div>

            <div className={styles.postDetailsCommentItemUserCardBodyAction}>
              <div
                className={styles.postDetailsCommentItemUserCardBodyActionLike}
              >
                <div className="px-3">
                  <button
                    className={
                      styles.postDetailsCommentItemUserCardBodyActionLikeBtn
                    }
                  >
                    <div className="d-flex align-items-center">
                      <IoThumbsUpOutline className="me-2" fontSize={18} /> 10
                    </div>
                  </button>
                </div>
                <div className="mx-3">
                  <button
                    className={
                      styles.postDetailsCommentItemUserCardBodyActionLikeBtn
                    }
                  >
                    <div className="d-flex align-items-center">
                      <IoThumbsDownOutline className="me-2" fontSize={18} /> 0
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsUsersCommentItem;
