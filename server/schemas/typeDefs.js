const { gql } = require("apollo-server-express");

const typeDefs = `

    type query {
    me: User
  
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    bookId: String  
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  typeAuth {
    token: ID!
    user: User
  }

 input InputBook {
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    forSale: String
    link: String
  }

 type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(newBook: InputBook): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
