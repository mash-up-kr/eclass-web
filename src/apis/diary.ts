import { fetcher } from './core';

export const getDiaryList = (year: number, month: number) => {
  return fetcher({
    method: 'GET',
    url: `/diary/list?year=${year}&month=${month}`,
  });
};

export const getDiaryDetail = (diaryId: string) => {
  return fetcher({
    method: 'GET',
    url: `/diary/${diaryId}`,
  });
};
