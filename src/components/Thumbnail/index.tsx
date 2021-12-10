import { ReactComponent as Image } from 'assets/ic_image.svg';

import styles from './Thumbnail.module.scss';

import classNames from 'classnames/bind';
import { ImgHTMLAttributes, useCallback, useState } from 'react';

type Props = {
  errorBackgroundColor?: string;
  errorIconSize?: { width: number; height: number };
} & ImgHTMLAttributes<HTMLImageElement>;

const cx = classNames.bind(styles);

const Thumbnail = ({ className, alt, errorBackgroundColor, errorIconSize, ...restProps }: Props) => {
  const [isError, setError] = useState(false);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  if (isError) {
    return (
      <div style={{ backgroundColor: errorBackgroundColor }} className={cx('error-image', className)}>
        <Image style={{ ...errorIconSize }} />
      </div>
    );
  }

  return <img className={className} alt={alt} {...restProps} onError={handleError} />;
};

export default Thumbnail;
