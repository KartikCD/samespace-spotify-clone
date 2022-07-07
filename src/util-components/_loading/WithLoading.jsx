import * as React from "react";
import { Spinner } from "../../ui-components";
import styles from './WithLoading.module.css'

export const WithLoading = React.memo(({ loading, children }) => {
  if (loading === true) {
    return(
      <div className={styles.loadingDiv}>
        <Spinner />
      </div>
    ) 
  }
  return <>{children}</>;
});
