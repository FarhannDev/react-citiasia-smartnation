import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import styles from '@/assets/styles/modules/contact.module.css';

interface Contacts {
  name: string;
  email: string;
  message: string;
}

type ContactItemInputProps = { contacts: (data: Contacts) => void };

const ContactItemInput: React.FC<ContactItemInputProps> = ({ contacts }) => {
  const {
    register,
    resetField,
    formState: { errors },
    handleSubmit,
  } = useForm<Contacts>();

  const onSubmitForm: (data: Contacts) => void = (data: Contacts) => {
    console.log(data);
    contacts(data);

    resetField('name');
    resetField('email');
    resetField('message');
  };

  return (
    <div className="d-flex flex-column mx-lg-3">
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label className={styles.contactItemInputLabelText}>
            Nama
          </Form.Label>
          <Form.Control
            {...register('name', { required: true })}
            className={styles.contactItemInput}
            type="text"
            placeholder="Masukan Nama"
            autoComplete="name"
          />

          {errors.name && errors.name.message}
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationCustom02">
          <Form.Label className={styles.contactItemInputLabelText}>
            Email
          </Form.Label>
          <Form.Control
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email tidak valid',
              },
            })}
            className={`${styles.contactItemInput}`}
            type="email"
            placeholder="Masukan Alamat Email"
            autoComplete="email"
          />
          {errors.email && (
            <Form.Control.Feedback type="invalid">
              {errors.email.message}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group controlId="validationCustom03">
          <Form.Label className={styles.contactItemInputLabelText}>
            Pesan
          </Form.Label>

          <Form.Control
            {...register('message', {
              required: true,
              max: 1000,
              maxLength: 1000,
            })}
            as="textarea"
            rows={3}
            className={styles.contactItemInputContentEditable}
            placeholder="Tuliskan isi pesan"
          />
        </Form.Group>

        <Button
          disabled={Object.keys(errors).length > 0}
          type="submit"
          className={styles.contactItemInputButton}
        >
          Kirimkan
        </Button>
      </Form>
    </div>
  );
};

export default ContactItemInput;
