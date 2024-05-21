const SEARCH_SPOTIFY = gql`
  mutation searchSpotify(
    $query: String!
    $market: String!
    $limit: Int
    $offset: Int
  ) {
    searchSpotify(
      query: $query
      market: $market
      limit: $limit
      offset: $offset
    ) {
      albums {
        href
        limit
        next
        offset
        previous
        total
        items {
          ${ALBUM_FIELDS}
        }
      }
      artists {
        href
        limit
        next
        offset
        previous
        total
        items {
          ${ARTIST_FIELDS}
        }
      }
      tracks {
        href
        limit
        next
        offset
        previous
        total
        items {
          ${TRACK_FIELDS}
        }
      }
    }
  }
`;
