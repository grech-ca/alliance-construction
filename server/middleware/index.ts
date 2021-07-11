import nextConnect from 'next-connect';

import parseMultipartForm from './parseMultipartForm';

const middleware = nextConnect();

middleware.use(parseMultipartForm);

export default middleware;
