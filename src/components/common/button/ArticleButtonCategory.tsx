import { Link } from 'react-router-dom';
import styles from '@/assets/styles/modules/ButtonArticleCategory.module.css';

export default function ArticleButtonCategory() {
  return (
    <div className="d-flex flex-row justify-content-start">
      <Link to="/" className={`${styles.buttonArticleCategory} me-2`}>
        Artikel
      </Link>
      <Link to="/" className={`${styles.buttonArticleCategory} me-2`}>
        Nasional
      </Link>
      <Link to="/" className={`${styles.buttonArticleCategory} me-2`}>
        Smart City
      </Link>
    </div>
  );
}
