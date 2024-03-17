import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '@/assets/styles/modules/auth.module.css';

const AuthRegisterInput = () => {
  return (
    <>
      <Form className={styles.authItemForm}>
        <Form.Group className="mb-3" controlId="exampleForm.name">
          <Form.Label className={styles.authItemInputLabelText}>
            Nama
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukan Nama Anda"
            autoComplete="name"
            className={styles.authItemInput}
          />
        </Form.Group>
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
            placeholder="Masukan Password "
            autoComplete="password"
            className={styles.authItemInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.confirmPass">
          <Form.Label className={styles.authItemInputLabelText}>
            Konfirmasi password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder=" Konfirmasi Password"
            autoComplete="password"
            className={styles.authItemInput}
          />
        </Form.Group>
        <div className="d-flex justify-content-start pt-3">
          <Button type="submit" className={styles.authItemInputButton}>
            Mendaftar
          </Button>
        </div>

        <div className="d-flex justify-content-center py-4">
          <div>
            <span className={styles.authItemInputLabelText}>
              Sudah punya akun?
            </span>{' '}
            <Link className={styles.authItemInputLabelText} to="/login">
              Login Disini!
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
};

export default AuthRegisterInput;
