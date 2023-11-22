 const typeDefs = `
    type User {
        id: String!
        username: String
        name: String!
        email: String!
        image: StringS
    }

    type CreateUsernameResponse {
        success: Boolean!
        error: String
    }

    type Query {
        searchUsers(id: String): [User!]!
    }

    type Mutation {
        createUsername(username: String!): User!
    }
`;

export default typeDefs;