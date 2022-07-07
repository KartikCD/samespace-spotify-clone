import * as React from 'react';
import styles from './SidebarListItem.module.css';
import classnames from 'classnames';

export const SidebarListItem = React.memo(({ playlist, onClick, playlistId }) => {
    const { id, title } = playlist;

    const onButtonClick = React.useCallback(() => {
        onClick(id);
    }, [onClick, id]);

    let composedClassnames;
    if (id === playlistId) {
        console.log("here")
        composedClassnames = classnames(styles.buttonContainer, styles.activeElement)
    } else {
        composedClassnames = classnames(styles.buttonContainer);
    }

    return(
        <button className={composedClassnames} key={id} onClick={onButtonClick} >
            {title}
        </button>
    )
});