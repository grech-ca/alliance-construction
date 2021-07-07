import { FC } from 'react';

import { AppProps } from 'next/app';

import Modal from 'react-modal';

import ModalProvider from 'providers/ModalProvider';

import 'styles/index.scss';

Modal.setAppElement('#__next');

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ModalProvider>
      <Component {...pageProps} />
      <style jsx>{`
        :global(.js-focus-visible) :focus:not(.focus-visible) {
          outline: none;
        }
      `}</style>
    </ModalProvider>
  );
};

export default App;
