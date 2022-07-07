import * as React from "react";
import { HeaderTitle, Image, Slider } from "../../../../ui-components";
import styles from "./Player.module.css";
import usePlayer from "./usePlayer";
import { Controls } from "./_controls/Controls";

export const Player = React.memo(({ songDetail }) => {
  const { title, photo, artist, url } = songDetail;
  const { audioRef, percentage, getCurrentDuration, onLoadedData, onPlayClick, onPercentChange } = usePlayer(photo)  
  return (
    <>
      <div>
        <HeaderTitle>{title}</HeaderTitle>
        <p className={styles.artistText}>{artist}</p>
      </div>
      <div className={styles.playerImageDiv}>
        <Image src={photo} alt={title} className={styles.imageStyle}/>
      </div>
      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={getCurrentDuration}
        onLoadedData={onLoadedData}
        autoPlay
      />
      <div className={styles.sliderDiv}>
        <Slider percentage={percentage} onChange={onPercentChange} />
      </div>
      <div className={styles.controlsDiv}>
        <Controls onPlayClick={onPlayClick}/>
      </div>
    </>
  );
});
