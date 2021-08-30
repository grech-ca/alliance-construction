import styled from 'styled-components';

import { TextField, Typography, Paper, Button } from '@material-ui/core';

export const StyledLoginPage = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  flex: 1,
});

export const FormWrapper = styled(Paper)({
  position: 'relative',
  overflow: 'hidden',
});

export const Form = styled.form(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 400,
  padding: theme.spacing(4),
}));

export const Heading = styled(Typography).attrs({
  component: 'h1',
})(({ theme }) => ({
  fontSize: 24,
  marginBottom: theme.spacing(4),
}));

export const Field = styled(TextField).attrs({
  variant: 'outlined',
})(() => ({}));

export const Submit = styled(Button).attrs({
  variant: 'contained',
  type: 'submit',
  color: 'primary',
})(({ theme }) => ({
  marginTop: theme.spacing(2),
  height: 40,
}));
