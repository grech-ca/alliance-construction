import { FC, useState, useCallback } from 'react';

import AppBar from 'components/admin/AppBar';
import Sidebar from 'components/admin/Sidebar';

import { LayoutProps } from 'layouts/Layout';

import { StyledAdminLayout, Main } from 'styles/Admin';

const AdminLayout: FC<LayoutProps> = ({ children, pageTitle }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = useCallback(() => setMobileOpen(prev => !prev), []);

  return (
    <StyledAdminLayout>
      <Sidebar onClose={toggleDrawer} mobileOpen={mobileOpen} />
      <AppBar onMenuClick={toggleDrawer} heading={pageTitle} />
      <Main>{children}</Main>
    </StyledAdminLayout>
  );
};

export default AdminLayout;
