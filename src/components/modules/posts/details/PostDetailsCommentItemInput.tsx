import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { BiSend } from 'react-icons/bi';

import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import styles from '@/assets/styles/modules/posts.module.css';

const PostDetailsCommentItemInput: React.FC = () => {
  const [input, setInput] = useState<string>('Tuliskan komentar');

  const handleChangeInput: (e: ContentEditableEvent) => void = (
    e: ContentEditableEvent
  ) => setInput(e.target.value);

  return (
    <div className={styles.postDetailsCommentItemFormInput}>
      <Form>
        <ContentEditable
          html={input}
          onChange={handleChangeInput}
          className={styles.postDetailsCommentItemFormInputUser}
          title="Tuliskan Komentar "
          autoCorrect=""
          tagName="article"
        />

        <div className="d-flex justify-content-between align-items-center pt-2">
          <div className={styles.postDetailsCommentItemFormInputLabel}>
            1000 Karakter tersisa
          </div>
          <Button type="submit" variant="danger" className="mt-3">
            Kirim <BiSend />
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PostDetailsCommentItemInput;
