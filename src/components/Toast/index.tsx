import styles from './Toast.module.scss';

import classNames from 'classnames/bind';
import { atom, useRecoilValue } from 'recoil';

const cx = classNames.bind(styles);

export const toastTextAtom = atom<string | undefined>({
  key: 'toastTextAtom',
  default: undefined,
});

const Toast = () => {
  const toastText = useRecoilValue(toastTextAtom);

  return (
    <div className={cx('toast-container')}>
      <div className={cx('toast')}>{toastText}</div>
    </div>
  );
};

export default Toast;
