import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '@/assets/styles/modules/auth.module.css';

const AuthLoginInput = () => {
  return (
    <>
      <Form className={styles.authItemForm}>
        <Form.Group className="mb-3" controlId="exampleForm.email">
          <Form.Label className={styles.authItemInputLabelText}>
            Email Address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Masukan Alamat Email"
            autoComplete="email"
            className={styles.authItemInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.password">
          <Form.Label className={styles.authItemInputLabelText}>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Masukkan Password"
            autoComplete="name"
            className={styles.authItemInput}
          />
        </Form.Group>
        <div className="d-flex justify-content-start pt-3">
          <Button type="submit" className={styles.authItemInputButton}>
            Masuk
          </Button>
        </div>

        <div className="d-flex justify-content-center py-4">
          <div>
            <span className={styles.authItemInputLabelText}>
              Belum punya akun?
            </span>{' '}
            <Link className={styles.authItemInputLabelText} to="/register">
              Register Disini!
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
};

export default AuthLoginInput;
