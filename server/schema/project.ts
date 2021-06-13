import { objectType, extendType } from 'nexus';

export const Project = objectType({
  name: 'Project',
  definition(t) {
    t.model.id();
    t.model.type();
  },
});

export const ProjectsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.projects();
  },
});
