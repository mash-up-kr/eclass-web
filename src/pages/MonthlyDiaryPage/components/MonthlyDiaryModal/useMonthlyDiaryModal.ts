import { useCallback, useState } from 'react';

export const useMonthlyDiaryModal = () => {
  const [isOpened, setOpened] = useState(false);

  const handleOpenModal = useCallback(() => {
    setOpened(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpened(false);
  }, []);

  return {
    isOpened,
    handleOpenModal,
    handleCloseModal,
  };
};
