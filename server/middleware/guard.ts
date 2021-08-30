import jwt from 'jsonwebtoken';
import cookie from 'cookie';

import { Middleware } from 'server/middleware';

type Method = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'TRACE';

export type GuardMiddleware = (...methods: Method[]) => Middleware;

const guard: GuardMiddleware =
  (...methods) =>
  (req, res, next) => {
    const methodProtected = methods.includes(req.method as Method);

    if (!methodProtected) return next();

    if (req.headers.cookie) {
      const { authorization } = cookie.parse(req.headers.cookie);

      const tokenVerified = authorization && jwt.verify(authorization, process.env.JWT_SECRET);

      if (tokenVerified) return next();
    }

    res.status(403).send('Access denied');
  };

export default guard;
