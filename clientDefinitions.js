const ALBUM_FIELDS = `
    id
    artists {
    id
    name
    }
    name
    images {
    url
    }
    type
`;

const ARTIST_FIELDS = `
    id
    images {
    url
    }
    name
    type
`;

const TRACK_FIELDS = `
    id
    album {
    id
    images {
        url
    }
    name
    }
    name
    type
`;

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
