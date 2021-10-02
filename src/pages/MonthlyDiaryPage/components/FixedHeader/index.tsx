import { ReactComponent as CalendarIcon } from 'assets/ic_calendar.svg';
import { ReactComponent as CaretDownIcon } from 'assets/ic_caret_down.svg';

import style from './FixedHeader.module.scss';

import SVGButton from 'components/SVGButton';

const FixedHeader = () => {
  return (
    <header className={style['fixed-header']}>
      <p className={style['fixed-header__logo']}>로고</p>
      <div className={style['fixed-header__month-picker']}>
        <p className={style['fixed-header__month']}>10월</p>
        <SVGButton icon={<CaretDownIcon />} className={style['fixed-header__caret-icon']} />
      </div>

      <div className={style['fixed-header__calendar']}>
        <SVGButton icon={<CalendarIcon />} className={style['fixed-header__calendar-icon']} />
      </div>
    </header>
  );
};

export default FixedHeader;
