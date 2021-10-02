import DiaryDescriptionHeader from '../DiaryDescriptionHeader';

import styles from './DiaryDescription.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DiaryDescription = () => {
  return (
    <div className={cx('diary-description')}>
      <DiaryDescriptionHeader />
      <p className={cx('diary-description__content')}>
        오늘은 보리랑 동두천에 산책을 갔는데 아니 글쎄 옆집 철수를 만나가지구 넘 반가웠다 음하하하하하아 오늘은 보리랑
        동두천에 산책을 갔는데
      </p>
    </div>
  );
};

export default DiaryDescription;
