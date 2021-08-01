import { NextApiHandler } from 'next';

import sql from 'helpers/sql';

interface FileType {
  data: string;
  type: 'document' | 'image';
}

const imageHandler: NextApiHandler = (req, res) => {
  try {
    const { image } = req.query;

    const imageId = parseInt(Array.isArray(image) ? image[0] : image);

    if (!imageId) return res.status(404).send('Not Found');

    void sql<FileType[]>`SELECT data FROM files WHERE type="image" AND id=${imageId}`.then(data => {
      if (!data.length) return res.status(404).send('Not Found');

      const file = data[0];

      const buffer = Buffer.from(JSON.parse(file.data));

      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Length': buffer.length,
      });

      void res.end(buffer);
    });
  } catch (err) {
    console.error(err);
  }
};

export default imageHandler;
