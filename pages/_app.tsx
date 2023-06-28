import { ApolloProvider } from '@apollo/client';
import apolloClient from 'graphql/apollo-client';

import '../global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
