import styles from './Calendar.module.scss';

import classNames from 'classnames/bind';
import { selectedDateAtom } from 'components/DatePickerModal';
import { getDateData } from 'pages/CalendarPage/utils';
import { useRecoilValue } from 'recoil';

const days = ['일', '월', '화', '수', '목', '금', '토'];

const cx = classNames.bind(styles);

const Calendar = () => {
  const selectedDate = useRecoilValue(selectedDateAtom);

  const dateData = getDateData(selectedDate);

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
          <div className={cx('calendar__body-item')} key={date}>
            {date && (
              <>
                {date}
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
