import { Col, Row } from 'react-bootstrap';
import ArticleCategoryRowItem from './ArticleCategoryRowItem';
import styles from '@/assets/styles/modules/ArticleCategoryRowItem.module.css';
import React from 'react';

type ArticleCategoryRowItemListProps = {
  posts: Posts[];
  categories: Categories[];
};
const ArticleCategoryRowItemList: React.FC<ArticleCategoryRowItemListProps> = ({
  posts,
  categories,
}) => {
  return (
    <Row className="justify-content-start g-4 py-5">
      {categories.slice(0, 3).map((category) => (
        <Col key={category.id} xl={4} lg={12} md={12}>
          <div className="d-flex flex-column">
            <div className="mb-4">
              <h1 className={styles.articleCategoryRowItemHeading}>
                {category.name}
              </h1>
              <div className={styles.articleCategoryRowItemHeadingUnderline} />
            </div>
            {posts.slice(0, 4).map((post, idx) => (
              <ArticleCategoryRowItem key={post.id} index={idx + 1} {...post} />
            ))}
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default ArticleCategoryRowItemList;
