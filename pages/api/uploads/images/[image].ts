import { NextApiHandler } from 'next';

import prisma from '../../../../server/prisma';

const imageHandler: NextApiHandler = (req, res) => {
  const filename = req.query.image;

  void prisma.file
    .findUnique({ where: { id: ~~filename } })
    .then(({ data }) => {
      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Length': data.length,
      });

      void res.end(data);
    })
    .catch(() => void res.send('Not Found'));
};

export default imageHandler;
