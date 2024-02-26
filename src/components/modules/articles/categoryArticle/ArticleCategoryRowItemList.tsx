import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ArticleCategoryRowItem from './ArticleCategoryRowItem';
import styles from '@/assets/styles/modules/ArticleCategoryRowItem.module.css';

const ArticleCategoryRowItemList = () => {
  return (
    <>
      <Row className="justify-content-start g-4 py-5">
        <Col xl={4} lg={12} md={12}>
          <div className="d-flex flex-column">
            <div className="mb-4">
              <h1 className={styles.articleCategoryRowItemHeading}>Daerah</h1>
              <div
                className={styles.articleCategoryRowItemHeadingUnderline}
              ></div>
            </div>

            <ArticleCategoryRowItem />
            <ArticleCategoryRowItem />
            <ArticleCategoryRowItem />
            <ArticleCategoryRowItem />
          </div>
        </Col>
        <Col xl={4} lg={12} md={12}>
          <div className="d-flex flex-column">
            <div className="mb-4">
              <h1 className={styles.articleCategoryRowItemHeading}>Nasional</h1>
              <div
                className={styles.articleCategoryRowItemHeadingUnderline}
              ></div>
            </div>

            <ArticleCategoryRowItem />
            <ArticleCategoryRowItem />
            <ArticleCategoryRowItem />
            <ArticleCategoryRowItem />
          </div>
        </Col>
        <Col xl={4} lg={12} md={12}>
          <div className="d-flex flex-column">
            <div className="mb-4">
              <h1 className={styles.articleCategoryRowItemHeading}>
                Internasional
              </h1>
              <div
                className={styles.articleCategoryRowItemHeadingUnderline}
              ></div>
            </div>

            <ArticleCategoryRowItem />
            <ArticleCategoryRowItem />
            <ArticleCategoryRowItem />
            <ArticleCategoryRowItem />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ArticleCategoryRowItemList;
