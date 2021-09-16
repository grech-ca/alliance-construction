import { FC, useCallback, useMemo } from 'react';

import { uniq, compact, without } from 'lodash';

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
  const singleValue = useMemo(() => {
    const extracted = multiple && Array.isArray(value) ? (value as unknown[])[0] : value;

    if (!value) return value;
    return typeof options[0].value === 'string' ? String(extracted) : Number(extracted);
  }, [multiple, options, value]);

  const multipleValue = useMemo<unknown[]>(
    () =>
      (multiple && compact(Array.isArray(value) ? value : [value]))?.map(optionValue =>
        typeof options[0].value === 'string' ? String(optionValue) : Number(optionValue),
      ) ?? [],
    [multiple, options, value],
  );

  const handleOption = useCallback<HandleOption>(
    optionValue => {
      if (!multiple) return onChange(optionValue);

      if (multipleValue.includes(optionValue)) return onChange(compact(without(multipleValue, optionValue)));
      return onChange(compact(uniq([...multipleValue, optionValue])));
    },
    [multiple, multipleValue, onChange],
  );

  return (
    <StyledOptionsInput>
      {options.map(({ label, value: optionValue }) => {
        const selected = multiple ? multipleValue.includes(optionValue) : singleValue === optionValue;

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
