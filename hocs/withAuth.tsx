import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { clone } from 'lodash';

import { NextPage, NextPageContext } from 'next';
import redirect from 'helpers/redirect';

const withAuth = (Component: NextPage): NextPage => {
  const OldComponent = clone(Component);

  Component.getInitialProps = (ctx: NextPageContext) => {
    const { req } = ctx;

    if (!req.headers.cookie) {
      redirect(ctx, '/admin/login');
      return {};
    }

    const { authorization } = cookie.parse(req.headers.cookie);

    if (!authorization) {
      redirect(ctx, '/admin/login');
      return {};
    }

    try {
      jwt.verify(authorization, process.env.JWT_SECRET);

      if (OldComponent.getInitialProps) return OldComponent.getInitialProps(ctx);
      return {};
    } catch {
      redirect(ctx, '/admin/login');
    }

    return {};
  };

  return Component;
};

export default withAuth;
