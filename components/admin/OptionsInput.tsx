import { FC, useCallback } from 'react';

import { without } from 'lodash';

import { Button } from '@material-ui/core';

import { StyledOptionsInput } from 'styles/OptionsInput';

export interface InputOption<V = string | number> {
  label: string;
  value: V;
}

interface OptionsInputProps {
  multiple?: boolean;
  options: InputOption[];
  value: unknown;
  onChange: (value: unknown) => void;
}

type HandleOption = (option: InputOption['value']) => void;

const OptionsInput: FC<OptionsInputProps> = ({ value, onChange, options, multiple }) => {
  const handleOption = useCallback<HandleOption>(
    optionValue => {
      if (!multiple) return onChange(optionValue);
      if (Array.isArray(value)) {
        if (value.includes(optionValue)) return onChange(without(value, optionValue));
        return onChange([...value, optionValue]);
      }
    },
    [multiple, onChange, value],
  );

  return (
    <StyledOptionsInput>
      {options.map(({ label, value: optionValue }) => {
        const selected = multiple ? Array.isArray(value) && value.includes(optionValue) : value === optionValue;

        return (
          <Button
            variant='contained'
            disableElevation
            color={selected ? 'primary' : 'default'}
            key={`${label}-${optionValue}`}
            onClick={() => handleOption(optionValue)}
          >
            {label}
          </Button>
        );
      })}
    </StyledOptionsInput>
  );
};

export default OptionsInput;
