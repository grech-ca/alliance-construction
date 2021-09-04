import { ComponentProps } from 'react';

import styled from 'styled-components';

import { AppBar, IconButton, Drawer, Paper, InputBase } from '@material-ui/core';

export const DRAWER_WIDTH = 240;

export const StyledAdminLayout = styled.div({
  display: 'flex',
});

export const StyledAppBar = styled(AppBar).attrs({
  position: 'fixed',
})(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
  },
}));

export const StyledSidebar = styled(Drawer)(({ theme }) => ({
  '.MuiPaper-root': {
    width: DRAWER_WIDTH,
    paddingTop: theme.spacing(8),
  },
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const Nav = styled.nav(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
}));

export const Main = styled.main(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(3),
  marginTop: 56,

  [theme.breakpoints.sm]: {
    marginTop: 64,
  },

  [theme.breakpoints.xs]: {
    marginTop: 48,
  },
}));

export const SidebarIcon = styled.svg({});

export const MapContainer = styled(Paper)({
  width: '100%',
  height: 400,
  overflow: 'hidden',
});

export const InformationForm = styled.form({
  width: 600,
});

export const StyledProjectsFilter = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  flexWrap: 'wrap',
}));

export const Search = styled.div(({ theme }) => ({
  display: 'inline-flex',
  background: '#ececec',
  borderRadius: 4,
  padding: theme.spacing(0.5, 1),
  alignItems: 'center',
  transition: '.2s ease-in-out',
  width: 180,

  ':focus, :hover': {
    backgroundColor: '#f3f3f3',
  },
}));

export const SearchIcon = styled.svg(({ theme }) => ({
  marginRight: theme.spacing(1),
  color: '#999',
}));

export const SearchInput = styled(InputBase)({
  flex: 1,
});
