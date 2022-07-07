import * as React from "react";

import { useQuery } from "@apollo/client";
import { GET_PLAYLISTS } from "../../graphql/queries";

export default function useSidebar(onClick) {
  const { data, loading } = useQuery(GET_PLAYLISTS);

  React.useEffect(() => {
    if (data !== undefined) {
      onClick(data?.getPlaylists[0].id);
    }
  }, [onClick, data]);

  return {
    data,
    loading,
  };
}
