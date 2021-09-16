import { Sequelize } from 'sequelize';

import { red, green } from 'chalk';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'grech1234',
  database: 'alliance-db',
  // logging: false,
});

void sequelize
  .sync()
  .then(() => console.log(green('All models are synchronized')))
  .catch(err => console.error(red('Models were not synchronized:', err)));

void sequelize
  .authenticate()
  .then(() => console.log(green('Connection has been established successfully.')))
  .catch(err => console.error(red('Unable to connect to the database:', err)));

export default sequelize;
