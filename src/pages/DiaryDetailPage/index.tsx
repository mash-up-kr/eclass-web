import styles from './DiaryDetailPage.module.scss';
import Carousel from './components/Carousel';
import DiaryDescription from './components/DiaryDescription';
import useDiaryDetail from './useDiaryDetail';

import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const DiaryDetailPage = () => {
  const { diaryId } = useParams<{ diaryId: string }>();
  const { diaryDetail } = useDiaryDetail(diaryId);

  if (!diaryDetail) return null;

  const { pictureSubmitRequestList, createdAt, badgeResponseDto, content } = diaryDetail;

  return (
    <>
      <main className={cx('diary-detail-page__main')}>
        <Carousel pictureSubmitRequestList={pictureSubmitRequestList} />
        <DiaryDescription createdAt={createdAt} content={content} badgeResponseDto={badgeResponseDto} />
      </main>
      <footer className={cx('diary-detail-page__footer')} />
    </>
  );
};

export default DiaryDetailPage;
