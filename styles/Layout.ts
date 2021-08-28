import styled from 'styled-components';

import { Typography } from '@material-ui/core';

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
