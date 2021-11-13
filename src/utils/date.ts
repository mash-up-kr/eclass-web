import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

type DateTemplate = 'M월 D일 (ddd)' | 'YYYY. MM. DD';

export const formatDate = (date: string | Date, template: DateTemplate): string => dayjs(date).format(template);

export const getReadableMonth = (month: number) => {
  return month + 1;
};
