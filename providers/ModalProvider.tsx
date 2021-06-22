import { FC, createContext, useState } from 'react';

export type ModalName = 'CreateProject' | null;

export interface ModalContext {
  active: ModalName;
  setActive: (arg: ModalName) => void;
}

export const ModalContext = createContext<ModalContext>({ active: null, setActive: () => null });

const ModalProvider: FC = ({ children }) => {
  const [active, setActive] = useState<ModalName>(null);

  return <ModalContext.Provider value={{ active, setActive }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
