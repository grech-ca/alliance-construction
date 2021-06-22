import { FC } from 'react';

import ReactModal from 'react-modal';

import { ModalName } from 'providers/ModalProvider';

import useModal from 'hooks/useModal';

interface ModalProps {
  name: ModalName;
  label?: string;
}

const Modal: FC<ModalProps> = ({ name, label, children }) => {
  const { active, close } = useModal(name);

  return (
    <ReactModal contentLabel={label} isOpen={active === name} onRequestClose={close}>
      {children}
    </ReactModal>
  );
};

export default Modal;
