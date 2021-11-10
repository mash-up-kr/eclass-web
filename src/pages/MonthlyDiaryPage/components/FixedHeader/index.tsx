import { ReactComponent as CalendarIcon } from 'assets/ic_calendar.svg';
import { ReactComponent as CaretDownIcon } from 'assets/ic_caret_down.svg';
import { ReactComponent as LogoIcon } from 'assets/ic_logo.svg';

import styles from './FixedHeader.module.scss';

import classNames from 'classnames/bind';
import SVGButton from 'components/SVGButton';
import React from 'react';

const cx = classNames.bind(styles);

const FixedHeader = React.memo(() => {
  return (
    <header className={cx('fixed-header')}>
      <SVGButton icon={<LogoIcon />} className={cx('fixed-header__logo')} />
      <div className={cx('fixed-header__month-picker')}>
        <p className={cx('fixed-header__month')}>10월</p>
        <SVGButton icon={<CaretDownIcon />} className={cx('fixed-header__caret-icon')} />
      </div>

      <div className={cx('fixed-header__calendar')}>
        <SVGButton icon={<CalendarIcon />} className={cx('fixed-header__calendar-icon')} />
      </div>
    </header>
  );
});

export default FixedHeader;
