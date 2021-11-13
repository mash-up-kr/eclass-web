import { Diary } from 'models/Diary';
import useSWR from 'swr';
import { fetcher } from 'utils/fetcher';

type DiaryDetailResponse = Diary;

const API_URL = 'http://server.jonghyeon.com/api/v1/diary';

const useDiaryDetail = (diaryId: string) => {
  const { data, error } = useSWR<DiaryDetailResponse>(`${API_URL}/${diaryId}`, fetcher);

  return { diaryDetail: data, error };
};

export default useDiaryDetail;
