import { ReactComponent as CaretDownIcon } from 'assets/ic_caret_down.svg';

import { selectedDateAtom } from '../../../../components/DatePickerModal';

import styles from './FixedHeader.module.scss';

import classNames from 'classnames/bind';
import SVGButton from 'components/SVGButton';
import { useModal } from 'hooks/useModal';
import React from 'react';
import { useRecoilValue } from 'recoil';

const cx = classNames.bind(styles);

const FixedHeader = React.memo(() => {
  const { handleOpenModal } = useModal();

  const { month } = useRecoilValue(selectedDateAtom);

  return (
    <header className={cx('fixed-header')}>
      <div className={cx('fixed-header__month-picker')} onClick={handleOpenModal('DATE_PICKER')}>
        <p className={cx('fixed-header__month')}>{month}월</p>
        <SVGButton icon={<CaretDownIcon />} className={cx('fixed-header__caret-icon')} />
      </div>
    </header>
  );
});

export default FixedHeader;
