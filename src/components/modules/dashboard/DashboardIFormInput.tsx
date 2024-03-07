import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import styles from '@/assets/styles/modules/Dashboard.module.css';
import { Categories } from '../../../utils/models/categoryPostData';
import api from '../../../utils/api/api';
import useInput from '../../../hooks/useInput';

type DashboardIFormInputProps = {
  addPosts: ({ title, categoryId, sourceImageUrl, content }: Posts) => void;
};

const DashboardIFormInput: React.FC<DashboardIFormInputProps> = ({
  addPosts,
}) => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [inputTitle, handleChangeInputTitle] = useInput('');
  const [inputPublishDate, handleChangeInputPublishDate] = useInput('');
  const [inputSourceImageUrl, handleChangeInputSourceImageUrl] = useInput('');
  const [inputBody, setInputBody] = useState('Tuliskan isi postingan');
  const [inputCategoryId, setInputCategoryId] = useState('');

  const handleChangeInputCategory = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInputCategoryId(e.target.value);
  };
  const handleChangeInputBody: (e: ContentEditableEvent) => void = (
    e: ContentEditableEvent
  ) => setInputBody(e.target.value);

  useEffect(() => {
    const fetchDataFromNetwork = async () => {
      const result = await api.getAllCategories();
      setCategories(result);
    };

    fetchDataFromNetwork();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPosts({
      title: inputTitle,
      // title: inputTitle,
      // categoryId: inputCategoryId,
      // sourceImageUrl: inputSourceImageUrl,
      // content: inputBody,
    });
  };

  return (
    <>
      <div className="d-flex flex-column mx-lg-3">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className={styles.dashboardItemInputLabelText}>
              Judul Postingan
            </Form.Label>
            <Form.Control
              value={inputTitle}
              onChange={handleChangeInputTitle}
              className={styles.dashboardItemInput}
              type="text"
              placeholder="Judul postingan"
              autoComplete="title"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className={styles.dashboardItemInputLabelText}>
              Tanggal publikasi
            </Form.Label>
            <Form.Control
              value={inputPublishDate}
              onChange={handleChangeInputPublishDate}
              className={styles.dashboardItemInput}
              type="text"
              placeholder="Tanggal publikasi"
              autoComplete="date"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className={styles.dashboardItemInputLabelText}>
              Resource Gambar
            </Form.Label>
            <Form.Control
              value={inputSourceImageUrl}
              onChange={handleChangeInputSourceImageUrl}
              className={styles.dashboardItemInput}
              type="text"
              placeholder="https://smartnation.id/wp-content/uploads/2022/12/21_Des-01-01-2048x1195.png"
              autoComplete="date"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className={styles.dashboardItemInputLabelText}>
              Kategori Postingan
            </Form.Label>
            <Form.Select
              value={inputCategoryId}
              onChange={handleChangeInputCategory}
              aria-label="Default select example"
              className={`${styles.dashboardItemInput}`}

              // size="lg"
            >
              {/* <option>Open this select menu</option> */}
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label className={styles.dashboardItemInputLabelText}>
              Isi Konten Postingan
            </Form.Label>

            <ContentEditable
              html={inputBody}
              onChange={handleChangeInputBody}
              className={styles.dashboardItemInputContentEditable}
              title="Buat Pertanyaan Baru "
              autoCorrect=""
              tagName="article"
            />
          </Form.Group>

          <Button
            type="submit"
            // disabled={!disabledButton}
            className={styles.dashboardItemInputButton}
          >
            Simpan Postingan
          </Button>
        </Form>
      </div>
    </>
  );
};

export default DashboardIFormInput;
