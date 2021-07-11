import { FC } from 'react';

import { AppProps } from 'next/app';

import { QueryClientProvider, QueryClient } from 'react-query';

import Modal from 'react-modal';

import ModalProvider from 'providers/ModalProvider';

import 'styles/index.scss';

Modal.setAppElement('#__next');

const client = new QueryClient();

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={client}>
      <ModalProvider>
        <Component {...pageProps} />
        <style jsx>{`
          :global(.js-focus-visible) :focus:not(.focus-visible) {
            outline: none;
          }
        `}</style>
      </ModalProvider>
    </QueryClientProvider>
  );
};

export default App;
