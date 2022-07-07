import * as React from 'react'
import styles from './HeaderTitle.module.css';

export const HeaderTitle = React.memo(({ children }) => {
  return(
    <p className={styles.headerTitle}>
      {children}
    </p>
  )
})