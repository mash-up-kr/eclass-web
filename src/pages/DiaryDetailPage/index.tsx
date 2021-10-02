import styles from './DiaryDetailPage.module.scss';
import Carousel from './components/Carousel';
import DiaryDescription from './components/DiaryDescription';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DiaryDetailPage = () => {
  return (
    <>
      <main className={cx('diary-detail-page__main')}>
        <Carousel />
        <DiaryDescription />
      </main>
      <footer className={cx('diary-detail-page__footer')} />
    </>
  );
};

export default DiaryDetailPage;
