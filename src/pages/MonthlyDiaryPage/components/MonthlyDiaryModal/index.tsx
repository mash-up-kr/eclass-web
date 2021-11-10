import { ReactComponent as Bookmark } from 'assets/ic_bookmark.svg';
import { ReactComponent as Delete } from 'assets/ic_delete.svg';
import { ReactComponent as Edit } from 'assets/ic_edit.svg';

import styles from './MonthlyDiaryModal.module.scss';

import classNames from 'classnames/bind';
import ModalBottomSheet from 'components/ModalBottomSheet';

const cx = classNames.bind(styles);

interface MonthlyDiaryModalProps {
  isOpened: boolean;
  onClose: () => void;
}

const MonthlyDiaryModal = ({ isOpened, onClose }: MonthlyDiaryModalProps) => {
  return (
    <ModalBottomSheet isOpened={isOpened} onClose={onClose}>
      <div className={cx('modal-item')}>
        <Edit />
        <p className={cx('modal-item__title')}>수정</p>
      </div>
      <div className={cx('modal-item')}>
        <Delete />
        <p className={cx('modal-item__title')}>삭제</p>
      </div>
      <div className={cx('modal-item')}>
        <Bookmark />
        <p className={cx('modal-item__title')}>북마크 추가</p>
      </div>
    </ModalBottomSheet>
  );
};

export default MonthlyDiaryModal;
