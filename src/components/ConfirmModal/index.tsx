import styles from './ConfirmModal.module.scss';

import classNames from 'classnames/bind';
import Overlay from 'components/Overlay';

interface ConfirmModalProps {
  isOpened: boolean;
  content: React.ReactNode;
  successText?: string;
  cancelText?: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const cx = classNames.bind(styles);

const ConfirmModal = ({
  isOpened,
  content,
  successText = '확인',
  cancelText = '취소',
  onSuccess,
  onCancel,
}: ConfirmModalProps) => {
  return (
    <Overlay align="center" isOpened={isOpened}>
      <div className={cx('modal-container')}>
        <div className={cx('modal-container__content')}>{content}</div>
        <div className={cx('modal-container__footer')}>
          <button
            className={cx('modal-container__footer-button', 'modal-container__footer-button--cancel')}
            onClick={onCancel}
          >
            {cancelText}
          </button>
          <button
            className={cx('modal-container__footer-button', 'modal-container__footer-button--success')}
            onClick={onSuccess}
          >
            {successText}
          </button>
        </div>
      </div>
    </Overlay>
  );
};

export default ConfirmModal;
