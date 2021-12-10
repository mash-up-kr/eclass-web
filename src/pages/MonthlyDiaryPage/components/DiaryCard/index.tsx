import styles from './DiaryCard.module.scss';

import classNames from 'classnames/bind';
import Badge from 'components/Badge';
import Thumbnail from 'components/Thumbnail';
import { Diary } from 'models/Diary';
import React from 'react';
import { formatDate } from 'utils/date';

const cx = classNames.bind(styles);

interface DiaryCardProps {
  diary: Diary;
  className?: string;
  onOpenModal?: () => void;
}

// MEMO(@mango906): 주석쳐져 있는 요소들은 배포를 위해 미구현된 기능을 잠시 가린 주석입니다.

const DiaryCard = React.memo(({ diary, className, onOpenModal }: DiaryCardProps) => {
  const { pictureSubmitRequestList, createdAt, badgeResponseDto } = diary;

  const firstThumbnail = pictureSubmitRequestList[0].imageUrl;
  const thumbnailCount = pictureSubmitRequestList.length;

  const hasMultipleThumbnail = thumbnailCount > 1;

  // const handleOpenModal = useCallback(
  //   (event: React.MouseEvent<HTMLButtonElement>) => {
  //     event.preventDefault();

  //     onOpenModal?.();
  //   },
  //   [onOpenModal]
  // );

  return (
    <div className={cx('diary-card', { className })}>
      <header className={cx('diary-card__header')}>
        <div className={cx('diary-card__badge')}>
          <img width={20} height={20} src={badgeResponseDto.imageUrl} alt={badgeResponseDto.name} />
        </div>
        <p className={cx('diary-card__date')}>{formatDate(createdAt, 'M월 D일 (ddd)')}</p>
        {/* <SVGButton icon={<MoreHorizontalIcon />} className={cx('diary-card__more')} onClick={handleOpenModal} /> */}
      </header>
      <div className={cx('diary-card__article')}>
        <div className={cx('diary-card__summary')}>
          <p className={cx('diary-card__content')}>{diary.content}</p>
          {/* <p className={cx('diary-card__extra-content')}>집사 &#183; 댓글12</p> */}
        </div>
        <div className={cx('diary-card__thumbnail-container')}>
          <Thumbnail className={cx('diary-card__thumbnail')} src={firstThumbnail} alt="diary-thumbnail" />
          {hasMultipleThumbnail && <Badge className={cx('diary-card__badge')}>{thumbnailCount}</Badge>}
        </div>
      </div>
    </div>
  );
});

export default DiaryCard;
