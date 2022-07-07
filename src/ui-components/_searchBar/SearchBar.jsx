import * as React from 'react';
import styles from './SearchBar.module.css';
import { BiSearch } from 'react-icons/bi';
import useSearchBar from './useSearchBar';

export const SearchBar = React.memo(({ queryBlock, queryParameters, timer }) => {

  const { search, onChange, onClick } = useSearchBar(queryBlock, queryParameters, timer);

  return (
    <div className={styles.inputRoot}>
      <input placeholder='Search Song, Artist' value={search} onChange={onChange} />
      <BiSearch className={styles.inputIcon} onClick={onClick} />
    </div>
  )
});