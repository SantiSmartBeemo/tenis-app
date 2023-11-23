import { gql } from '@apollo/client/core';

const userGraphql = {
    Queries: {},
    Mutations: {
        createUsername: gql`
            mutation createUsername($username: String!) {
                createUsername(username: $username) {
                    success
                    error
                }
            }
        `,
    },
    Subscriptions: {},
};

export default userGraphql;
