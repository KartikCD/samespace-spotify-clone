import * as React from 'react';
import styles from './CircleButton.module.css';
import classnames from 'classnames';

export const CircleButton = React.memo(({ className, children, onClick }) => {
    const composedClassnames = classnames(styles.circleButton, className);

    return(
        <button className={composedClassnames} onClick={onClick}>
            {children}
        </button>
    )
})