import styles from './ModalBottomSheet.module.scss';

import classNames from 'classnames/bind';
import Overlay from 'components/Overlay';
import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

interface ModalBottomSheetProps {
  isOpened: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const ModalBottomSheet = ({ isOpened, children, onClose }: ModalBottomSheetProps) => {
  const cx = classNames.bind(styles);

  const swipeableHandlers = useSwipeable({
    onSwipedDown: onClose,
  });

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpened]);

  return (
    <Overlay align="bottom" isOpened={isOpened}>
      <div
        className={cx('modal-container', {
          [cx('modal-container--visible')]: isOpened,
          [cx('modal-container--hidden')]: !isOpened,
        })}
      >
        <div className={cx('modal-container__scrollable-icon')} {...swipeableHandlers} />
        <div className={cx('modal-container__content')}>{children}</div>
      </div>
    </Overlay>
  );
};

export default ModalBottomSheet;
