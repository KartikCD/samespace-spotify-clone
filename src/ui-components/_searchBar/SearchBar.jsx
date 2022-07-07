import * as React from 'react';
import styles from './SearchBar.module.css';
import { BiSearch } from 'react-icons/bi';
import useSearchBar from './useSearchBar';
import { useTranslation } from 'react-i18next'

export const SearchBar = React.memo(({ queryBlock, queryParameters, timer }) => {
  const { search, onChange, onClick } = useSearchBar(queryBlock, queryParameters, timer);
  const { t } = useTranslation()

  return (
    <div className={styles.inputRoot}>
      <input placeholder={t("searchPlaceholder")} value={search} onChange={onChange} />
      <BiSearch className={styles.inputIcon} onClick={onClick} />
    </div>
  )
});