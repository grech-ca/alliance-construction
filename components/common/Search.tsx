import { FC, useCallback } from 'react';
import { useField } from 'formik';

import SearchIcon from '@material-ui/icons/Search';

interface SearchProps {
  name: string;
  formatter?: (value: string, prev: string) => string;
  placeholder?: string;
}

const Search: FC<SearchProps> = ({ name, formatter = value => value, placeholder = 'Поиск' }) => {
  const [{ value }, meta, { setValue }] = useField(name);

  const handleChange = useCallback(e => setValue(formatter(e.target.value, value)), [formatter, setValue, value]);

  return (
    <div className='input search'>
      <input type='text' value={value} onChange={handleChange} placeholder={placeholder} className='input-field' />
      <SearchIcon />
    </div>
  );
};

export default Search;
