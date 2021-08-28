import styled from 'styled-components';

import { AppBar, Toolbar, Link } from '@material-ui/core';

export const StyledHeader = styled(AppBar).attrs({ position: 'static' })({});

export const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(1, 4),
  justifyContent: 'space-between',
  width: '100%',
}));

export const HeaderLogo = styled(Link).attrs({ href: '/', variant: 'h5' })({
  display: 'flex',
  fontSize: 20,
  fontWeight: 700,
  color: '#fff',

  ':hover, :focus': {
    textDecoration: 'none',
  },
});

export const HeaderNavigation = styled.nav({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flex: 1,
});

export const Links = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const HeaderLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  margin: theme.spacing(2),
  color: '#fff',
}));

export const HeaderPhone = styled(Link).attrs({ variant: 'body1' })({
  color: '#fff',
  textDecoration: 'none',
});
