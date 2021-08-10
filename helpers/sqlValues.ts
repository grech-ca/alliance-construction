import toSqlValue from 'helpers/toSqlValue';

type SqlValuesData = Record<string, undefined | null | number | string>;

const sqlValues = (data: SqlValuesData | SqlValuesData[]): string => {
  const multiple = Array.isArray(data);

  const dataArray = multiple ? data : [data];

  const fields = Object.keys(dataArray[0]);
  const fieldsString: string = fields.join(', ');

  const getValues = (data: SqlValuesData) => {
    return Object.values(data).map(value => toSqlValue(value));
  };

  const values = dataArray.map(dataObj => getValues(dataObj).join(', '));
  const valuesString: string = values.join('), (');

  const result = `(${fieldsString}) VALUES (${valuesString})`;

  return result;
};

export default sqlValues;
