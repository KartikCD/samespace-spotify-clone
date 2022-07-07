import { gql } from '@apollo/client';

export const GET_SONGS = gql`
  query getSongs($playlistId: Int!, $search: String) {
    getSongs(playlistId: $playlistId, search: $search) {
      _id
      title
      photo
      url
      duration
      artist
    }
  }
`;

export const GET_PLAYLISTS = gql`
  query getPlaylists {
    getPlaylists {
      id
      title
    }
  }
`