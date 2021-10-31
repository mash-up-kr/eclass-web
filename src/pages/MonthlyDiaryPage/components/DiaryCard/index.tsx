import { ReactComponent as GreenDotIcon } from 'assets/ic_green_dot.svg';
import { ReactComponent as MoreHorizontalIcon } from 'assets/ic_more_horizontal.svg';

import styles from './DiaryCard.module.scss';

import classNames from 'classnames/bind';
import SVGButton from 'components/SVGButton';
import React, { useCallback } from 'react';
import { Diary } from 'models/Diary';

const cx = classNames.bind(styles);

interface DiaryCardProps {
  diary: Diary;
  className?: string;
  onOpenModal?: () => void;
}

const DiaryCard = React.memo(({ diary, className, onOpenModal }: DiaryCardProps) => {
  const firstThumbnail = diary.pictureSubmitRequestList[0].imageUrl;

  const handleOpenModal = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      onOpenModal?.();
    },
    [onOpenModal]
  );

  return (
    <div className={cx('diary-card', { className })}>
      <header className={cx('diary-card__header')}>
        <SVGButton icon={<GreenDotIcon />} />
        <p className={cx('diary-card__date')}>14. SAT</p>
        <SVGButton icon={<MoreHorizontalIcon />} className={cx('diary-card__more')} onClick={handleOpenModal} />
      </header>
      <div className={cx('diary-card__article')}>
        <div className={cx('diary-card__summary')}>
          <p className={cx('diary-card__content')}>{diary.content}</p>
          <p className={cx('diary-card__extra-content')}>집사 &#183; 댓글12</p>
        </div>
        <img className={cx('diary-card__thumbnail')} src={firstThumbnail} alt="diary-thumbnail" />
      </div>
    </div>
  );
});

export default DiaryCard;
