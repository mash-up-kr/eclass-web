import { toastTextAtom } from 'components/Toast';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

interface UseToastParams {
  conditions: boolean[];
  message: string;
  dependencies: unknown[];
}

const TOAST_DURATION_TIME = 2000;

export const useToast = ({ conditions, message, dependencies }: UseToastParams): void => {
  const setToastText = useSetRecoilState(toastTextAtom);

  useEffect(() => {
    if (!conditions.every((condition) => condition)) {
      return;
    }

    setToastText(message);

    setTimeout(() => {
      setToastText(undefined);
    }, TOAST_DURATION_TIME);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
