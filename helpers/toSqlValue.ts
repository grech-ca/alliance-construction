const toSqlValue = (value: null | undefined | string | number | object): string => {
  if (value === null || value === undefined || (typeof value === 'number' && isNaN(value))) {
    return 'NULL';
  }

  if (typeof value === 'object') return JSON.stringify(JSON.stringify(value));

  return JSON.stringify(value);
};

export default toSqlValue;
