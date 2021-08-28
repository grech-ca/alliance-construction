import styled from 'styled-components';

import { IconButton, Typography } from '@material-ui/core';

export const StyledSlider = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  height: 600,
});

export const Content = styled.div({
  flex: 1,
  display: 'flex',
  justifyContent: 'stretch',
  alignItems: 'flex-start',
  overflow: 'hidden',
});

export const Image = styled.img.attrs({ role: 'button', draggable: false })({
  objectFit: 'cover',
  height: '100%',
  width: '100%',
});

export const Header = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const Control = styled.div({
  display: 'inline-flex',
  alignItems: 'center',
});

export const ControlIcon = styled.svg({});

export const ControlButton = styled(IconButton)({
  padding: 10,
  height: 40,
  width: 40,
});

export const SlidesCount = styled(Typography)({});
