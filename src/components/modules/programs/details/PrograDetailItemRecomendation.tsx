import { program } from '../../../../utils/data/programsData';
import styles from '@/assets/styles/modules/posts.module.css';
import ProgramPopulerFigureColumnItem from './ProgramPopulerFigureColumnItem';
import ProgramCategoryRowItem from './ProgramCategoryRowItem';

const ProgramDetailItemRecomendation = () => {
  const popularPostData: Program[] = program
    ?.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 8);

  const postsData = program
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 6);

  return (
    <>
      <div className={styles.postDetailsItemRecomendation}>
        <article className="d-flex flex-column">
          <h3 className={styles.postDetailsItemRecomendationHeading}>
            Rekomendasi untuk anda
          </h3>
          <div className="row justify-content-start g-3 pt-4">
            {popularPostData.map((program, index) => (
              <div key={program.id} className="col-lg-6 col-xl-6 col-md-12">
                <ProgramCategoryRowItem index={index + 1} {...program} />
              </div>
            ))}
          </div>
        </article>

        <article className="d-flex flex-column">
          <h3 className={styles.postDetailsItemRecomendationHeading}>
            Program smart nation lainnya
          </h3>
          <div className="row justify-content-start g-3 align-content-start pt-4">
            {postsData.map((post) => (
              <div key={post.id} className="col-lg-4 col-xl-4 col-md-6">
                <ProgramPopulerFigureColumnItem {...post} />
              </div>
            ))}
          </div>
        </article>
      </div>
    </>
  );
};

export default ProgramDetailItemRecomendation;
