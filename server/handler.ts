import { NextApiRequest, NextApiResponse } from 'next';

import nextConnect, { NextConnect, ErrorHandler, Options } from 'next-connect';
import chalk from 'chalk';

import commonMiddlewares from 'server/middleware';
import guard, { GuardMiddleware } from 'server/middleware/guard';

interface HandlerParams {
  guard: Parameters<GuardMiddleware>;
}

const onError: ErrorHandler<NextApiRequest, NextApiResponse> = (err, req, res) => {
  res.send('Internal server error');
  console.log(chalk.red(err));
};

const customHandler = (
  handlerParams?: HandlerParams,
  options?: Options<NextApiRequest, NextApiResponse>,
): NextConnect<NextApiRequest, NextApiResponse> => {
  const handler = nextConnect({ onError, ...options });

  handler.use(...commonMiddlewares);

  if (handlerParams) {
    if ('guard' in handlerParams) handler.use(guard(...handlerParams.guard));
  }

  return handler;
};

export default customHandler;
