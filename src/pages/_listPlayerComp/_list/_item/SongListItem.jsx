import * as React from 'react';
import classnames from 'classnames';
import { Image } from '../../../../ui-components';
import styles from './SongListItem.module.css';

export const SongListItem = React.memo(({ data, onClick, songDetail }) => {

  const { title, photo, duration, artist } = data;
  const minutes = Math.floor(duration / 100);
  const seconds = duration % 100;
  const onButtonClick = React.useCallback(() => {
    onClick(data);
  }, [onClick, data]);

  let composedClassname;

  if (data === songDetail) {
    composedClassname = classnames(styles.buttonOuterStyle, styles.activeStyle);
  } else {
    composedClassname = classnames(styles.buttonOuterStyle);
  }
  
  return(
    <button className={composedClassname} onClick={onButtonClick}>
      <Image src={photo} alt={title} className={styles.imageStyle} />
      <div className={styles.titleTextDivStyle}>
        <p className={styles.titleText}>{title}</p>
        <p className={styles.artistText}>{artist}</p>
      </div>
      <p className={styles.durationText}>{minutes}:{seconds}</p>
    </button>
  )
});
