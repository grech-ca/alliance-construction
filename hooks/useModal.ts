import { useContext, useCallback } from 'react';

import { ModalContext, ModalName } from 'providers/ModalProvider';

type ModalHook = (name: ModalName) => ModalHookResult;

interface ModalHookResult {
  open: () => void;
  close: () => void;
  toggle: () => void;
  active: ModalName | null;
}

const useModal: ModalHook = name => {
  const { active, setActive } = useContext(ModalContext);

  const open = useCallback(() => setActive(name), [name, setActive]);
  const close = useCallback(() => setActive(null), [setActive]);
  const toggle = useCallback(() => setActive(active !== name ? name : null), [active, name, setActive]);

  return {
    open,
    close,
    toggle,
    active,
  };
};

export default useModal;
