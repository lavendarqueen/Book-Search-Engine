import { gql } from "@apollo/client";

export const login = gql`
  mutation login($email1: String!, $password2: String!) {
    login(email1: $email1, password2: $password2, ) {
      _id
      email1
      password2
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      savedBooks1
      searchBooks2
      savedBooks1_votes
      searchBooks2_votes
    }
  }
`;
