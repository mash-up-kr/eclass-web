import { ReactComponent as GreenDotIcon } from 'assets/ic_green_dot.svg';

import styles from './DiaryDescriptionHeader.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DiaryDescriptionHeader = () => {
  return (
    <div className={cx('diary-description-header')}>
      <div className={cx('diary-description-header__badge')}>
        <GreenDotIcon width="40" height="40" />
      </div>
      <div className={cx('diary-description-header__info')}>
        <h1 className={cx('diary-description-header__title')}>산책 오지게 했다</h1>
        <time className={cx('diary-description-header__date')} dateTime="2021/08/14">
          2021.08.14
        </time>
        <span className={cx('diary-description-header__author')}>엄마</span>
      </div>
    </div>
  );
};

export default DiaryDescriptionHeader;
