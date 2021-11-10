import styles from './Overlay.module.scss';

import classNames from 'classnames/bind';
import { Portal } from 'react-portal';

const cx = classNames.bind(styles);

type Align = 'top' | 'center' | 'bottom';

interface OverlayProps {
  align?: Align;
  isOpened: boolean;
  children: React.ReactNode;
}

const Overlay = ({ isOpened, align = 'center', children }: OverlayProps) => {
  return (
    <Portal>
      <div
        className={cx('overlay', {
          [cx('overlay--top')]: align === 'top',
          [cx('overlay--center')]: align === 'center',
          [cx('overlay--bottom')]: align === 'bottom',
          [cx('overlay--visible')]: isOpened,
          [cx('overlay--hidden')]: !isOpened,
        })}
      >
        {children}
      </div>
    </Portal>
  );
};

export default Overlay;
