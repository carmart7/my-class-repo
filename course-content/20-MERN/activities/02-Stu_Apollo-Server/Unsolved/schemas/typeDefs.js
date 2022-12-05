const { gql } = require('apollo-server-express');
// # TODO: Add a comment describing the functionality of this statement
// 

// # TODO: Add a comment describing the functionality of this statement
// defines the Class and Query we can use in our requests
const typeDefs = gql`
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
