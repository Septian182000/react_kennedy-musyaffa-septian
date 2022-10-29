import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: 'https://pratikum-kennedy.hasura.app/v1/graphql',
  headers: {
    "x-hasura-admin-secret": 'E5sVhvmGk3Evyj0BliduGA2Zh4t3A5W1sIWJVroc2ebFRnwGtHv87u5fd0CFNMq5',
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://pratikum-kennedy.hasura.app/v1/graphql',
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": 'E5sVhvmGk3Evyj0BliduGA2Zh4t3A5W1sIWJVroc2ebFRnwGtHv87u5fd0CFNMq5',
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
