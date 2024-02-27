import styles from '@/assets/styles/modules/contact.module.css';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { Form, Button } from 'react-bootstrap';
import { useState, FormEvent } from 'react';
import useInput from '../../../hooks/useInput';

const ContactItemInput = () => {
  const [inputName, handleChangeInputName] = useInput('');
  const [inputEmail, handleChangeInputEmail] = useInput('');
  const [inputBody, setInputBody] = useState<string>('');
  const handleChangeInputBody: (e: ContentEditableEvent) => void = (
    e: ContentEditableEvent
  ) => setInputBody(e.target.value);

  const disabledButton: boolean = Boolean(
    inputName.length && inputEmail.length && inputBody.length
  );

  const handleSubmit: (e: FormEvent<HTMLFormElement>) => void = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    disabledButton ? alert('Berhasil') : null;
  };

  return (
    <div className="d-flex flex-column mx-lg-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.contactItemInputLabelText}>
            Nama
          </Form.Label>
          <Form.Control
            value={inputName}
            onChange={handleChangeInputName}
            className={styles.contactItemInput}
            type="text"
            placeholder="Nama anda"
            autoComplete="name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className={styles.contactItemInputLabelText}>
            Email
          </Form.Label>
          <Form.Control
            value={inputEmail}
            onChange={handleChangeInputEmail}
            className={styles.contactItemInput}
            type="email"
            placeholder="Email"
            autoComplete="email"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className={styles.contactItemInputLabelText}>
            Pesan
          </Form.Label>

          <ContentEditable
            html={inputBody}
            onChange={handleChangeInputBody}
            className={styles.contactItemInputContentEditable}
            title="Buat Pertanyaan Baru "
            autoCorrect=""
            tagName="article"
          />
        </Form.Group>

        <Button
          type="submit"
          disabled={!disabledButton}
          className={styles.contactItemInputButton}
        >
          Kirimkan
        </Button>
      </Form>
    </div>
  );
};

export default ContactItemInput;
