import axios from './core';

export const getDiaryList = (year: number, month: number) => {
  return axios({
    method: 'GET',
    url: `/diary/list?year=${year}&month=${month}`,
  });
};
