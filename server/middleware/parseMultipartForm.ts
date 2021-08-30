import formidable from 'formidable';

import { Middleware } from 'server/middleware';

const form = formidable({ multiples: true });

const parseMultipartForm: Middleware = (req, res, next) => {
  const contentType = req.headers['content-type'];

  if (contentType && contentType.indexOf('multipart/form-data') !== -1) {
    form.parse(req, (err, fields, files) => {
      if (!err) {
        req.body = { ...fields, ...files }; // sets the body field in the request object
        // req.files = files; // sets the files field in the request object
      }

      next(); // continues to the next middleware or to the route
    });
  } else {
    next();
  }
};

export default parseMultipartForm;

// Article about using multipart data in nextjs
// https://chadalen.com/blog/how-to-use-a-multipart-form-in-nextjs-using-api-routes
