import dayjs from 'dayjs';
import { formatDate } from 'utils/date';

export const getDateData = ({ year, month }: { year: number; month: number }) => {
  const targetMonth = dayjs()
    .year(year)
    .month(month - 1);

  const dayCount = Number(formatDate(targetMonth.endOf('month').toDate(), 'DD'));
  const emptyDayCount = Number(formatDate(targetMonth.startOf('month').toDate(), 'd'));

  const dayData: (number | undefined)[] = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < emptyDayCount; i++) {
    dayData.push(undefined);
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= dayCount; i++) {
    dayData.push(i);
  }

  return dayData;
};
