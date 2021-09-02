import { FC, Fragment } from 'react';

import NextHead from 'next/head';

import UserLayout from 'layouts/UserLayout';
import AdminLayout from 'layouts/AdminLayout';

export interface LayoutProps {
  type?: LayoutType;
  pageTitle?: string;
}

type LayoutType = 'admin' | 'user';

type Layouts = Record<LayoutType, FC>;

const layouts: Layouts = {
  user: UserLayout,
  admin: AdminLayout,
};

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  const { pageTitle = 'СК "Альянс"', type = 'user' } = props;

  const LayoutComponent = layouts[type];

  return (
    <Fragment>
      <NextHead>
        <title>{pageTitle}</title>
      </NextHead>
      <LayoutComponent {...props}>{children}</LayoutComponent>
    </Fragment>
  );
};

export default Layout;
