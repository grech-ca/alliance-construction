import { objectType, extendType, mutationField, enumType, inputObjectType } from 'nexus';

import prisma from '../prisma';

export const Project = objectType({
  name: 'Project',
  definition(t) {
    t.model.id();
    t.model.type();
    t.model.bedrooms();
    t.model.floors();
    t.model.price();
    t.model.buildPrice();
    t.model.photos();
  },
});

export const ProjectsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.projects();
  },
});

export enum ProjectType {
  EXEMPLARY = 'EXEMPLARY',
  INDIVIDUAL = 'INDIVIDUAL',
}

export const ProjectTypeEnum = enumType({
  name: 'ProjectType',
  members: { ...ProjectType },
});

export const CreateProjectInput = inputObjectType({
  name: 'CreateProjectInput',
  definition(t) {
    t.nonNull.field('type', { type: 'ProjectType' });
    t.nonNull.int('floors');
    t.nonNull.int('price');
    t.nonNull.int('buildPrice');
    t.nonNull.int('bedrooms');
    t.list.field('photos', { type: 'Upload' });
  },
});

export const CreateProjectMutation = mutationField('createProject', {
  type: 'Project',
  args: {
    data: CreateProjectInput,
  },
  resolve: async (parent, { data: { photos, ...data } }) => {
    return new Promise(resolveProject => {
      void Promise.all(photos).then((files: any[]) => {
        const photoIds: Promise<number>[] = files.map((file: any) => {
          const photoPromise = new Promise<number>(resolvePhotoId => {
            const stream = file.createReadStream();

            const buffers: Uint8Array[] = [];

            stream.on('data', (chunk: Uint8Array) => {
              buffers.push(chunk);
            });

            stream.on('end', () => {
              const buffer = Buffer.concat(buffers);

              void prisma.file.create({ data: { data: buffer } }).then(({ id }) => resolvePhotoId(id));
            });
          });

          return photoPromise;
        });

        void Promise.all(photoIds).then(ids => {
          void prisma.project
            .create({
              data: {
                ...data,
                photos: {
                  createMany: {
                    data: ids.map(id => ({ url: `/api/uploads/images/${id}` })),
                  },
                },
              },
            })
            .then(project => resolveProject(project));
        });
      });
    });
  },
});
