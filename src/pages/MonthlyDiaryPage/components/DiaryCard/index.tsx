import { ReactComponent as GreenDotIcon } from 'assets/ic_green_dot.svg';
import { ReactComponent as MoreHorizontalIcon } from 'assets/ic_more_horizontal.svg';
import DUMMY_DOG_THUMBNAIL from 'assets/img_dummy_dog.png';

import styles from './DiaryCard.module.scss';

import classNames from 'classnames/bind';
import SVGButton from 'components/SVGButton';
import React, { useCallback } from 'react';

const cx = classNames.bind(styles);

interface DiaryCardProps {
  className?: string;
  onOpenModal?: () => void;
}

const DiaryCard = React.memo(({ className, onOpenModal }: DiaryCardProps) => {
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
          <p className={cx('diary-card__content')}>
            오늘은 보리랑 동두천에 산책을 갔는데 아니 글쎄 옆집 철수를 만나가지구 넘 반갑더라
          </p>
          <p className={cx('diary-card__extra-content')}>집사 &#183; 댓글12</p>
        </div>
        <img className={cx('diary-card__thumbnail')} src={DUMMY_DOG_THUMBNAIL} alt="diary-thumbnail" />
      </div>
    </div>
  );
});

export default DiaryCard;
