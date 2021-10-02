import style from './MonthlyDiaryPage.module.scss';
import DiaryCard from './components/DiaryCard';
import FixedHeader from './components/FixedHeader';

const MonthlyDiaryPage = () => {
  return (
    <>
      <FixedHeader />
      <div className={style['monthly-diary']}>
        <DiaryCard />
      </div>
    </>
  );
};

export default MonthlyDiaryPage;
