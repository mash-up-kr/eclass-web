import { ReactComponent as CalendarIcon } from 'assets/ic_calendar.svg';

import style from './FixedHeader.module.scss';

const FixedHeader = () => {
  return (
    <header className={style['fixed-header']}>
      <p className={style['fixed-header__logo']}>로고</p>
      <p className={style['fixed-header__month']}>10월</p>
      <div className={style['fixed-header__calendar']}>
        <CalendarIcon className={style['fixed-header__calendar-icon']} />
      </div>
    </header>
  );
};

export default FixedHeader;
