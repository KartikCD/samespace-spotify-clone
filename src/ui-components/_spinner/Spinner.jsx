import * as React from 'react';
import { ImSpinner8 } from 'react-icons/im';
import styles from './Spinner.module.css';
import classnames from 'classnames';

export const Size = {
  Small: "small",
  Medium: "medium",
  Large: "large"
}

export const Spinner = React.memo(({ size = Size.Medium }) => {
  return (
    <div>
      <ImSpinner8 className={classnames(styles.spinner, styles[size])}/>
    </div>
  )
})