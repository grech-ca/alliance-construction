import { FC } from 'react';

import { Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import { StyledAppBar, MenuButton } from 'styles/Admin';

export interface AppBarProps {
  onMenuClick: () => void;
  heading: string;
}

const AppBar: FC<AppBarProps> = ({ onMenuClick, heading }) => (
  <StyledAppBar>
    <Toolbar>
      <MenuButton color='inherit' aria-label='open drawer' edge='start' onClick={onMenuClick}>
        <Menu />
      </MenuButton>
      <Typography variant='h6' noWrap>
        {heading}
      </Typography>
    </Toolbar>
  </StyledAppBar>
);

export default AppBar;
