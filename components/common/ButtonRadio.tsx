import { FC, useCallback } from 'react';
import { useField } from 'formik';

interface ButtonRadioOption {
  name: string;
  displayName?: string;
}

interface ButtonRadioProps {
  options: ButtonRadioOption[];
  name: string;
}

const ButtonRadio: FC<ButtonRadioProps> = ({ name, options }) => {
  const [{ value }, meta, { setValue }] = useField(name);

  const handleClick = useCallback(() => {
    console.log('click');
  }, []);

  return (
    <div className='button-radio'>
      {options.map(({ displayName, name }) => (
        <button key={name} onClick={handleClick}>
          {displayName ?? name}
        </button>
      ))}
    </div>
  );
};

export default ButtonRadio;
