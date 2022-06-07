import { FC, useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import '../styles/ModalWindow.scss'

interface ModalWindow {
  component: JSX.Element | null
}

const ModalWindow: FC<ModalWindow> = ({component}) => {
    const { state } = useContext(ModalContext);
    const { open } = state;

    return (
        <div className={`modal-window ${open ? 'active' : ''}`}>
        <div className="modal-window__content">
          <button className="modal-close__btn">
            &#10006;
          </button>
          {component}
        </div>
      </div>
    );
};

export default ModalWindow;