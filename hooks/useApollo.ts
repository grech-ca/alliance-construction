import { useMemo } from 'react';

import initializeApollo, { GraphQLClient } from 'startup/apollo';

const useApollo = (initialState: any = null): GraphQLClient => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};

export default useApollo;
