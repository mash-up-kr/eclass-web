import styles from './MonthlyDiaryPage.module.scss';
import DiaryCard from './components/DiaryCard';
import FixedHeader from './components/FixedHeader';
import MonthlyDiaryModal from './components/MonthlyDiaryModal';
import { useMonthlyDiaryModal } from './components/MonthlyDiaryModal/useMonthlyDiaryModal';

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const MonthlyDiaryPage = () => {
  const { isOpened, handleOpenModal, handleCloseModal } = useMonthlyDiaryModal();

  return (
    <>
      <FixedHeader />
      <div className={cx('monthly-diary')}>
        <ul className={cx('monthly-diary__list')}>
          <li className={cx('monthly-diary__item')}>
            <Link to="/diary-detail">
              <DiaryCard onOpenModal={handleOpenModal} />
            </Link>
          </li>
          <li className={cx('monthly-diary__item')}>
            <Link to="/diary-detail">
              <DiaryCard />
            </Link>
          </li>
          <li className={cx('monthly-diary__item')}>
            <Link to="/diary-detail">
              <DiaryCard />
            </Link>
          </li>
          <li className={cx('monthly-diary__item')}>
            <Link to="/diary-detail">
              <DiaryCard />
            </Link>
          </li>
          <li className={cx('monthly-diary__item')}>
            <Link to="/diary-detail">
              <DiaryCard />
            </Link>
          </li>
          <li className={cx('monthly-diary__item')}>
            <Link to="/diary-detail">
              <DiaryCard />
            </Link>
          </li>
        </ul>
      </div>
      <MonthlyDiaryModal isOpened={isOpened} onClose={handleCloseModal} />
    </>
  );
};

export default MonthlyDiaryPage;
