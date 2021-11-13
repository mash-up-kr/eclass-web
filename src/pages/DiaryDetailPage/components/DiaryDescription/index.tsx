import DiaryDescriptionHeader from '../DiaryDescriptionHeader';

import styles from './DiaryDescription.module.scss';

import classNames from 'classnames/bind';
import { Badge } from 'models/Diary';

const cx = classNames.bind(styles);

interface DiaryDescriptionProps {
  content: string;
  createdAt: string;
  badgeResponseDto: Badge;
}

const DiaryDescription = ({ content, createdAt, badgeResponseDto }: DiaryDescriptionProps) => {
  return (
    <div className={cx('diary-description')}>
      <DiaryDescriptionHeader createdAt={createdAt} badgeResponseDto={badgeResponseDto} />
      <p className={cx('diary-description__content')}>{content}</p>
    </div>
  );
};

export default DiaryDescription;
