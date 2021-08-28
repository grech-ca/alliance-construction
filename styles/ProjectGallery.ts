import styled from 'styled-components';

import { ButtonBase, Typography, Link } from '@material-ui/core';

import { StyledSlider } from 'styles/Slider';

export const StyledProjectGallery = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const Header = styled.div({});

export const Content = styled.div({
  display: 'flex',

  [StyledSlider]: {
    flex: 3,
    height: 300,
    maxWidth: 550,
  },
});

export const Info = styled.div({
  flex: 2,
});

export const Heading = styled(Typography)({});

export const PortfolioLink = styled(Link)({});

export const ProjectSelect = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: theme.spacing(2, -2),
}));

interface ProjectSelectItemProps {
  $active?: boolean;
}

export const ProjectSelectItem = styled(ButtonBase)<ProjectSelectItemProps>(({ theme, $active }) => ({
  height: 150,
  maxWidth: 200,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(2),
  overflow: 'hidden',
  borderRadius: 8,
  transition: '.2s ease',
  transform: `perspective(1px) translateZ(${$active ? 0.05 : 0}px)`,
}));

export const ProjectSelectItemImage = styled.img({
  objectFit: 'cover',
  height: '100%',
  width: '100%',
});

export const ProjectSelectItemText = styled(Typography)({
  position: 'absolute',
});
