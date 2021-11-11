import styles from './Overlay.module.scss';

import classNames from 'classnames/bind';
import { Portal } from 'react-portal';

const cx = classNames.bind(styles);

type Align = 'top' | 'center' | 'bottom';

interface OverlayProps {
  align?: Align;
  isOpened: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Overlay = ({ isOpened, align = 'center', children, onClick }: OverlayProps) => {
  return (
    <Portal>
      <div
        className={cx('overlay', {
          'overlay--top': align === 'top',
          'overlay--center': align === 'center',
          'overlay--bottom': align === 'bottom',
          'overlay--visible': isOpened,
          'overlay--hidden': !isOpened,
        })}
        onClick={onClick}
      >
        {children}
      </div>
    </Portal>
  );
};

export default Overlay;
