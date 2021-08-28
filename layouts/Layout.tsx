import { FC, Fragment } from 'react';

import NextHead from 'next/head';

import UserLayout from 'layouts/UserLayout';
import AdminLayout from 'layouts/AdminLayout';

interface LayoutProps {
  type?: LayoutType;
  pageTitle?: string;
}

type LayoutType = 'admin' | 'user';

type Layouts = Record<LayoutType, FC>;

const layouts: Layouts = {
  user: UserLayout,
  admin: AdminLayout,
};

const Layout: FC<LayoutProps> = ({ pageTitle = 'СК "Альянс"', type = 'user', children }) => {
  const LayoutComponent = layouts[type];

  return (
    <Fragment>
      <NextHead>
        <title>{pageTitle}</title>
      </NextHead>
      <LayoutComponent>{children}</LayoutComponent>
    </Fragment>
  );
};

export default Layout;
