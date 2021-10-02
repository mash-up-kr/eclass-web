import style from './MonthlyDiaryPage.module.scss';
import DiaryCard from './components/DiaryCard';
import FixedHeader from './components/FixedHeader';

const MonthlyDiaryPage = () => {
  return (
    <>
      <FixedHeader />
      <div className={style['monthly-diary']}>
        <ul className={style['monthly-diary__list']}>
          <li className={style['monthly-diary__item']}>
            <DiaryCard />
          </li>
          <li className={style['monthly-diary__item']}>
            <DiaryCard />
          </li>
          <li className={style['monthly-diary__item']}>
            <DiaryCard />
          </li>
          <li className={style['monthly-diary__item']}>
            <DiaryCard />
          </li>
          <li className={style['monthly-diary__item']}>
            <DiaryCard />
          </li>
          <li className={style['monthly-diary__item']}>
            <DiaryCard />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MonthlyDiaryPage;
