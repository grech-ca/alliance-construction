import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

import nextConnect from 'next-connect';
import { omit } from 'lodash';

import sql from 'helpers/sql';
import sqlValues from 'helpers/sqlValues';
import sqlWhere from 'helpers/sqlWhere';

import middleware from 'server/middleware';
import extractBufferData from 'helpers/extractBufferData';

interface ProjectsImageRelation {
  image: number;
  project: number;
}
export interface Project {
  id: number;
  bedrooms: number;
  price: number;
  build_price: number;
  type: string;
  floors: number;
  images: number[];
}

export const config = {
  api: {
    bodyParser: false,
  },
};

const projectsHandler = nextConnect<NextApiRequest, NextApiResponse>()
  .use(middleware)
  .get(async (req, res) => {
    try {
      const search = req.query.search as string;

      const projects = await sql<Project[]>`SELECT * FROM projects ${
        search ? sqlWhere({ id: { $like: `${search}%` } }) : ''
      };`;

      const projectsWithPhotos = projects.map(project => {
        return new Promise(resolve => {
          void sql<
            ProjectsImageRelation[]
          >`SELECT image FROM projects_images_relation WHERE project=${project.id}`.then(images => {
            resolve({
              ...project,
              images: images.map(({ image }) => image),
            });
          });
        });
      });

      void Promise.all(projectsWithPhotos).then(data => res.json(data));
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server error');
    }
  })
  .post(async (req, res) => {
    try {
      const { insertId: projectId } = await sql`INSERT INTO projects ${sqlValues(omit(req.body, 'photos'))}`;
      const projects = await sql<Project[]>`SELECT * FROM projects WHERE id = ${projectId}`;

      const photos = Array.isArray(req.body.photos) ? req.body.photos : [req.body.photos];

      if (photos) {
        const photosPromises = photos.map((photo: any) => {
          return new Promise(resolve => {
            return fs.readFile(photo.path, (err, buffer) => resolve(buffer));
          });
        });

        await Promise.all(photosPromises).then(photos => {
          const photoIds = photos.map(photo => {
            return new Promise(resolve => {
              void sql`INSERT INTO files ${sqlValues({
                type: 'image',
                data: JSON.stringify(extractBufferData(photo as Buffer)),
              })}`.then(({ insertId }: any) => resolve(insertId));
            });
          });

          void Promise.all(photoIds).then(photos => {
            photos.forEach(photoId => {
              sql`INSERT INTO projects_images_relation ${sqlValues({
                project: projectId,
                image: photoId as number,
              })}`;
            });
          });
        });
      }

      if (!projects.length) {
        res.status(404);
      }

      res.json(projects[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server error');
    }
  });

export default projectsHandler;
