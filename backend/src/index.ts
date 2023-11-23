import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

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
        createUsername(username: String!): CreateUsernameResponse!
    }

    type Subscription {
        turnamentAdded(id: String!): Turnament!
    }
`;

const resolvers = {
    Query: {
        searchUsers: () => {
            console.log('searchUsersssss');
            // Aquí iría la lógica para buscar usuarios
        },
    },
    Mutation: {
        createUsername: (_: any, args:{ username:string }, context: any) => {
            const { username } = args;
            console.log('createUsername', context.session);
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
    const { url } = await startStandaloneServer(server, { 
        context: async ({ req, res }) => ({
            session: await getSession({ req }),
        }),
        listen: { port: 4000 }}
        );
    console.log(`🚀 Server listening at: ${url}`);
};



startServer();
