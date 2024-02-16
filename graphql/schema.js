const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Employee {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    salary: Float!
  }
  type DeleteEmployeeResponse {
    id: ID!
    message: String!
  }

  type Query {
    login(username: String!, password: String!): User
    getEmployees: [Employee]
    getEmployee(id: ID!): Employee
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): User
    addEmployee(first_name: String!, last_name: String!, email: String!, gender: String!, salary: Float!): Employee
    updateEmployee(id: ID!, first_name: String, last_name: String, email: String, gender: String, salary: Float): Employee
    deleteEmployee(id: ID!): DeleteEmployeeResponse
  }
`;

module.exports = typeDefs;
