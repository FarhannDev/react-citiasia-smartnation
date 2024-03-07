import React from 'react';
import styles from '@/assets/styles/modules/posts.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  FaRegClock,
  FaRegComment,
  FaRegEye,
  FaRegShareSquare,
} from 'react-icons/fa';
import ArticleButtonDetailCategory from '../../../common/button/ArticleButtonDetailCategory';
import parse from 'html-react-parser';
import { postedAt } from '../../../../utils/common/generateFormattedDate';

type PostDetailsItemProps = { post: Posts | undefined };

const PostDetailsItem: React.FC<PostDetailsItemProps> = ({ post }) => {
  return (
    <div className={styles.postDetailsItem}>
      <h1 className={styles.postDetailsItemHeading}>{post?.title}</h1>

      <div className={styles.postDetailsItemInfo}>
        <div className="d-flex justify-content-start align-items-center g-4">
          <FaRegClock className={`${styles.postDetailsItemInfoDate} me-2`} />
          <div className={styles.postDetailsItemInfoDate}>
            {postedAt(post?.publishDate ? post.publishDate : '')}
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center g-4">
          <FaRegComment className={`${styles.postDetailsItemInfoDate} me-2`} />
          <div className={styles.postDetailsItemInfoDate}>0 Komentar</div>
        </div>
        <div className="d-flex justify-content-start align-items-center g-4">
          <FaRegEye className={`${styles.postDetailsItemInfoDate} me-2`} />
          <div className={styles.postDetailsItemInfoDate}>
            {post?.views} kali Dilihat
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-center g-4">
          <FaRegShareSquare
            className={`${styles.postDetailsItemInfoDate} me-2`}
          />
          <div className={styles.postDetailsItemInfoDate}>Bagikan</div>
        </div>
      </div>

      <LazyLoadImage
        className={`${styles.postDetailsItemImage} img-fluid `}
        alt={post?.title}
        effect="blur"
        loading="lazy"
        src={post?.sourceImageUrl}
      />

      <div className={styles.postDetailsItemBody}>
        <div className={styles.postDetailsItemBodyText}>
          {parse(post?.content ? post.content : '')}
        </div>

        <ArticleButtonDetailCategory />
      </div>
    </div>
  );
};

export default PostDetailsItem;
