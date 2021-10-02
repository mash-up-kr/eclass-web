import { ReactComponent as CalendarIcon } from 'assets/ic_calendar.svg';
import { ReactComponent as CaretDownIcon } from 'assets/ic_caret_down.svg';

import style from './FixedHeader.module.scss';

const FixedHeader = () => {
  return (
    <header className={style['fixed-header']}>
      <p className={style['fixed-header__logo']}>로고</p>
      <div className={style['fixed-header__month-picker']}>
        <p className={style['fixed-header__month']}>10월</p>
        <CaretDownIcon className={style['fixed-header__caret-icon']} />
      </div>

      <div className={style['fixed-header__calendar']}>
        <CalendarIcon className={style['fixed-header__calendar-icon']} />
      </div>
    </header>
  );
};

export default FixedHeader;
