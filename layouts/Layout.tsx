import { FC, Fragment, useState, useEffect } from 'react';

import { Router } from 'next/router';
import NextHead from 'next/head';

import { Fade } from '@material-ui/core';

import UserLayout from 'layouts/UserLayout';
import AdminLayout from 'layouts/AdminLayout';

import { PageProgress } from 'styles/Layout';

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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <Fragment>
      <NextHead>
        <title>{pageTitle}</title>
      </NextHead>
      <Fade in={loading}>
        <PageProgress />
      </Fade>
      <LayoutComponent {...props}>{children}</LayoutComponent>
    </Fragment>
  );
};

export default Layout;
