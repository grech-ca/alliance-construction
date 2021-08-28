import { ComponentProps } from 'react';

import styled from 'styled-components';

import { Typography, ButtonBase } from '@material-ui/core';

export const ProjectList = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gridAutoRows: 300,
  margin: theme.spacing(-2),
}));

export const ProjectItem = styled(ButtonBase).attrs({
  component: 'a',
})<ComponentProps<'a'>>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  height: '100%',
  borderRadius: 8,
  padding: theme.spacing(2),
}));

export const ProjectPhoto = styled.img({
  objectFit: 'cover',
  width: '100%',
  height: '85%',
  borderRadius: 8,
  pointerEvents: 'none',
});

export const ProjectName = styled(Typography).attrs({
  variant: 'h6',
  component: 'h6',
})(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'flex-end',
  color: theme.palette.primary.main,
}));
