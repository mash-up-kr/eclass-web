import styles from './ModalBottomSheet.module.scss';

import classNames from 'classnames/bind';
import Overlay from 'components/Overlay';
import { useSwipeable } from 'react-swipeable';

interface ModalBottomSheetProps {
  isOpened: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const cx = classNames.bind(styles);

const ModalBottomSheet = ({ isOpened, children, onClose }: ModalBottomSheetProps) => {
  const swipeableHandlers = useSwipeable({
    onSwipedDown: onClose,
  });

  return (
    <Overlay align="bottom" isOpened={isOpened} onClick={onClose}>
      <div
        className={cx('modal-container', {
          'modal-container--visible': isOpened,
          'modal-container--hidden': !isOpened,
        })}
      >
        <div className={cx('modal-container__scrollable-icon')} {...swipeableHandlers} />
        <div className={cx('modal-container__content')}>{children}</div>
      </div>
    </Overlay>
  );
};

export default ModalBottomSheet;
