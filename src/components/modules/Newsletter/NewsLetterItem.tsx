import styles from '@/assets/styles/modules/NewsLetterItem.module.css';
import api from '../../../utils/api/api';
import MyComponent from '../../MyComponent';
import Swal from 'sweetalert2';

function NewsLetterItem() {
  const handleNewsLetterSubscribe = (email: string) => {
    api.createSubscribeNewsLetter(email);

    const textResponse = `Terima kasih Sudah Berlangganan Buletin Kami Nantikan pembaruan terbaru kami dengan info terbaru.
    `;

    Swal.fire({
      title: 'Berhasil!',
      text: textResponse,
      icon: 'success',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: 'Selesai',
      confirmButtonColor: '#295B19',
    });
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
