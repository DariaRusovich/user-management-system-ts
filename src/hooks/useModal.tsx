import React, { useReducer, useContext, createContext } from 'react';

type ModalState = typeof initialState;
type Action = { type: 'OPEN' } | { type: 'CLOSE' };

interface ChildrenProps {
  children: React.ReactNode;
}

const initialState = {
  open: false,
};

const ModalContext = createContext<{
  state: ModalState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

export const useModal = () => {
  return useContext(ModalContext);
};

export function ModalProvider({ children }: ChildrenProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
}

const reducer = (state: ModalState, action: Action) => {
  switch (action.type) {
    case 'OPEN': {
      return { ...state, open: true };
    }
    case 'CLOSE': {
      return { ...state, open: false };
    }
    default:
      return state;
  }
};
