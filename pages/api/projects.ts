import { NextApiRequest, NextApiResponse } from 'next';

import nextConnect from 'next-connect';

import sql from 'helpers/sql';
import sqlValues from 'helpers/sqlValues';

interface Project {
  id: number;
  bedrooms: number;
  price: number;
  build_price: number;
  type: string;
  floors: number;
}

const projectsHandler = nextConnect<NextApiRequest, NextApiResponse>()
  .get(async (req, res) => {
    const projects = await sql`SELECT * FROM projects;`;
    res.json(projects);
  })
  .post(async (req, res) => {
    try {
      const { insertId } = await sql`INSERT INTO projects ${sqlValues(req.body)}`;
      const projects = await sql<Project[]>`SELECT * FROM projects WHERE id = ${insertId}`;

      if (!projects.length) {
        res.status(404);
      }

      res.json(projects[0]);
    } catch (err) {
      res.status(500);
    }
  });

export default projectsHandler;
