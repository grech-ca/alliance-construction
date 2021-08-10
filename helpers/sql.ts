import { MysqlError } from 'mysql';

// import connection from 'server/connection';

const sql = <ExpectedData>(literals: TemplateStringsArray, ...values: (string | number)[]): Promise<ExpectedData> => {
  const joinedLiterals = literals.reduce((acc, cur, index) => {
    return `${acc}${cur}${values[index] || ''}`;
  }, '');

  return new Promise((resolve, reject) => {
    // connection.query(joinedLiterals, (err: MysqlError, res: ExpectedData) => {
    //   // console.log(res);
    //   if (err) reject(err);
    //   resolve(res);
    // });
  });
};

export default sql;
