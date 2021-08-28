import styled from 'styled-components';

import { Typography } from '@material-ui/core';

export const StyledFooter = styled.footer(({ theme }) => ({
  backgroundColor: '#ccc',
  padding: theme.spacing(3),
  marginTop: theme.spacing(10),
}));

export const Links = styled.div(({ theme }) => ({
  display: 'flex',
  margin: theme.spacing(0, -2),
}));

export const Column = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: theme.spacing(0, 2),
}));

export const Copyright = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(10),
}));
