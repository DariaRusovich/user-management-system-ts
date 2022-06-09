import { FC, useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import '../styles/ModalWindow.scss';

interface ModalWindow {
  component: JSX.Element | null;
}

const ModalWindow: FC<ModalWindow> = ({ component }) => {
  const { state, toggleModalClose } = useContext(ModalContext);
  const { isOpen } = state;

  const closeModal = () => {
    toggleModalClose();
  };

  return (
    <div className={`modal-window ${isOpen ? 'active' : ''}`}>
      <div className="modal-window__content">
        <button className="modal-close__btn" onClick={closeModal}>
          &#10006;
        </button>
        {component}
      </div>
    </div>
  );
};

export default ModalWindow;
