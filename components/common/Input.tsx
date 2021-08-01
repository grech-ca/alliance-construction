import { FC, InputHTMLAttributes } from 'react';

import classnames from 'classnames';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: FC<InputProps> = ({ className, name, label, ...inputProps }) => (
  <div className={classnames('input', className)}>
    {label && (
      <label className='input-label' htmlFor={name}>
        {label}
      </label>
    )}
    <input className='input-field' {...inputProps} />
  </div>
);

export default Input;
