import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from '@/assets/styles/modules/auth.module.css';

interface Login {
  email: string;
  password: string;
}

const AuthLoginInput = () => {
  const { register, handleSubmit, resetField } = useForm<Login>();

  const onLoginHandler: SubmitHandler<Login> = async () => {
    resetField('email');
    resetField('password');
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onLoginHandler)}
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
