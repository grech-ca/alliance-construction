import styled, { CSSProperties } from 'styled-components';

import { IconButton, Typography } from '@material-ui/core';

export const StyledSlider = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  height: 600,
  marginBottom: theme.spacing(4),
}));

export const Content = styled.div({
  flex: 1,
  display: 'flex',
  justifyContent: 'stretch',
  alignItems: 'flex-start',
  overflow: 'hidden',
  borderRadius: 8,
});

interface ImageProps {
  objectFit: CSSProperties['objectFit'];
}

export const Image = styled.img.attrs({ role: 'button', draggable: false })<ImageProps>(({ objectFit = 'cover' }) => ({
  objectFit,
  height: '100%',
  width: '100%',
  backgroundColor: '#eee',
}));

export const Header = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const Control = styled.div(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

export const ControlIcon = styled.svg({});

export const ControlButton = styled(IconButton)({
  padding: 10,
  height: 40,
  width: 40,
});

export const SlidesCount = styled(Typography)({});
