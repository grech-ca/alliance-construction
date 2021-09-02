import styled from 'styled-components';

import { AppBar, IconButton, Drawer, Paper } from '@material-ui/core';

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
