import { Model, DataTypes } from 'sequelize';

import sequelize from 'server/sequelize';

class AdminConfig extends Model {
  key: string;
  value: string;
}

AdminConfig.init(
  {
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    value: {
      type: DataTypes.STRING,
    },
  },
  { sequelize },
);

void AdminConfig.sync();

export default AdminConfig;
