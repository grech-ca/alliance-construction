import { chunk } from 'lodash';

const separateNumber = (value: number): string => {
  const chunks = chunk(String(value).split('').reverse(), 3);
  const joinedChunks = chunks.map(chunk => chunk.reverse().join(''));

  return joinedChunks.reverse().join(' ');
};

export default separateNumber;
