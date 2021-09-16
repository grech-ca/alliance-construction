import { DataTypes } from 'sequelize';

import sequelize from 'server/sequelize';

const ResourceAdvantage = sequelize.define('ResourceAdvantage', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true,
  //   allowNull: false,
  // },
  text: DataTypes.CHAR,
});

export default ResourceAdvantage;
