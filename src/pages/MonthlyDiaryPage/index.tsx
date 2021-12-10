import styles from './MonthlyDiaryPage.module.scss';
import DatePickerModal from './components/DatePickerModal';
import DiaryCard from './components/DiaryCard';
import StickyHeader from './components/StickyHeader';
import useMonthlyDiary from './useMonthlyDiary';

import classNames from 'classnames/bind';
import { useModal } from 'hooks/useModal';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

// MEMO(@mango906): 주석쳐져 있는 요소들은 배포를 위해 미구현된 기능을 잠시 가린 주석입니다.

const MonthlyDiaryPage = () => {
  const { openedModal, handleOpenModal, handleCloseModal } = useModal();

  const { diaries } = useMonthlyDiary();

  const isEmptyDiary = diaries.length === 0;

  return (
    <div>
      <StickyHeader />
      <div className={cx('monthly-diary')}>
        <ul className={cx('monthly-diary__list')}>
          {diaries.map((diary) => (
            <li key={diary.diaryId} className={cx('monthly-diary__item')}>
              <Link to={`/diary-detail/${diary.diaryId}`}>
                <DiaryCard diary={diary} onOpenModal={handleOpenModal('MONTHLY_DIARY')} />
              </Link>
            </li>
          ))}
        </ul>

        {isEmptyDiary && <p className={cx('monthly-diary__empty')}>작성된 일기가 없어요 :(</p>}
      </div>

      {/* <MonthlyDiaryModal isOpened={openedModal === 'MONTHLY_DIARY'} onClose={handleCloseModal} /> */}
      <DatePickerModal isOpened={openedModal === 'DATE_PICKER'} onClose={handleCloseModal} />
    </div>
  );
};

export default MonthlyDiaryPage;
