import { InputGroup, Form, Button } from 'react-bootstrap';
import styles from '@/assets/styles/modules/NewsLetterItem.module.css';

function NewsLetterItem() {
  return (
    <>
      <div className={styles.newsLetterSubcribe}>
        <h2 className={styles.newsLetterSubcribeHeading}>
          Berlangganan Buletin Kami
        </h2>
        <h3 className={styles.newsLetterSubcribeSubheading}>
          Dapatkan pembaruan terbaru kami dengan info terbaru
        </h3>
      </div>
      <div className={styles.newsLetterSubcribeForm}>
        <Form>
          <InputGroup className="mb-3">
            <Form.Control
              className={styles.newsLetterSubcribeFormInput}
              placeholder="Alamat Email"
              aria-label="Alamat Email"
              aria-describedby="basic-addon2"
            />

            <Button type="submit" variant="danger">
              Kirim
            </Button>
          </InputGroup>
        </Form>
      </div>
    </>
  );
}

export default NewsLetterItem;
