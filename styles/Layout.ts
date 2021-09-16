import styled from 'styled-components';

import { alpha } from '@material-ui/core/styles';

import { Typography, Drawer, LinearProgress } from '@material-ui/core';

export const StyledLayout = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const Heading = styled(Typography).attrs({ variant: 'h4', component: 'h1' })(({ theme }) => ({
  color: theme.palette.primary.main,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(5),
}));

export const StyledLoadingOverlay = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: alpha('#fff', 0.9),
  zIndex: 10,
});

export const PageProgress = styled(LinearProgress)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 2000,
});
