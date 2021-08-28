import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
  'html, body, #__next': {
    height: '100%',
  },

  '#__next': {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default GlobalStyle;
