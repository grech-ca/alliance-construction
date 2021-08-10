import toSqlValue from 'helpers/toSqlValue';

// const SQL_OPERATORS = ['$or', '$not', '$and', '$like'] as const;

// type SqlOperator = typeof SQL_OPERATORS[number];
// type NonSqlValue = string | number | undefined | null | object;
// type NonSqlValues = Record<string | SqlOperator, NonSqlValue>;

type HandleOperator = (key: string, value: string | number | object | any[], parentKey?: string) => string;
type SqlWhere = (object: Record<string, any>, nested?: boolean, parentKey?: string) => string;

const handleOperator: HandleOperator = (key, value, parentKey) => {
  switch (key) {
    case '$like': {
      if (typeof value === 'object') return sqlWhere(value, true, key);

      let desiredKey = parentKey ?? key;

      if (typeof value === 'number') desiredKey = `CAST(${desiredKey} as CHAR)`;
      return `${desiredKey} LIKE "${value.toString()}"`;
    }
    case '$and':
      if (!Array.isArray(value)) return '';
      return value.map(value => sqlWhere(value, true)).join(' AND ');
    case '$or':
      if (!Array.isArray(value)) return '';
      return value.map(value => sqlWhere(value, true)).join(' OR ');
    case '$not':
      if (!Array.isArray(value)) return '';
      return `NOT ${value.map(value => sqlWhere(value, true)).join(' AND NOT ')}`;
    default:
      if (typeof value === 'object') return sqlWhere(value, true, key);
      return `${key} = ${toSqlValue(value)}`;
  }
};

const sqlWhere: SqlWhere = (object, nested, parentKey) => {
  return `${Object.entries(object).reduce(
    (acc, [key, value], index) => {
      const fragment = handleOperator(key, value, parentKey);

      return [acc, fragment].join(index ? ' AND ' : ' ');
    },
    nested ? '' : 'WHERE',
  )}${nested ? '' : ';'}`;
};

export default sqlWhere;

// TODO: add nested boolean
