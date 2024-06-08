/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, InputGroup } from 'react-bootstrap';
import styles from '@/assets/styles/modules/NewsLetterItem.module.css';
import useInput from '../../../hooks/useInput';
import React from 'react';

type NewsLetterFormInputProps = { subscribe: (email: string) => void };

const NewsLetterFormInput = ({ subscribe }: NewsLetterFormInputProps) => {
  const [email, handleChangeEmail] = useInput('');
  const disabledButton: boolean = Boolean(email);

  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    subscribe(email);
  };

  return (
    <div className={styles.newsLetterSubcribeForm}>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            type="email"
            value={email}
            onChange={handleChangeEmail}
            className={styles.newsLetterSubcribeFormInput}
            placeholder="Alamat Email"
            aria-label="Alamat Email"
            aria-describedby="basic-addon2"
          />

          <Button disabled={!disabledButton} type="submit" variant="danger">
            Kirim
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default NewsLetterFormInput;
