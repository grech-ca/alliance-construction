type SqlValuesData = Record<string, undefined | null | number | string>;

const sqlValues = (data: SqlValuesData | SqlValuesData[]): string => {
  const multiple = Array.isArray(data);

  const dataArray = multiple ? data : [data];

  const fields = Object.keys(dataArray[0]);
  const fieldsString: string = fields.join(', ');

  const getValues = (data: SqlValuesData) => {
    return Object.values(data).map(value => {
      if (value === null || value === undefined || (typeof value === 'number' && isNaN(value)))
        return JSON.stringify('NULL');
      if (typeof value === 'object') return JSON.stringify(JSON.stringify(value));

      return JSON.stringify(value);
    });
  };

  const values = dataArray.map(dataObj => getValues(dataObj).join(', '));
  const valuesString: string = values.join('), (');

  const result = `(${fieldsString}) VALUES (${valuesString})`;

  return result;
};

export default sqlValues;
