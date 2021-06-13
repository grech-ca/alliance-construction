import path from 'path';

import { Context } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';

import { makeSchema } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';

import prisma from '../server/prisma';
import * as allTypes from '../server/schema';

const schema = makeSchema({
  types: allTypes,
  outputs: {
    typegen: path.join(process.cwd(), 'server/generated/nexus-typegen.ts'),
    schema: path.join(process.cwd(), 'server/generated/schema.graphql'),
  },
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      paginationStrategy: 'prisma',
      outputs: {
        typegen: path.join(process.cwd(), 'server/generated/nexus-plugin-prisma-typegen.d.ts'),
      },
    }),
  ],
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = new ApolloServer({
  schema,
  context: (ctx: Context): Context => ({ ...ctx, prisma }),
  introspection: true,
});

const apolloServerHandler = server.createHandler({ path: '/api' });

export default apolloServerHandler;
