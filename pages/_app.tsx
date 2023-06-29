import { ApolloProvider } from '@apollo/client';
import apolloClient from 'graphql/apollo-client';

import '../global.css'

if (process.env.NODE_ENV === 'development') {
  // Enable API mocking in the browser
  const { default: createBrowserWorker } = require('mocks/browser')
  createBrowserWorker();
}

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
