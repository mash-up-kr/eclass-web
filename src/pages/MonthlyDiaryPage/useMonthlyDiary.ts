import { selectedDateAtom } from './components/DatePickerModal';

import { getDiaryList } from 'apis/diary';
import { Diary } from 'models/Diary';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

type DiaryListResponse = Diary[];

const useMonthlyDiary = () => {
  const { year, month } = useRecoilValue(selectedDateAtom);

  const { data, error } = useQuery<DiaryListResponse>('diaryList', () => getDiaryList(year, month));

  return {
    diaries: data ?? [],
    error,
  };
};

export default useMonthlyDiary;
