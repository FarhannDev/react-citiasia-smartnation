import styles from '@/assets/styles/modules/ButtonArticleCategory.module.css';
import { Link } from 'react-router-dom';

const ArticleButtonDetailCategory = () => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-start pt-4">
        <Link
          to="/"
          aria-label="Selengkapnya"
          className={styles.buttonArticleDetailCategory}
        >
          Smartnation 2022
        </Link>
        <Link
          to="/"
          aria-label="Selengkapnya"
          className={styles.buttonArticleDetailCategory}
        >
          Smartnation 2022
        </Link>
        <Link
          to="/"
          aria-label="Selengkapnya"
          className={styles.buttonArticleDetailCategory}
        >
          Smartnation 2022
        </Link>
        <Link
          to="/"
          aria-label="Selengkapnya"
          className={styles.buttonArticleDetailCategory}
        >
          Smartnation 2022
        </Link>
      </div>
    </>
  );
};

export default ArticleButtonDetailCategory;
