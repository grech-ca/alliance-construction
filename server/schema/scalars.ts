import { scalarType } from 'nexus';
import { ApolloError } from 'apollo-server';
import * as FileType from 'file-type';

export const Upload = scalarType({
  name: 'Upload',
  asNexusMethod: 'upload',
  serialize: () => {
    throw new ApolloError('Upload serialization is unsupported.');
  },
  parseValue: async value => {
    const upload = await value;
    const stream = upload.createReadStream();
    const fileType = await FileType.fromStream(stream);

    if (fileType?.mime !== upload.mimetype) {
      throw new ApolloError('Mime type does not match file content.');
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return upload;
  },
  parseLiteral: () => {
    throw new ApolloError('Upload literal unsupported.');
  },
});
