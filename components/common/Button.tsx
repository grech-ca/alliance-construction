import React from 'react';
import { FC } from 'react';

export enum ButtonVariant {
  default = 'default',
  alternate = 'alternate',
}

interface ButtonProps {
  children: React.ReactChild | React.ReactNode;
  variant: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({ variant, children }) => {
  return <button className={`btn ${variant === ButtonVariant.default ? 'default' : 'alternate'}`}>{children}</button>;
};
