import { FC } from 'react';

import { AppProps } from 'next/app';

import { ApolloProvider } from '@apollo/client';
import Modal from 'react-modal';

import ModalProvider from 'providers/ModalProvider';

import useApollo from 'hooks/useApollo';

import 'styles/index.scss';

Modal.setAppElement('#__next');

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ApolloProvider>
  );
};

export default App;
