import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://pratikum-kennedy.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': 'E5sVhvmGk3Evyj0BliduGA2Zh4t3A5W1sIWJVroc2ebFRnwGtHv87u5fd0CFNMq5'
    }
})

export default client