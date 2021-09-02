import { FC, ImgHTMLAttributes, useCallback, useState } from 'react';

import classnames from 'classnames';

import ImageIcon from '@material-ui/icons/CropOriginal';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}

const Image: FC<ImageProps> = ({ className, fallbackClassName, ...props }) => {
  const [failed, setFailed] = useState(false);

  const handleError = useCallback(() => setFailed(true), []);

  if (failed) {
    return (
      <div className={classnames('image fallback', fallbackClassName)}>
        <ImageIcon />
      </div>
    );
  }

  return <img {...props} className={classnames('image', className)} onError={handleError} />;
};

export default Image;
