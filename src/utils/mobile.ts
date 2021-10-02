// MEMO(@mango906): export 하는 함수 추가될 때 lint disable 풀기
// eslint-disable-next-line import/prefer-default-export
export const MobileInterface = {
  // MEMO(@mango906): getToken 함수는 임의의 함수, 추후 ios쪽에서 제공해주는 인터페이스로 변경
  getToken() {
    return window.Mobile?.getToken?.();
  },
};
