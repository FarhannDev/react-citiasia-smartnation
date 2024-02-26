import React from 'react';
import { Form } from 'react-bootstrap';
import '@/assets/styles/search-bar.css';

type SearchBarProps = {
  placeholderText: string;
};

export default function SearchBar({ placeholderText }: SearchBarProps) {
  return (
    <>
      <Form className=" app-search-bar-items d-none d-lg-block">
        <Form.Control
          type="search"
          placeholder={placeholderText}
          className="me-2  app-search-bar-item__input"
          aria-label="Search"
        />
      </Form>
    </>
  );
}
