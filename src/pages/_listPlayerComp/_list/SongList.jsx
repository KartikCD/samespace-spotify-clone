import * as React from "react";
import { WithLoading } from "../../../util-components/";
import useSongList from "./useSongList";
import { SongListItem } from "./_item/SongListItem";
import styles from "./SongList.module.css";
import { HeaderTitle, SearchBar } from "../../../ui-components";
import { Player } from "./_player/Player";
import { useTranslation } from 'react-i18next'

export const SongList = React.memo(({ playlistId }) => {
  const { data, loading, onClick, queryBlock, queryParameters, songDetail } =
    useSongList(playlistId);

  const { t } = useTranslation();

  const listItems = React.useMemo(() => {
    return data?.getSongs?.map((d) => {
      return <SongListItem data={d} onClick={onClick} songDetail={songDetail} />;
    });
  }, [data, onClick, songDetail]);

  return (
    <>
      <div className={styles.outerDiv}>
        <div className={styles.headerTitleDiv}>
          <HeaderTitle>{t("foryou")}</HeaderTitle>
        </div>
        <div className={styles.searchBarDiv}>
          <SearchBar
            queryBlock={queryBlock}
            queryParameters={queryParameters}
          />
        </div>
        <WithLoading loading={loading}>{listItems}</WithLoading>
      </div>
      <div className={styles.playerOuterDiv}>
        {
          songDetail ? <Player songDetail={songDetail} /> : <></>
        }
      </div>
    </>
  );
});
