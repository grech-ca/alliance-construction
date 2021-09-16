import * as yup from 'yup';
import { compact } from 'lodash';
import { Op, Model } from 'sequelize';

import handler from 'server/handler';

import Project, { ProjectModel } from 'server/models/project';

import { ProjectType, Area } from 'types/shared';

export interface GetProjectsResponse {
  page: number;
  total: number;
  data: Model<ProjectModel>[];
}

const createProjectValidation = yup.object().shape({
  bedrooms: yup.number().required(),
  price: yup.number().required(),
  buildPrice: yup.number().required(),
  type: yup.string().oneOf(Object.values(ProjectType)).required(),
  area: yup.string().oneOf(Object.values(Area)).required(),
  floors: yup.number().required(),
});

// const projectsHandler = handler({ guard: ['POST'] }).post(async (req, res) => {
const projectsHandler = handler()
  .get(async (req, res) => {
    const { query } = req ?? {};

    const search = query?.search;
    const type = query?.type;
    const area = query?.area;
    const page = Number(query?.page) > 0 ? Number(query?.page) : 1;
    const limit = Number(query?.limit) > 0 ? Number(query?.limit) : 12;
    const floors = query?.floors;

    const selector = {
      [Op.and]: compact([
        type && { type },
        area && { area },
        search && {
          id: {
            [Op.like]: `%${search as string}`,
          },
        },
        floors && { floors },
      ]),
    };

    const projectsCount = await Project.count({ where: selector });

    const projects = await Project.findAll({
      limit,
      where: selector,
      offset: limit * (page - 1),
    });

    const data: GetProjectsResponse = {
      page,
      total: Math.ceil(projectsCount / limit),
      data: projects,
    };

    res.send(data);
  })
  .post(async (req, res) => {
    try {
      await createProjectValidation.validate(req.body, { abortEarly: false });
    } catch (err) {
      return res.status(403).json(err);
    }

    const project = await Project.create(req.body);

    // const photos = Array.isArray(req.body.photos) ? req.body.photos : [req.body.photos];

    res.send(project);

    // if (photos) {
    //   const photosPromises = photos.map((photo: any) => {
    //     return new Promise(resolve => {
    //       return fs.readFile(photo.path, (err, buffer) => resolve(buffer));
    //     });
    //   });

    //   await Promise.all(photosPromises).then(photos => {
    //     const photoIds = photos.map(photo => {
    //       return new Promise(resolve => {
    //         void sql`INSERT INTO files ${sqlValues({
    //           type: 'image',
    //           data: JSON.stringify(extractBufferData(photo as Buffer)),
    //         })}`.then(({ insertId }: any) => resolve(insertId));
    //       });
    //     });

    //     void Promise.all(photoIds).then(photos => {
    //       photos.forEach(photoId => {
    //         sql`INSERT INTO projects_images_relation ${sqlValues({
    //           project: projectId,
    //           image: photoId as number,
    //         })}`;
    //       });
    //     });
    //   });
    // }
  });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default projectsHandler;
