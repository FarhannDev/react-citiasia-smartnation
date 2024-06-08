import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../../../utils/data/postsData';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import styles from '@/assets/styles/modules/SearchBar.module.css';

type SearchBarResultProps = {
  keyword: string;
};

const SearchBarResult: React.FC<SearchBarResultProps> = ({ keyword }) => {
  const postsData: Posts[] = posts?.filter((post) => {
    return post.title.toLowerCase().includes(keyword.toLowerCase());
  });

  const results: Posts[] = postsData.length ? postsData : posts;

  return (
    <div
      className={styles.searchBarResultItem}
      // style={{ height: postsData.length >= 10 ? '300px' : 'auto' }}
    >
      {results?.slice(0, 6).map((post) => (
        <div key={post.id} className={styles.searchBarResultItemList}>
          <Link
            className={styles.searchBarResultItemListTitle}
            to={`/${post.slug}`}
            aria-label="Baca selengkapnya"
          >
            {post.title}
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
