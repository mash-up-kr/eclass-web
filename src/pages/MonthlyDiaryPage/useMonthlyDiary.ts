import { selectedDateAtom } from './components/DatePickerModal';

import { Diary } from 'models/Diary';
import { useRecoilValue } from 'recoil';
import useSWR from 'swr';
import { fetcher } from 'utils/fetcher';

type DiaryListResponse = Diary[];

const API_URL = 'http://server.jonghyeon.com/api/v1/diary/list';

const useMonthlyDiary = () => {
  const { year, month } = useRecoilValue(selectedDateAtom);

  const { data, error } = useSWR<DiaryListResponse>(`${API_URL}?year=${year}&month=${month}`, fetcher);

  return {
    diaries: data ?? [],
    error,
  };
};

export default useMonthlyDiary;
