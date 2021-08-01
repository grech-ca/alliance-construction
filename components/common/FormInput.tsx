import { FC, useCallback } from 'react';
import { useField } from 'formik';

import Input, { InputProps } from 'components/common/Input';

interface FormInputProps extends InputProps {
  name: string;
}

const FormInput: FC<FormInputProps> = ({ name, ...inputProps }) => {
  const [{ value }, meta, { setValue }] = useField(name);

  const handleChange = useCallback(e => setValue(e.target.value), [setValue]);

  return <Input name={name} onChange={handleChange} value={value} {...inputProps} />;
};

export default FormInput;
