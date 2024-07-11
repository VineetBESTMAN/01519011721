// src/graphql/client.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_API_ENDPOINT', // replace with your actual endpoint
  cache: new InMemoryCache(),
});

export default client;
