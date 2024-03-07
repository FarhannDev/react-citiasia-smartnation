import styles from '@/assets/styles/modules/SearchBar.module.css';
import { Link } from 'react-router-dom';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import React from 'react';

type SearchBarResultProps = { results: Posts[]; isResult: boolean };

const SearchBarResult: React.FC<SearchBarResultProps> = ({ results }) => {
  return (
    <div className={styles.searchBarResultItem}>
      <h5 className={styles.searchBarResultItemHeading}>Hasil Pencarian</h5>
      {results?.map((result) => (
        <div key={result.id} className={styles.searchBarResultItemList}>
          <Link
            className={styles.searchBarResultItemListTitle}
            to="/"
            aria-label="Baca selengkapnya"
          >
            {result.title}
          </Link>
          <HiOutlineArrowUpRight
            className={styles.searchBarResultItemListTitle}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchBarResult;
