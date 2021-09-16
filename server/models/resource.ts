import { DataTypes } from 'sequelize';

import sequelize from 'server/sequelize';

import ResourceAdvantage from 'server/models/resoucreAdvantage';

const Resource = sequelize.define('Resource', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true,
  //   allowNull: false,
  // },
  name: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  image: DataTypes.BLOB,
});

// Resource.hasMany(ResourceAdvantage, { as: 'advantages' });

export default Resource;
