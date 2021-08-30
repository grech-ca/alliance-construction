import { NextApiRequest, NextApiResponse } from 'next';

import parseMultipartForm from 'server/middleware/parseMultipartForm';

export type Middleware = (req: NextApiRequest, res: NextApiResponse, next: (error?: Error) => void) => void;

const commonMiddlewares = [parseMultipartForm];

export default commonMiddlewares;
