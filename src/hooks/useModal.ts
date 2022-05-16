import { useReducer, useContext, createContext } from 'react';

const initialState = {
  open: false,
};

const ModalContext = createContext(initialState);

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return 
};

const reducer = (state, action) => {
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
