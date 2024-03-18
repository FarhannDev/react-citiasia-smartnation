import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from '@/assets/styles/modules/auth.module.css';

const AuthLoginInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  return (
    <>
      <Form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          resetField('email');
          resetField('password');
        })}
        className={styles.authItemForm}
      >
        <Form.Group className="mb-3" controlId="exampleForm.email">
          <Form.Label className={styles.authItemInputLabelText}>
            Email Address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Masukan Alamat Email"
            autoComplete="email"
            className={styles.authItemInput}
            {...register('email', { required: true, pattern: /\d+/ })}
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
            {...register('password', { required: true })}
          />
          {errors.password && <p>Password required.</p>}
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
