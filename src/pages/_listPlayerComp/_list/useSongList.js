import * as React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_SONGS } from "../../../graphql/queries";

export default function useSongList(playlistId) {
  const [queryBlock, { data, loading, error }] = useLazyQuery(GET_SONGS);
  const [songDetail, setSongDetail] = React.useState(null);

  React.useEffect(() => {
    queryBlock({
      variables: {
        playlistId: playlistId,
      },
    });
  }, [queryBlock, playlistId]);

  const onClick = React.useCallback(
    (d) => {
      // setSongDetail((detail) => {
      //   if (detail !== null) {
      //     if (d === detail) {
      //       return {
      //         ...detail,
      //       };
      //     } else {
      //       return {
      //         ...d,
      //       };
      //     }
      //   } else {
      //     return {
      //       ...d,
      //     };
      //   }
      // });
      setSongDetail(d);
    },
    [setSongDetail]
  );

  const queryParameters = React.useMemo(
    () => ({
      playlistId: playlistId,
    }),
    [playlistId]
  );

  return {
    data,
    loading,
    error,
    onClick,
    queryBlock,
    queryParameters,
    songDetail,
  };
}
