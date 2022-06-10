import { ModalWindowState } from './interfaces';

import { createContext } from 'react';

export type ContextProps = {
  state: ModalWindowState;
  toggleModalOpen: (component: JSX.Element | null) => void;
  toggleModalClose: () => void;
};

export const ModalContext = createContext<ContextProps>({} as ContextProps);
