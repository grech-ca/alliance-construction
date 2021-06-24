import { FC, useCallback, useState, Fragment } from 'react';
import { useField } from 'formik';
import { useDropzone } from 'react-dropzone';

import classNames from 'classnames';

import { GrDownload } from 'react-icons/gr';

interface Props {
  name: string;
  multiple?: boolean;
}

const ImageInput: FC<Props> = ({ name, multiple }) => {
  const [active, setActive] = useState(false);

  const [{ value }, meta, { setValue }] = useField(name);

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
          <GrDownload size={32} className='drop-icon' />
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
