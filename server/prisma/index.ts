import { PrismaClient } from '@prisma/client';

const globalAny: any = global;

let prisma: PrismaClient;

const client = new PrismaClient({ errorFormat: 'minimal' });

if (process.env.NODE_ENV === 'production') {
  prisma = client;
} else {
  if (!globalAny.prisma) {
    globalAny.prisma = client;
  }
  prisma = globalAny.prisma;
}

export default prisma;
