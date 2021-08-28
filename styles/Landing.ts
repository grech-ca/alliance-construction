import styled from 'styled-components';

import { Typography } from '@material-ui/core';

export const About = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: theme.spacing(13),
}));

export const AboutContent = styled(Typography)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const AboutImage = styled.img(({ theme }) => ({
  marginLeft: theme.spacing(3),
  width: '40vw',
  objectFit: 'cover',
}));
