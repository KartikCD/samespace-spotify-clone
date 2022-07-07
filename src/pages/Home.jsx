import * as React from "react";
import { SongList } from "./_listPlayerComp/_list/SongList";
import styles from "./Home.module.css";
import { Sidebar } from "./_sidebar/Sidebar";
import useHome from "./useHome";
import { LayoutContextProvider } from "./_listPlayerComp/_context/LayoutContextProvider";

const Home = React.memo(() => {
  const { playlistId, getSongDetails, initialState, dominantColor } = useHome();

  return (
    <LayoutContextProvider initialState={initialState}>
      <div
        className={styles.homeDivStyle}
        style={{
          background: `linear-gradient(108.18deg, ${dominantColor} 2.46%, #000000 99.84%)`,
        }}
      >
        <Sidebar onClick={getSongDetails} id={playlistId} />
        <SongList playlistId={playlistId} />
      </div>
    </LayoutContextProvider>
  );
});

export default Home;
