import { ReactComponent as CaretDownIcon } from 'assets/ic_caret_down.svg';

import styles from './FixedHeader.module.scss';

import classNames from 'classnames/bind';
import SVGButton from 'components/SVGButton';
import React from 'react';

const cx = classNames.bind(styles);

const FixedHeader = React.memo(() => {
  return (
    <header className={cx('fixed-header')}>
      <div className={cx('fixed-header__month-picker')}>
        <p className={cx('fixed-header__month')}>10월</p>
        <SVGButton icon={<CaretDownIcon />} className={cx('fixed-header__caret-icon')} />
      </div>
    </header>
  );
});

export default FixedHeader;
