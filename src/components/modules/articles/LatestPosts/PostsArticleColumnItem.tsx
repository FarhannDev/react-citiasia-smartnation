import parse from 'html-react-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Card } from 'react-bootstrap';
import { HiOutlineClock } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import ArticleButtonCategory from '../../../common/button/ArticleButtonCategory';
import styles from '@/assets/styles/modules/PostsArticleColumn.module.css';
import { postedAt } from '../../../../utils/common/generateFormattedDate';

type PostsArticleColumnItemProps = Posts;

const PostsArticleColumnItem = ({
  slug,
  title,
  content,
  publishDate,
  sourceImageUrl,
}: PostsArticleColumnItemProps) => {
  return (
    <Card className={styles.postsArticleItems}>
      <LazyLoadImage
        className={`${styles.postsArticleColumnItemImage} img-fluid`}
        alt={title}
        effect="blur"
        loading="lazy"
        src={sourceImageUrl}
      />

      <Card.Body className="px-0 mx-0">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row align-items-center">
            <span className={styles.postsArticleColumnItemDate}>
              <HiOutlineClock className="me-1" fontSize={16} />
              {postedAt(publishDate)}
            </span>
          </div>
          <Link
            to={slug}
            aria-label="Baca selengkapnya"
            className={styles.postsArticleColumnItemTitle}
          >
            {parse(title)}
          </Link>
          <div className={styles.postsArticleColumnItemContent}>
            {parse(content)}
          </div>
          <ArticleButtonCategory />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PostsArticleColumnItem;
