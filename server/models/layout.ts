import { Model, DataTypes } from 'sequelize';

import sequelize from 'server/sequelize';

class Layout extends Model {}

Layout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    commonArea: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    buildArea: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.CHAR,
    },
  },
  { sequelize },
);

export default Layout;
