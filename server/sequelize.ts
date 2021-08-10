import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'admin',
  password: 'grech1234',
  database: 'alliance-db',
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (err) {
  console.error('Unable to connect to the database:', err);
}

export default sequelize;
