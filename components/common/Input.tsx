import { FC, InputHTMLAttributes, useCallback } from 'react';
import { useField } from 'formik';

import classnames from 'classnames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: FC<InputProps> = ({ className, name, label, ...inputProps }) => {
  const [{ value }, meta, { setValue }] = useField(name);

  const handleChange = useCallback(e => setValue(e.target.value), [setValue]);

  return (
    <div className={classnames('input', className)}>
      <label className='input-label' htmlFor={name}>
        {label}
      </label>
      <input onChange={handleChange} value={value} className='input-field' name={name} {...inputProps} />
    </div>
  );
};

export default Input;
