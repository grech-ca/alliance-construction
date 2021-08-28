import { ComponentProps } from 'react';

import styled from 'styled-components';

import { ButtonBase, Typography } from '@material-ui/core';

export const ProjectList = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gridAutoRows: 300,
  margin: theme.spacing(-2),
}));

export const Project = styled(ButtonBase).attrs({
  component: 'a',
})<ComponentProps<'a'>>(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
}));

export const Photo = styled.img({
  objectFit: 'cover',
  width: '100%',
  height: '80%',
  borderRadius: 8,
  pointerEvents: 'none',
});

export const Info = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ProjectNumber = styled(Typography).attrs({
  variant: 'h4',
  component: 'h6',
})({});

export const InfoItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const InfoLabel = styled(Typography)({});

export const InfoValue = styled(Typography)({});
