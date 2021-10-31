import { Diary } from 'models/Diary';
import useSWR from 'swr';
import { fetcher } from 'utils/fetcher';

type DiaryListResponse = Diary[];

const API_URL = 'http://server.jonghyeon.com/api/v1/diary/list';

const useMonthlyDiary = () => {
  const { data, error } = useSWR<DiaryListResponse>(API_URL, fetcher);

  return {
    diaries: data ?? [],
    error,
  };
};

export default useMonthlyDiary;
