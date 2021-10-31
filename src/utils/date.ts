import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

type DateTemplate = 'M월 D일 (ddd)';

export const formatDate = (date: string | Date, template: DateTemplate): string => dayjs(date).format(template);
