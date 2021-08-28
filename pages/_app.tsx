import { FC } from 'react';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import Modal from 'react-modal';

import { QueryClientProvider, QueryClient } from 'react-query';

import ModalProvider from 'providers/ModalProvider';

import theme from 'startup/theme';

import GlobalStyle from 'styles/Global';

Modal.setAppElement('#__next');

const client = new QueryClient();

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={client}>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
        <CssBaseline />
        <GlobalStyle />
      </MuiThemeProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
