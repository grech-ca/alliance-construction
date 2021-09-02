import { FC } from 'react';

import { Hidden } from '@material-ui/core';

import SidebarContent from 'components/admin/SidebarContent';

import { StyledSidebar, Nav } from 'styles/Admin';

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
  window?: () => Window;
}

const Sidebar: FC<SidebarProps> = ({ window, mobileOpen, onClose }) => {
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Nav>
      <Hidden smUp>
        <StyledSidebar
          container={container}
          variant='temporary'
          anchor='left'
          open={mobileOpen}
          onClose={onClose}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <SidebarContent />
        </StyledSidebar>
      </Hidden>
      <Hidden xsDown>
        <StyledSidebar variant='permanent' open>
          <SidebarContent />
        </StyledSidebar>
      </Hidden>
    </Nav>
  );
};

export default Sidebar;
