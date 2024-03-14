import styles from '@/assets/styles/modules/NewsLetterItem.module.css';
import api from '../../../utils/api/api';
import MyComponent from '../../MyComponent';

function NewsLetterItem() {
  const handleNewsLetterSubscribe = (email: string) => {
    api.createSubscribeNewsLetter(email);
    alert('Berhasil');
  };

  return (
    <>
      <div className={styles.newsLetterSubcribe}>
        <h2 className={styles.newsLetterSubcribeHeading}>
          Berlangganan Buletin Kami
        </h2>
        <h3 className={styles.newsLetterSubcribeSubheading}>
          Dapatkan pembaruan terbaru kami dengan info terbaru
        </h3>
        <MyComponent.NewsLetterFormInput
          subscribe={handleNewsLetterSubscribe}
        />
      </div>
    </>
  );
}

export default NewsLetterItem;
