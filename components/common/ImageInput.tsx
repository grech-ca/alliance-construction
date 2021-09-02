import { FC, useCallback, useState } from 'react';
import { useField } from 'formik';
import { useDropzone } from 'react-dropzone';

import classNames from 'classnames';

import UploadIcon from '@material-ui/icons/SystemUpdate';

interface Props {
  name: string;
  multiple?: boolean;
}

const ImageInput: FC<Props> = ({ name, multiple }) => {
  const [active, setActive] = useState(false);

  const [{ value }, , { setValue }] = useField(name);

  const onDrop = useCallback(
    acceptedFiles => {
      setValue(acceptedFiles);
    },
    [setValue],
  );

  const onDragOver = useCallback(() => setActive(true), []);
  const onDragEnd = useCallback(() => setActive(false), []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragOver,
    onDragLeave: onDragEnd,
    onDropAccepted: onDragEnd,
    accept: 'image/*',
    multiple,
  });

  return (
    <div role='button' className={classNames('image-input', { active })} {...getRootProps()}>
      <input {...getInputProps()} />
      {value.length === 0 ? (
        <div className='dropzone'>
          <UploadIcon />
          <div className='drop-hint'>Нажмите или перетащите изображения</div>
        </div>
      ) : (
        <div className='preview'>
          {[...value].map((file: File) => (
            <img className='preview-image' key={file.lastModified} src={URL.createObjectURL(file)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageInput;
