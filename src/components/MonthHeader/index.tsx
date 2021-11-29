import { ReactComponent as CaretDownIcon } from 'assets/ic_caret_down.svg';

import styles from './MonthHeader.module.scss';

import classNames from 'classnames/bind';
import DatePickerModal, { selectedDateAtom } from 'components/DatePickerModal';
import SVGButton from 'components/SVGButton';
import { useModal } from 'hooks/useModal';
import React from 'react';
import { useRecoilValue } from 'recoil';

const cx = classNames.bind(styles);

const MonthHeader = React.memo(() => {
  const { openedModal, handleOpenModal, handleCloseModal } = useModal();

  const { month } = useRecoilValue(selectedDateAtom);

  return (
    <>
      <header className={cx('month-header')}>
        <div className={cx('month-header__month-picker')} onClick={handleOpenModal('DATE_PICKER')}>
          <p className={cx('month-header__month')}>{month}월</p>
          <SVGButton icon={<CaretDownIcon />} className={cx('month-header__caret-icon')} />
        </div>
      </header>
      <DatePickerModal isOpened={openedModal === 'DATE_PICKER'} onClose={handleCloseModal} />
    </>
  );
});

export default MonthHeader;
