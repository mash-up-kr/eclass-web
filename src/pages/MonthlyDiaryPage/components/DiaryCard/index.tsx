import { ReactComponent as GreenDotIcon } from 'assets/ic_green_dot.svg';
import { ReactComponent as MoreHorizontalIcon } from 'assets/ic_more_horizontal.svg';
import DUMMY_DOG_THUMBNAIL from 'assets/img_dummy_dog.png';

import style from './DiaryCard.module.scss';

import cx from 'classnames';

interface DiaryCardProps {
  classNames?: string;
}

const DiaryCard = ({ classNames }: DiaryCardProps) => {
  return (
    <div className={cx(style['diary-card'], classNames)}>
      <header className={style['diary-card__header']}>
        <GreenDotIcon />
        <p className={style['diary-card__date']}>14. SAT</p>
        <MoreHorizontalIcon className={style['diary-card__more']} />
      </header>
      <div className={style['diary-card__article']}>
        <div className={style['diary-card__summary']}>
          <p className={style['diary-card__content']}>
            오늘은 보리랑 동두천에 산책을 갔는데 아니 글쎄 옆집 철수를 만나가지구 넘 반갑더라
          </p>
          <p className={style['diary-card__extra-content']}>집사 &#183; 댓글12</p>
        </div>
        <img className={style['diary-card__thumbnail']} src={DUMMY_DOG_THUMBNAIL} alt="diary-thumbnail" />
      </div>
    </div>
  );
};

export default DiaryCard;
