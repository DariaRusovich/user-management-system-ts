import { useEffect, useReducer } from 'react';
import ModalWindow from '../components/ModalWindow';
import { ModalWindowState } from './interfaces';
import { ModalContext } from './ModalContext';
import { ModalReducer } from './ModalReducer';

export const initialState: ModalWindowState = {
  isOpen: false,
  component: null,
};

export interface ModalState {
  isOpen: boolean;
  component: JSX.Element | null;
}

interface AppProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const ModalProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(ModalReducer, initialState);
  const { component } = state;

  useEffect(() => {
    window.addEventListener('keyup', e => {
      if (e.key === 'Escape') {
        dispatch({ type: 'CLOSE', payload: null });
      }
    });
  });

  const toggleModalOpen = (component: JSX.Element | null) => {
    dispatch({ type: 'OPEN', payload: component });
  };

  const toggleModalClose = () => {
    dispatch({ type: 'CLOSE', payload: null });
  };

  return (
    <ModalContext.Provider value={{ state, toggleModalOpen, toggleModalClose }}>
      <ModalWindow component={component}></ModalWindow>
      {children}
    </ModalContext.Provider>
  );
};
