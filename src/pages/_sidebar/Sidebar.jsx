import * as React from 'react';
import styles from './Sidebar.module.css';
import image from '../../spotify_logo.svg';
import { SidebarListItem } from './_item/SidebarListItem';
import { Image } from '../../ui-components';
import profileImage from '../../profile.png'
import { WithLoading } from "../../util-components/"
import useSidebar from './useSidebar';

export const Sidebar = React.memo(({ onClick, id }) => {
    const { data, loading } = useSidebar(onClick);

    const listItems = React.useMemo(() => {
        return data?.getPlaylists?.map((d) => {
            return <SidebarListItem playlist={d} onClick={onClick} playlistId={id} />
        });
    }, [data, onClick, id]);

    return(
            <div className={styles.sidebarContainer}>
                <div className={styles.logoContainer}>
                    <object className={styles.logoStyle} data={image} aria-labelledby="Profile Logo"></object>
                </div>
                <div className={styles.listContainer}>
                    <WithLoading loading={loading}>
                        {listItems}
                    </WithLoading>
                </div>
                <div className={styles.profileIconContainer}>
                    <Image src={profileImage} className={styles.profileIconImage}/>
                </div>
            </div>
    )
});