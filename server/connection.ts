import mysql from 'mysql';

const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect();

export default connection;
