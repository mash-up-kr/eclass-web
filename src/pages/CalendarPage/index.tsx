import styles from './CalendarPage.module.scss';
import Calendar from './components/Calendar';

import classNames from 'classnames/bind';
import MonthHeader from 'components/MonthHeader';

const cx = classNames.bind(styles);

const CalendarPage = () => {
  return (
    <>
      <MonthHeader />
      <div className={cx('calendar-page')}>
        <Calendar />
      </div>
    </>
  );
};

export default CalendarPage;
