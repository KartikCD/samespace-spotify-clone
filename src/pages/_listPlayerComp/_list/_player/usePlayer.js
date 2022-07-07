import * as React from "react";
import ColorThief from "colorthief";
import { rgbToHex } from "../../../../color/rgbToHex";
import { LayoutContext } from "../../_context/LayoutContextProvider";

export default function usePlayer(photo) {
  const [percentage, setPercentage] = React.useState(0);
  // eslint-disable-next-line no-unused-vars
  const [currentTime, setCurrentTime] = React.useState(0);
  // eslint-disable-next-line no-unused-vars
  const [duration, setDuration] = React.useState(0);
  const audioRef = React.useRef();
  const { changeDominantColor } = React.useContext(LayoutContext);

  React.useEffect(() => {
    const colorThief = new ColorThief();
    const img = new Image();

    img.addEventListener("load", function () {
      const colors = colorThief.getColor(img);
      const hexColor = rgbToHex(colors[0], colors[1], colors[2]);
      changeDominantColor(hexColor);
    });

    const googleProxyURL =
      "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";
    img.crossOrigin = "anonymous";
    img.src = googleProxyURL + encodeURIComponent(photo);
  }, [photo, changeDominantColor]);

  const getCurrentDuration = React.useCallback(
    (e) => {
      const percent = (
        (e.currentTarget.currentTime / e.currentTarget.duration) *
        100
      ).toFixed(2);
      const time = e.currentTarget.currentTime;
      setPercentage(+percent);
      setCurrentTime(time.toFixed(2));
    },
    [setPercentage, setCurrentTime]
  );

  const onLoadedData = React.useCallback(
    (e) => {
      setDuration(e.currentTarget.duration.toFixed(2));
    },
    [setDuration]
  );

  const onPlayClick = React.useCallback(
    (play) => {
      const audio = audioRef.current;
      audio.volume = 0.1;

      if (play) {
        audio.pause();
      } else if (!play) {
        audio.play();
      }
    },
    [audioRef]
  );

  const onPercentChange = React.useCallback(
    (e) => {
      const audio = audioRef.current;
      audio.currentTime = (audio.duration / 100) * e.target.value;
      setPercentage(e.target.value);
    },
    [setPercentage, audioRef]
  );

  return {
    audioRef,
    percentage,
    getCurrentDuration,
    onLoadedData,
    onPlayClick,
    onPercentChange,
  };
}
