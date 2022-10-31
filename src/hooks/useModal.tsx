import { useContext } from 'react';

import { ModalContext } from '../contexts/ModalContext';

type UseModalReturn = [boolean, (isOpen: boolean) => void];

export const useModal = (): UseModalReturn => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return [isOpen, setIsOpen];
};
