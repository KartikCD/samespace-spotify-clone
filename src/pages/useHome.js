import * as React from "react";

export default function useHome() {
  const [playlistId, setPlaylistId] = React.useState();
  const [dominantColor, setDominantColor] = React.useState("#201606");

  const onDominantColorChange = React.useCallback(
    (color) => {
      setDominantColor(color);
    },
    [setDominantColor]
  );

  const getSongDetails = React.useCallback(
    (d) => {
      setPlaylistId(d);
    },
    [setPlaylistId]
  );

  const initialState = React.useMemo(
    () => ({
      changeDominantColor: onDominantColorChange,
      dominantColor,
    }),
    [dominantColor, onDominantColorChange]
  );

  return { getSongDetails, playlistId, initialState, dominantColor };
}
