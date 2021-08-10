import { Model, DataTypes } from 'sequelize';

import sequelize from 'server/sequelize';

class Resource extends Model {}

Resource.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    image: DataTypes.BLOB('medium'),
  },
  { sequelize },
);

export default Resource;
