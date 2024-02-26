import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { HiOutlineClock } from 'react-icons/hi2';
import ArticleButtonCategory from '../../../common/button/ArticleButtonCategory';

// import '@/assets/styles/latest-posts.css';
import styles from '@/assets/styles/modules/PostsArticleRowItem.module.css';

// type Props = {};

const PostsArticleRowItem = () => {
  return (
    <div className={` ${styles.postsArticleRowitems} mb-3`}>
      <div className="d-flex flex-column ">
        <div>
          <div className="d-flex flex-row align-items-center">
            <span className={styles.postsArticleRowitemsDate}>
              <HiOutlineClock className="me-1" fontSize={14} />
              16 Desember 2022
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex-flex-column">
            <Link
              className={styles.postsArticleRowitemsTitle}
              aria-label="Baca selengkapnya"
              to="/"
            >
              Terapkan Smart Fisheries Village (SFV) pada Industri Kelautan di
              Indonesia
            </Link>

            <ArticleButtonCategory />
          </div>

          <div>
            <Link to="/" aria-label="Baca selengkapnya">
              <LazyLoadImage
                className={styles.postsArticleRowitemsThumbnail}
                alt={''}
                effect="blur"
                src="https://s3-alpha-sig.figma.com/img/2c6f/28ea/ea28a57772a1cf28c946eda2598834ee?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOM9uClTj9w0OhdQb2--cEGrcxglrSjUstCJJkobju4uYXzjp~bSfgyIYDo879mZjrQeUbPOiV3DQfN6bk4o1VlKKJyQu49di0hK3WI317iI6RbHaS-ObXI0WOJjYBsOAW5n6WUN57VeU9De0EN2CVhTB~XwD~GLmVcLl9bfdMKhckhOYK5ItGP4ZWClBPyDm4vudHFH13O5nY859NIR1JD899JANDVtGx7f5024dJP990jeStKU9HDtUZMd8cipcU2Pm5y0hR6R5~xEecI4B0a5wL9WVKGjx25HtwQc96LBA1Ra76GvsfRfiP3WF1L4~nmesw9dvR7l2qLGKcJkpw__"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsArticleRowItem;
