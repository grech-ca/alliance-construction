import { DataTypes } from 'sequelize';

import sequelize from 'server/sequelize';

const AdminConfig = sequelize.define('AdminConfig', {
  key: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  value: {
    type: DataTypes.STRING,
  },
});

export default AdminConfig;
