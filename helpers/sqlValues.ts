const sqlValues = (data: Record<string, undefined | null | number | string>): string => {
  const fields = Object.keys(data);

  const values = Object.values(data).map(value => {
    if (value === null || value === undefined || (typeof value === 'number' && isNaN(value)))
      return JSON.stringify('NULL');
    if (typeof value === 'object') return JSON.stringify(JSON.stringify(value));

    return JSON.stringify(value);
  });

  const valuesString = `(${fields.join(', ')}) VALUES (${values.join(', ')})`;

  return valuesString;
};

export default sqlValues;
