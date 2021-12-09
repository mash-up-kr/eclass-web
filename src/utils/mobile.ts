// MEMO(@mango906): export 하는 함수 추가될 때 lint disable 풀기
// eslint-disable-next-line import/prefer-default-export
export const MobileInterface = {
  getToken() {
    return window.Mobile?.getToken?.();
  },
};
