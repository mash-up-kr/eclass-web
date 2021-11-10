import styles from './ModalBottomSheet.module.scss';

import classNames from 'classnames/bind';
import Overlay from 'components/Overlay';

interface ModalBottomSheetProps {
  isOpened: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const ModalBottomSheet = ({ isOpened, children, onClose }: ModalBottomSheetProps) => {
  const cx = classNames.bind(styles);

  if (!isOpened) {
    return <></>;
  }

  return (
    <Overlay align="bottom">
      <div className={cx('modal-container')}>
        <div className={cx('modal-container__scrollable-icon')} />
        <div className={cx('modal-container__content')}>{children}</div>
      </div>
    </Overlay>
  );
};

export default ModalBottomSheet;
