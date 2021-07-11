const extractBufferData = (buffer: Buffer): number[] => {
  const bufferString = JSON.stringify(buffer);
  const bufferJson = JSON.parse(bufferString);

  return bufferJson.data as number[];
};

export default extractBufferData;
