import { ReactComponent as GreenDotIcon } from 'assets/ic_green_dot.svg';

import styles from './DiaryDescriptionHeader.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DiaryDescriptionHeader = () => {
  return (
    <div className={cx('diary-description-header')}>
      <div className={cx('diary-description-header__header')}>
        <div className={cx('diary-description-header__status')}>
          <GreenDotIcon width="24" height="24" />
        </div>
        <h1 className={cx('diary-description-header__title')}>자두자두 졸려요...</h1>
      </div>
      <div className={cx('diary-description-header__sub-header')}>
        <span className={cx('diary-description-header__author')}>엄마</span>
        <time className={cx('diary-description-header__date')} dateTime="2021/08/14">
          2021. 08. 14
        </time>
      </div>
    </div>
  );
};

export default DiaryDescriptionHeader;
