import { Button, Form, InputGroup } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import styles from '@/assets/styles/modules/search.module.css';
import React from 'react';

type SearchItemProps = {
  placeholder: string;
  keyword: string;
  keywordChange: (keywordSearch: string) => void;
  isDisabled: boolean;
};

const SearchItem: React.FC<SearchItemProps> = ({
  placeholder,
  keyword,
  keywordChange,
  isDisabled,
}) => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          className={styles.searchItemInput}
          placeholder={placeholder}
          aria-label={placeholder}
          aria-describedby="basic-addon2"
          value={keyword}
          onChange={(e) => keywordChange(e.target.value)}
          disabled={isDisabled}
        />
        <Button
          type="submit"
          variant="outline"
          id="button-addon2"
          className={styles.searchItemButton}
        >
          <BsSearch fontSize={18} color="888" />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchItem;
