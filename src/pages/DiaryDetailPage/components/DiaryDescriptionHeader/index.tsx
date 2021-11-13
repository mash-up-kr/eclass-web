import styles from './DiaryDescriptionHeader.module.scss';

import classNames from 'classnames/bind';
import { Badge } from 'models/Diary';
import { formatDate } from 'utils/date';

const cx = classNames.bind(styles);

interface DiaryDescriptionHeaderProps {
  createdAt: string;
  badgeResponseDto: Badge;
}

const DiaryDescriptionHeader = ({ createdAt, badgeResponseDto }: DiaryDescriptionHeaderProps) => {
  return (
    <div className={cx('diary-description-header')}>
      <div className={cx('diary-description-header__header')}>
        <div className={cx('diary-description-header__status')}>
          <img width={24} height={24} src={badgeResponseDto.imageUrl} alt={badgeResponseDto.name} />
        </div>
        <h1 className={cx('diary-description-header__title')}>{badgeResponseDto.name}</h1>
      </div>
      <div className={cx('diary-description-header__sub-header')}>
        <span className={cx('diary-description-header__author')}>엄마</span>
        <time className={cx('diary-description-header__date')} dateTime={createdAt}>
          {formatDate(createdAt, 'YYYY. MM. DD')}
        </time>
      </div>
    </div>
  );
};

export default DiaryDescriptionHeader;
