import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query me {
    user {
      _id
      name
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      user1
      user2
      user1_votes
      user2_votes
    }
  }
`;