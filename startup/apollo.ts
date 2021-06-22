import { ApolloClient, InMemoryCache, createHttpLink, NormalizedCacheObject } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

export type GraphQLClient = ApolloClient<InMemoryCache> | ApolloClient<NormalizedCacheObject>;

const cache = new InMemoryCache();

const httpLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

const link = httpLink;

let apolloClient: GraphQLClient;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache,
  });
};

const initializeApollo = (initialState: any = null): GraphQLClient => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;
  return apolloClient;
};

export default initializeApollo;
