import { objectType } from 'nexus';

export const Photo = objectType({
  name: 'Photo',
  definition(t) {
    t.model.id();
    t.model.url();
  },
});
