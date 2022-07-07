import * as React from 'react';
import { CircleButton } from '../../../../../ui-components';
import styles from './Controls.module.css';
import { TbDots } from 'react-icons/tb';
import { HiVolumeUp } from 'react-icons/hi'
import { FaForward, FaBackward, FaPlay, FaPause } from 'react-icons/fa'

export const Controls = React.memo(({ onPlayClick }) => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    React.useEffect(() => {
        onPlayClick(isPlaying)
    }, [isPlaying, onPlayClick]);

    const onClick = React.useCallback(() => {
        setIsPlaying((play) => !play)
    }, [setIsPlaying])

    return(
        <div className={styles.controlsInnerDiv}>
            <CircleButton className={styles.sideButtons}>
                <TbDots className={styles.sideIcons} />
            </CircleButton>
            <div className={styles.centerDiv}>
                <FaForward className={styles.forwardBackwardIcon} />
                <CircleButton className={styles.centreButtonDiv} onClick={onClick}>
                    {
                        !isPlaying ? <FaPause className={styles.playIcon}/> : 
                        <FaPlay className={styles.playIcon}/>
                    }
                </CircleButton>
                <FaBackward className={styles.forwardBackwardIcon} />
            </div>
            <CircleButton className={styles.sideButtons}>
                <HiVolumeUp className={styles.rightIcon} />
            </CircleButton>
        </div>
    )
})