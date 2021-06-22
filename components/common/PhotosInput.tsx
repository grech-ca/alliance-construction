import { FC } from 'react';

import { useField } from 'formik';

interface PhotosInputProps {
  test: string;
}

const PhotosInput: FC<PhotosInputProps> = ({ test }) => {
  const [{ value }, meta, { setValue }] = useField('photos');

  return <div />;
};

export default PhotosInput;
