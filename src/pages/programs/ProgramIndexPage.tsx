import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Col, Container, Row } from 'react-bootstrap';
import { program, programCategory } from '../../utils/data/programsData';
import styles from '@/assets/styles/modules/programs.module.css';
import MyComponent from '../../components/MyComponent';
import ContentLayout from '../../layouts/ContentLayout';

const ProgramIndexPage = () => {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(
    () => searchParams.get('keyword') || ''
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onKeywordChangeHandler = (keywordSearch: string) => {
    setIsLoading(true);
    setKeyword(keywordSearch);
    setSearchParams({ keyword: keywordSearch });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const programCategoryData: ProgramCategory | undefined =
    programCategory?.find((program) => program.slug === categoryId?.toString());

  const programData: Program[] = program
    .filter((program) =>
      program.categories.find(
        (pgCategory) => pgCategory.slug === programCategoryData?.slug
      )
    )
    .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());

  const programListData: Program[] | null = searchParams.get('keyword')
    ? program
        .filter((program) =>
          program.categories.find(
            (pgCategory) => pgCategory.slug === programCategoryData?.slug
          )
        )
        .filter(
          (program) =>
            program.title.toLowerCase().includes(keyword.toLowerCase()) ||
            program.content.toLowerCase().includes(keyword.toLowerCase())
        )
        .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    : programData;

  const popularProgramData: Program[] = program
    ?.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 10);

  return (
    <>
      <ContentLayout>
        <Helmet
          encodeSpecialCharacters={true}
          title="Program"
          titleTemplate="%s - Smartnation"
          async
        >
          <meta
            property="og:description"
            content="Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation"
          />
          <meta property="og:type" content="article" />
        </Helmet>
        <section className={styles.sectionProgramSmartnation}>
          <Container className={styles.programSmartnationContainer}>
            <Row className="justify-content-between align-items-start g-5">
              <Col lg={12} xl={8} md={12}>
                <h1 className={styles.programSmartnationHeadingPrimary}>
                  Tentang Kegiatan {programCategoryData?.name}
                </h1>
                <MyComponent.ProgramIntroduction
                  progHeading={`Apa itu ${programCategoryData?.name}?`}
                  progDescription={programCategoryData?.description}
                />

                <div className="d-flex flex-column pt-4">
                  <h4 className={`${styles.programSmartnationHeading} mb-4`}>
                    Postingan terkait {programCategoryData?.name}
                  </h4>

                  <MyComponent.SearchItem
                    placeholder={`Cari kegiatan ${programCategoryData?.name}...`}
                    keyword={keyword}
                    keywordChange={onKeywordChangeHandler}
                    isDisabled={!programData.length}
                  />

                  {isLoading ? (
                    'Sedang Memuat...'
                  ) : (
                    <>
                      {keyword && !programListData.length && (
                        <MyComponent.SearchEmpty title="Pencarian tidak ditemukan." />
                      )}

                      {!keyword && !programData.length && (
                        <MyComponent.SearchEmpty title="Belum ada postingan." />
                      )}
                      <MyComponent.ProgramRowItemList
                        programs={programListData}
                        ctaLabel={programCategoryData?.name}
                      />
                    </>
                  )}
                </div>
              </Col>
              <Col lg={12} xl={4}>
                <MyComponent.ProgramPopulerItemList
                  programs={popularProgramData}
                  heading="Terpopuler"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </ContentLayout>
    </>
  );
};

export default ProgramIndexPage;
