import { FC } from 'react';

import ReactModal from 'react-modal';
import { GrClose } from 'react-icons/gr';

import { ModalName } from 'providers/ModalProvider';

import useModal from 'hooks/useModal';

interface ModalProps {
  name: ModalName;
  label?: string;
}

const Modal: FC<ModalProps> = ({ name, label, children }) => {
  const { active, close } = useModal(name);

  return (
    <ReactModal
      className='modal'
      overlayClassName='modal-overlay'
      contentLabel={label}
      isOpen={active === name}
      onRequestClose={close}
    >
      <div className='modal-content'>
        <div className='modal-header'>
          {label && <span className='modal-title'>{label}</span>}
          <button className='close' onClick={close}>
            <GrClose className='close-icon' size={20} />
          </button>
        </div>
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
