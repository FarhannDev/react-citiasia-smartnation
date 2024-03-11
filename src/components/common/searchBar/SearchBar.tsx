import { Form } from 'react-bootstrap';
import '@/assets/styles/search-bar.css';
// import SearchBarResult from './SearchBarResult';

interface SearchBarProps {
  placeholderText: string;
  keyword: string;
  keywordChange: (keywordSearch: string) => void;
  onSubmitKeyword: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function SearchBar({
  placeholderText,
  keyword,
  keywordChange,
  onSubmitKeyword,
}: SearchBarProps) {
  return (
    <>
      <div className="position-relative">
        <Form
          onSubmit={onSubmitKeyword}
          className=" app-search-bar-items d-none d-lg-block"
        >
          <Form.Control
            value={keyword}
            onChange={(e) => keywordChange(e.target.value)}
            type="search"
            placeholder={placeholderText}
            className="me-2  app-search-bar-item__input"
            aria-label="Search"
          />
        </Form>

        {/* <SearchBarResult /> */}
      </div>
    </>
  );
}
