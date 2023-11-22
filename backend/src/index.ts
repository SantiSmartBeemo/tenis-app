import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `
    type User {
        id: String!
        username: String
        name: String!
        email: String!
        image: String
    }

    type Turnament {
        id: String!
        name: String!
        description: String!
        image: String
        date: String!
        time: String!
        location: String!
        players: [User!]!
        creator: User!
        createdAt: String!
        updatedAt: String!
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

    type Subscription {
        turnamentAdded(id: String!): Turnament!
    }
`;

const resolvers = {
    Query: {
        searchUsers: () => {
            console.log('searchUsers');
            // Aquí iría la lógica para buscar usuarios
        },
    },
    Mutation: {
        createUsername: () => {
            console.log('createUsername');
            // Aquí iría la lógica para crear un nombre de usuario
        },
    },
    Subscription: {
        turnamentAdded: {
            subscribe: () => {
                console.log('turnamentAdded');
                // Aquí iría la lógica para la suscripción turnamentAdded
            }
        }
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startServer = async () => {
    const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
    console.log(`🚀 Server listening at: ${url}`);
};

startServer();
