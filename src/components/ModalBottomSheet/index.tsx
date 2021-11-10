import styles from './ModalBottomSheet.module.scss';

import classNames from 'classnames/bind';
import Overlay from 'components/Overlay';
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

  if (!isOpened) {
    return <></>;
  }

  return (
    <Overlay align="bottom">
      <div className={cx('modal-container')}>
        <div className={cx('modal-container__scrollable-icon')} {...swipeableHandlers} />
        <div className={cx('modal-container__content')}>{children}</div>
      </div>
    </Overlay>
  );
};

export default ModalBottomSheet;
