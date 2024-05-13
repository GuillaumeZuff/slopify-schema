import { gql } from "graphql-tag";

const SpotifyEntityEnum = gql`
  enum SpotifyEntityEnum {
    ALBUM
    ARTIST
    TRACK
  }
`;

const Evaluation = gql`
  type Evaluation {
    _id: ID!
    album: SpotifyAlbum
    artist: SpotifyArtist
    comment: String
    createdAt: DATE!
    deleted: Boolean!
    entityId: ID!
    entityType: SpotifyEntityEnum!
    grade: Float!
    track: SpotifyTrack
    userId: ID!
  }
`;

const AggregatedEvaluation = gql`
  type AggregatedEvaluation {
    id: ID!
    averageGrade: Float!
    entityId: ID!
    entityType: SpotifyEntityEnum!
    evaluationsCount: Int!
    evaluations(limit: Int, offset: Int): [Evaluation]
  }
`;

const SpotifyImage = gql`
  type SpotifyImage {
    url: String!
    height: Int!
    width: Int!
  }
`;

const SpotifyArtist = gql`
  type SpotifyArtist {
    id: ID!
    images: [SpotifyImage]
    name: String!
    type: String!
  }
`;

const SpotifyAlbum = gql`
  type SpotifyAlbum {
    id: ID!
    artists: [SpotifyArtist]
    name: String!
    images: [SpotifyImage]
    type: String!
  }
`;

const SpotifyTrack = gql`
  type SpotifyTrack {
    id: ID!
    album: SpotifyAlbum
    artists: [SpotifyArtist]
    name: String!
    type: String!
  }
`;

const SpotifyAlbumsResult = gql`
  type SpotifyAlbumsResult {
    href: String
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
    items: [SpotifyAlbum]
  }
`;

const SpotifyArtistsResult = gql`
  type SpotifyArtistsResult {
    href: String
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
    items: [SpotifyArtist]
  }
`;

const SpotifyTracksResult = gql`
  type SpotifyTracksResult {
    href: String
    limit: Int
    next: String
    offset: Int
    previous: String
    total: Int
    items: [SpotifyTrack]
  }
`;

const SpotifySearchResult = gql`
  type SpotifySearchResult {
    albums: SpotifyAlbumsResult
    artists: SpotifyArtistsResult
    tracks: SpotifyTracksResult
  }
`;

const UserProfile = gql`
  type UserProfile {
    firstname: String
    lastname: String
    locale: String
  }
`;

const User = gql`
  type User {
    _id: ID!
    profile: UserProfile
  }
`;

const Query = gql`
  scalar DATE
  type Query {
    getUser: User

    myEvaluation(entityId: ID!, entityType: ID!): Evaluation
    myEvaluations(entityIds: [ID]!, entityType: ID!): [Evaluation]

    aggregatedEvaluation(entityId: ID!, entityType: ID!): AggregatedEvaluation
    aggregatedEvaluations(
      entityIds: [ID]!
      entityType: ID!
    ): AggregatedEvaluation
  }
`;

const Mutation = gql`
  type Mutation {
    createEvaluation(
      entityId: ID!
      entityType: ID!
      grade: Int!
      comment: String
    ): Evaluation
    deleteEvaluation(evaluationId: ID!): Evaluation
    updateEvaluation(
      evaluationId: ID!
      grade: Float!
      comment: String
    ): Evaluation

    searchSpotify(
      query: String!
      market: String!
      limit: Int
      offset: Int
    ): SpotifySearchResult

    setFirstname(firstname: String!): User
    setProfile(firstname: String!): User
  }
`;

const typeDefs = [
  Query,
  Mutation,
  AggregatedEvaluation,
  Evaluation,
  SpotifyAlbum,
  SpotifyAlbumsResult,
  SpotifyArtist,
  SpotifyArtistsResult,
  SpotifyEntityEnum,
  SpotifyImage,
  SpotifySearchResult,
  SpotifyTrack,
  SpotifyTracksResult,
  User,
  UserProfile,
];

export default typeDefs;
