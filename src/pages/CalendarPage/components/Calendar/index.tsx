import styles from './Calendar.module.scss';

import classNames from 'classnames/bind';
import { selectedDateAtom } from 'components/DatePickerModal';
import { getDateData } from 'pages/CalendarPage/utils';
import { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';

const days = ['일', '월', '화', '수', '목', '금', '토'];

const cx = classNames.bind(styles);

const Calendar = () => {
  const selectedDate = useRecoilValue(selectedDateAtom);
  const [selectedDay, setSelectedDay] = useState(-1);

  const dateData = getDateData(selectedDate);

  const handleSelectDay = useCallback((day: number | undefined) => {
    if (!day) {
      return;
    }

    setSelectedDay(day);
  }, []);

  return (
    <div className={cx('calendar')}>
      <div className={cx('calendar__header')}>
        {days.map((day) => (
          <div key={day} className={cx('calendar__day-name')}>
            {day}
          </div>
        ))}
      </div>
      <div className={cx('calendar__body')}>
        {dateData.map((date) => (
          <div className={cx('calendar__body-item')} key={date} onClick={() => handleSelectDay(date)}>
            {date && (
              <>
                <span className={cx({ 'calendar__day--selected': selectedDay === date })}>{date}</span>
                <div className={cx('calendar__body-feeling-wrapper')} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
