import jwt from 'jsonwebtoken';
import { clone } from 'lodash';
import nextCookie from 'next-cookies';

import { NextPage, NextPageContext } from 'next';
import redirect from 'helpers/redirect';

const withAuth = (Component: NextPage): NextPage => {
  const OldComponent = clone(Component);

  Component.getInitialProps = (ctx: NextPageContext) => {
    const { authorization } = nextCookie(ctx);

    console.log(authorization);

    if (!authorization) {
      redirect(ctx, '/admin/login');
      return {};
    }

    try {
      jwt.verify(authorization, process.env.JWT_SECRET);

      if (OldComponent.getInitialProps) return OldComponent.getInitialProps(ctx);
      return {};
    } catch (err) {
      redirect(ctx, '/admin/login');
    }

    return {};
  };

  return Component;
};

export default withAuth;
