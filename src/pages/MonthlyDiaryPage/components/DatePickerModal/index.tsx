import { ReactComponent as CaretLeft } from 'assets/ic_caret_left.svg';
import { ReactComponent as CaretRight } from 'assets/ic_caret_right.svg';

import styles from './DatePickerModal.module.scss';

import classNames from 'classnames/bind';
import Overlay from 'components/Overlay';
import SVGButton from 'components/SVGButton';
import dayjs from 'dayjs';
import { useCallback, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { getReadableMonth } from 'utils/date';

interface DatePickerModalProps {
  isOpened: boolean;
  onClose: () => void;
}

const cx = classNames.bind(styles);

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const currentYear = dayjs().year();
const currentMonth = getReadableMonth(dayjs().month());

export const selectedDateAtom = atom({
  key: 'selectedDateAtom',
  default: {
    year: currentYear,
    month: currentMonth,
  },
});

const DatePickerModal = ({ isOpened, onClose }: DatePickerModalProps) => {
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);

  const { year: selectedDateYear, month: selectedDateMonth } = selectedDate;

  const handlePrevYear = useCallback(() => {
    setSelectedYear(selectedYear - 1);
  }, [selectedYear]);

  const handleNextYear = useCallback(() => {
    setSelectedYear(selectedYear + 1);
  }, [selectedYear]);

  const handleSelectMonth = useCallback(
    (month: number) => () => {
      setSelectedDate({
        year: selectedYear,
        month,
      });

      onClose();
    },
    [onClose, selectedYear, setSelectedDate]
  );

  return (
    <Overlay align="center" isOpened={isOpened}>
      <div className={cx('modal-container')}>
        <div className={cx('modal-container__header')}>
          <SVGButton icon={<CaretLeft />} onClick={handlePrevYear} />
          <p className={cx('modal-container__year')}>{selectedYear}</p>
          <SVGButton icon={<CaretRight />} onClick={handleNextYear} />
        </div>

        <div className={cx('modal-container__months')}>
          {months.map((month) => {
            const isSelectedItem = selectedDateYear === selectedYear && selectedDateMonth === month;

            return (
              <div
                className={cx('modal-container__months-item', {
                  'modal-container__months-item--selected': isSelectedItem,
                })}
                key={month}
                onClick={handleSelectMonth(month)}
              >
                {`${month}월`}
              </div>
            );
          })}
        </div>
      </div>
    </Overlay>
  );
};

export default DatePickerModal;
