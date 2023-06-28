import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    // NOTE: This is a fake url because every query will be mocked by msw
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
});

export default client;