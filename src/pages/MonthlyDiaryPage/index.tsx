import styles from './MonthlyDiaryPage.module.scss';
import DatePickerModal from './components/DatePickerModal';
import DiaryCard from './components/DiaryCard';
import FixedHeader from './components/FixedHeader';
import MonthlyDiaryModal from './components/MonthlyDiaryModal';
import useMonthlyDiary from './useMonthlyDiary';

import classNames from 'classnames/bind';
import { useModal } from 'hooks/useModal';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MonthlyDiaryPage = () => {
  const { openedModal, handleOpenModal, handleCloseModal } = useModal();

  const { diaries } = useMonthlyDiary();

  return (
    <>
      <FixedHeader />
      <div className={cx('monthly-diary')}>
        <ul className={cx('monthly-diary__list')}>
          {diaries.map((diary) => (
            <li key={diary.diaryId} className={cx('monthly-diary__item')}>
              <Link to="/diary-detail">
                <DiaryCard diary={diary} onOpenModal={handleOpenModal('MONTHLY_DIARY')} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <MonthlyDiaryModal isOpened={openedModal === 'MONTHLY_DIARY'} onClose={handleCloseModal} />
      <DatePickerModal isOpened={openedModal === 'DATE_PICKER'} onClose={handleCloseModal} />
    </>
  );
};

export default MonthlyDiaryPage;
