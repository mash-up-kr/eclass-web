import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';

export type ModalType = 'MONTHLY_DIARY' | 'DATE_PICKER';

const opendModalAtom = atom<ModalType | undefined>({
  key: 'opendModalAtom',
  default: undefined,
});

export const useModal = () => {
  const [openedModal, setOpenedModal] = useRecoilState(opendModalAtom);

  const handleOpenModal = useCallback(
    (modalType: ModalType) => () => {
      setOpenedModal(modalType);
    },
    [setOpenedModal]
  );

  const handleCloseModal = useCallback(() => {
    setOpenedModal(undefined);
  }, [setOpenedModal]);

  return {
    openedModal,
    handleOpenModal,
    handleCloseModal,
  };
};
