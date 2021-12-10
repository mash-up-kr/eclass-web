import { ReactComponent as CaretDownIcon } from 'assets/ic_caret_down.svg';

import { selectedDateAtom } from '../DatePickerModal';

import styles from './StickyHeader.module.scss';

import classNames from 'classnames/bind';
import SVGButton from 'components/SVGButton';
import { useModal } from 'hooks/useModal';
import React from 'react';
import { useRecoilValue } from 'recoil';

const cx = classNames.bind(styles);

const StickyHeader = React.memo(() => {
  const { handleOpenModal } = useModal();

  const { month } = useRecoilValue(selectedDateAtom);

  return (
    <header className={cx('sticky-header')}>
      <div className={cx('sticky-header__month-picker')} onClick={handleOpenModal('DATE_PICKER')}>
        <p className={cx('sticky-header__month')}>{month}월</p>
        <SVGButton icon={<CaretDownIcon />} className={cx('sticky-header__caret-icon')} />
      </div>
    </header>
  );
});

export default StickyHeader;
