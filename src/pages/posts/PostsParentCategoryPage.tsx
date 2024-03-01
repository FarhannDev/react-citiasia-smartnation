/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoChevronForwardOutline } from 'react-icons/io5';
import { Col, Container, Row } from 'react-bootstrap';
import PostsFigureColumnItem from '../../components/modules/posts/PostsFigureColumnItem';
import PostsFigureRowItem from '../../components/modules/posts/PostsFigureRowItem';
import PostsPopulerFigureColumnItem from '../../components/modules/posts/PostsPopulerFigureColumnItem';
import PostsRowItem from '../../components/modules/posts/PostsRowItem';
import PopularPostItemList from '../../components/modules/articles/RelatePosts/PopularPostItemList';
import NewsLetterItem from '../../components/modules/Newsletter/NewsLetterItem';
import styles from '@/assets/styles/modules/posts.module.css';
import appStyles from '@/assets/styles/modules/app.module.css';

const PostsParentCategoryPage: React.FC = () => {
  const { id } = useParams();

  return (
    <>
      <section className={styles.sectionPostSmartnation}>
        <Container className={styles.postSmartnationContainer}>
          <Row className="justify-content-between align-items-start g-5">
            <Col lg={12} xl={8} md>
              <Row className="justify-content-start align-content-start g-3">
                <Col>
                  <h1 className={styles.postSmartnationHeading}>
                    Berita utama terbaru
                  </h1>

                  <Row className="justify-content-start g-3 py-3">
                    <Col lg={6} xl={6} md={12}>
                      <PostsFigureColumnItem />
                    </Col>
                    <Col lg={6} xl={6} md={12}>
                      <PostsFigureRowItem />
                      <PostsFigureRowItem />
                      <PostsFigureRowItem />
                      <PostsFigureRowItem />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="justify-content-start align-content-start g-3 py-4">
                <Col>
                  <h1 className={styles.postSmartnationHeading}>
                    Berita utama terpopuler
                  </h1>
                  <Row className="justify-content-start g-3 py-3">
                    <Col lg={6} xl={6}>
                      <PostsPopulerFigureColumnItem />
                    </Col>
                    <Col lg={6} xl={6}>
                      <PostsPopulerFigureColumnItem />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="justify-content-start align-content-start g-3 py-4">
                <Col>
                  <div className="d-flex justify-content-between align-items-center">
                    <h1 className={styles.postSmartnationHeading}>Berita</h1>
                    <Link
                      to="/posts/berita"
                      aria-label="Lihat selengkapnya"
                      className={styles.postSmartnationHeadingLink}
                    >
                      Lihat selengkapnya <IoChevronForwardOutline />
                    </Link>
                  </div>

                  <div className="d-flex flex-column pt-4">
                    <PostsRowItem />
                    <PostsRowItem />
                    <PostsRowItem />
                    <PostsRowItem />
                    <PostsRowItem />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={12} xl={4}>
              <PopularPostItemList />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section Newsletter Subscribe  */}
      <section
        className={appStyles.sectionNewsletterSubscribe}
        id={appStyles.sectionNewsletterSubscribe}
      >
        <Container className={appStyles.sectionNewsletterSubscribeContainer}>
          <NewsLetterItem />
        </Container>
      </section>
    </>
  );
};

export default PostsParentCategoryPage;
