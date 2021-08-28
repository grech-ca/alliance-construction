import styled from 'styled-components';

import { Typography } from '@material-ui/core';

export const Contacts = styled.div(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: theme.spacing(0, -2),
  marginTop: theme.spacing(-2),
}));

export const ContactsItem = styled.div(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  margin: theme.spacing(0, 2),
  marginTop: theme.spacing(2),
  minWidth: 280,
  maxWidth: 280,
}));

export const ContactsLabel = styled(Typography).attrs({
  variant: 'h6',
  component: 'h6',
})(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
}));

export const ContactsValue = styled(Typography)({});
