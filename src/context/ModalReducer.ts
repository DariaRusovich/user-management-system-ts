import { ModalWindowState } from "./interfaces";

type AppActions =
  | { type: 'OPEN'; payload: JSX.Element | null }
  | { type: 'CLOSE'; payload: JSX.Element | null };

export const ModalReducer = (state: ModalWindowState, action: AppActions): ModalWindowState => {
  console.log(state);

  switch (action.type) {
    case 'OPEN':
      return { ...state, isOpen: true, component: action.payload };
    case 'CLOSE':
      return { ...state, isOpen: false, component: action.payload };
    default:
      return state;
  }
};
