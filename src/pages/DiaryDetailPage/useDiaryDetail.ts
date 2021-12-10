import { getDiaryDetail } from 'apis';
import { Diary } from 'models/Diary';
import { useQuery } from 'react-query';

type DiaryDetailResponse = Diary;

const useDiaryDetail = (diaryId: string) => {
  const { data, error } = useQuery<DiaryDetailResponse>(['diaryDetail', { diaryId }], () => getDiaryDetail(diaryId));

  return { diaryDetail: data, error };
};

export default useDiaryDetail;
