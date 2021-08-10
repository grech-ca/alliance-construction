import { Model, DataTypes } from 'sequelize';

import sequelize from 'server/sequelize';

class ResourceAdvantage extends Model {}

ResourceAdvantage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    text: DataTypes.CHAR,
  },
  { sequelize },
);

export default ResourceAdvantage;
