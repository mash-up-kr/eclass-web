import style from './MonthlyDiaryPage.module.scss';
import DiaryCard from './components/DiaryCard';
import FixedHeader from './components/FixedHeader';

import { Link } from 'react-router-dom';

const MonthlyDiaryPage = () => {
  return (
    <>
      <FixedHeader />
      <div className={style['monthly-diary']}>
        <ul className={style['monthly-diary__list']}>
          <li className={style['monthly-diary__item']}>
            <Link to="/diary-detail">
              <DiaryCard />
            </Link>
          </li>
          <li className={style['monthly-diary__item']}>
            <Link to="/diary-detail">
              <DiaryCard />
            </Link>
          </li>
          <li className={style['monthly-diary__item']}>
            <Link to="/diary-detail">
              <DiaryCard />
            </Link>
          </li>
          <li className={style['monthly-diary__item']}>
            <Link to="/diary-detail">
              <DiaryCard />
            </Link>
          </li>
          <li className={style['monthly-diary__item']}>
            <Link to="/diary-detail">
              <DiaryCard />
            </Link>
          </li>
          <li className={style['monthly-diary__item']}>
            <Link to="/diary-detail">
              <DiaryCard />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MonthlyDiaryPage;
